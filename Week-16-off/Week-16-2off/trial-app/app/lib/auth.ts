import CredentialsProvider from "next-auth/providers/credentials";

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
  }
}