import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
    })
  ],
  secret : process.env.NEXTAUTH_SECRET
})
export const GET = handler;
export const POST = handler;