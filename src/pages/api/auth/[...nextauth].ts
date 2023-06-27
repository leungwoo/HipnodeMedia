/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth';
// import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
//import FacebookProvider from 'next-auth/providers/facebook';
//import TwitterProvider from 'next-auth/providers/twitter';

// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import Users from '../../../../lib/mongoConnection/models/User';
import connectMongo from '../../../../lib/mongoConnection';

// Initialize NextAuth

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID as string,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    // }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID as string,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
    // }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
  ],
  pages: {
    signIn: '/signin',
  },

  // adapter: MongoDBAdapter(connectMongo()),
  callbacks: {
    async signIn({ user }) {
      await connectMongo();
      const existingUser = await Users.findOne({ email: user.email });
      if (existingUser) return existingUser;

      const newUser = await Users.create({
        name: user.name,
        display_name: user.name?.split(' ')[0],
        email: user.email,
        profile_photo: user.image,
        provider_id: user.id,
      });

      user.id = newUser.id;

      return newUser;
    },
    async jwt({ token, user }) {
      await connectMongo();
      if (user) {
        const existingUser = await Users.findOne({ email: user.email });

        if (existingUser) {
          token.uid = existingUser?._id;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.uid as string;
      }
      // session.user = token;
      return session;
    },
  },
});
