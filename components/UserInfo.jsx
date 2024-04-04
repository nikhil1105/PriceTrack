"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "./Navbarp";

export default function UserInfo() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  function handel(e) {
    e.preventDefault();
    signOut()     
  }
  

  useEffect(()=>{
  if (!session) {
    router.push('/')
  }
  })

  return (
    <div className="gap-10">
            <Navbar/>
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <form onSubmit={handel} >
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
        
        <div className="flex justify-between" >
        <button
          type="submit"
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
        
        <Link        
          href='/'
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Home
        </Link>
        </div>

        </form>
      </div>
    </div>
  );
}