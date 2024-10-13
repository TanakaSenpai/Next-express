import axios from "axios";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserType } from "@/app/schema/user";


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ): Promise<UserType | null> {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        try {
          const { data: user } = await axios.post<UserType>(
            "http://localhost:8080/auth/sign-in",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          return user;
        } catch (err) {
           if (axios.isAxiosError(err) && err.response) {
             throw new Error(
               err.response.data.message || "Authentication failed"
             );
           }
           return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token._id;
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

