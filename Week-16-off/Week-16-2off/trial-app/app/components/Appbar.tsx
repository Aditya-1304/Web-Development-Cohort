"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { json } from "stream/consumers";

export const Appbar = () => {
  const session = useSession();
  return (
    <div>
      <button onClick={() => {
        signIn()
      }}>signin</button>
      <button onClick={() => {
        signOut()
      }}>signout</button>
    {JSON.stringify(session)}
    </div>
  )
}