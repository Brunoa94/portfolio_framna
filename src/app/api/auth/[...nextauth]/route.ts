// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Code", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        console.log("PASSEI AQUI");
        // const authService = await new AuthService().authenticate(credentials?.email || "", credentials?.match_id || "");

        // if () {
        //   throw new Error("Login falhou");
        // }

        return {
          id: "1234",
          name: "Bruno Afonso",
          email: credentials?.email,
        };
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
          email: token.email,
          name: token.name,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as User;
        return {
          ...token,
          id: u.id,
          email: u.email,
          name: u.name,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
