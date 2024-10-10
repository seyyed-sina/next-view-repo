import NextAuth, { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';

import { routes } from '@/constants/routes';

const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: routes.SIGN_IN,
  },
  callbacks: {
    authorized: ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === 'update') token.name = session.user.name;
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
  debug: process.env.NODE_ENV !== 'production' ? true : false,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
