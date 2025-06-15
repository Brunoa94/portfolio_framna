// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";
import { PrismaClient } from "@/generated/prisma";
import { comparePasswords } from "@/lib/passwords";

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
            throw new Error("Authentication failed");
          }

          const isAuthorized = await comparePasswords(
            credentials?.password || "",
            user?.password || ""
          );

          if (!isAuthorized) {
            throw new Error("Authentication failed");
          }

          return {
            id: user?.id || 0,
            username: user?.username || "",
          };
        } catch {
          throw new Error("Authentication failed");
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
