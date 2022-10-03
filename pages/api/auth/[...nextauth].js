import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from './../../../database/mongodb';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        console.log(user.name);
        console.log(account);
        console.log(profile);
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    // async session({ session, user, token }) {
    //   if (session) {
    //     registerUser(session);
    //   }
    //   return session;
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token;
    // },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/SignIn',
  },
});

const registerUser = async (session) => {
  var name = session.user.name;
  var email = session.user.email;
  console.log(name);
  // try {
  //   const data = {
  //     userName,
  //     password,
  //     email,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   const endpoint = '/api/users';
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSONdata,
  //   };
  //   const response = await fetch(endpoint, options);
  //   const result = await response.json();
  //   if (result.error) {
  //     setError(result.error);
  //   } else {
  //     router.push('http://localhost:3000/');
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
};
