import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";
import { PrismaClient } from "@/generated/prisma";
import { comparePasswords } from "@/lib/passwords";
import { ErrorI } from "@/types/api";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Code", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        const prisma = new PrismaClient();

        try {
          const user = await prisma.admin.findFirst({
            where: { username: credentials?.username },
          });

          if (!user) {
            const error: ErrorI = {
              message: "Authentication failed",
              status: 401,
            };
            throw error;
          }

          const isAuthenticated = await comparePasswords(
            credentials?.password || "",
            user?.password || ""
          );

          if (!isAuthenticated) {
            const error: ErrorI = {
              message: "Authentication failed",
              status: 401,
            };
            throw error;
          }

          console.log("USER: " + JSON.stringify(isAuthenticated));
          return {
            id: user?.id || 0,
            username: user?.username || "",
          };
        } catch (error) {
          console.log("Authentication error:", error);
          throw error;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/",
    signOut: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as User;
        return {
          ...token,
          id: u.id,
          username: u.username,
        };
      }
      return token;
    },
  },
};
