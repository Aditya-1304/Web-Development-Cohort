import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { pages } from "next/dist/build/templates/app-page";


export const NEXT_AUTH = {
  providers : [
    CredentialsProvider({
      name : "Email",
      credentials : {
        username : {label : "Username", type : "text", placeholder : "email"},
        password : {label : "Password", type : "password", placeholder : "password"}
      },
      async authorize(credentials : any){
        console.log(credentials);
        
        return {
          id : "user1",
          name : "John Doe",
          email : "johndoe@gmail.com"
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
    })
  ],
  secret : process.env.NEXTAUTH_SECRET,
  callbacks : {
    // signIn : ({user}) => {
    //   if (user.email === "random@gmail.com"){
    //     return false;
    //   }
    //   return true;
    // }

    jwt: ({ token, user }: { token: any; user: any }) => {
      console.log(token);
      token.userId = "user1";
      token.type = "admin";
      return token;
    },
    session : ({session, token ,user } : any) => {
      console.log(session);
      if (session && session.user) {
        session.user.userId = token.userId;
      }
      return session;
    }
  },
  pages :{
    signIn : "/signin",
    
  }
}
