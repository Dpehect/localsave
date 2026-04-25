import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isMerchantRoute = nextUrl.pathname.startsWith("/merchant");
      const isAdminRoute = nextUrl.pathname.startsWith("/admin");

      if (isMerchantRoute) {
        if (isLoggedIn) return auth.user.role === "MERCHANT";
        return false;
      }
      if (isAdminRoute) {
        if (isLoggedIn) return auth.user.role === "ADMIN";
        return false;
      }
      return true;
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        // Mock authorization for demo
        if (credentials.email === "esnaf@localsave.com" && credentials.password === "123456") {
          return { id: "1", name: "Mehmet Esnaf", email: "esnaf@localsave.com", role: "MERCHANT" };
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
