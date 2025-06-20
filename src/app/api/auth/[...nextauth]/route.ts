// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
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
          const user = await prisma.user.findFirst({
            where: { username: credentials?.username },
          });

          if (!user) {
            const error: ErrorI = {
              message: "Authentication failed",
              status: 401,
            };
            throw error;
          }

          await comparePasswords(
            credentials?.password || "",
            user?.password || ""
          );

          return {
            id: user?.id || 0,
            username: user?.username || "",
          };
        } catch {
          const error: ErrorI = {
            message: "Authentication failed",
            status: 401,
          };
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
