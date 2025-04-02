"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
   <div className="flex flex-col justify-center items-center min-h-screen ">

    <h1 className="text-2xl font-bold mb-4">Welcome to Jarvis!</h1>

    <p className="text-sl font-medium">
    Your personal AI assistant for Japanese learnign and art generation.
    </p>

    <button 
    onClick={(e) =>{ 
      router.push('/chatbox')
    }}
    className="bg-red-600 rounded-full text-white mt-8 p-3">Get Started </button>

   </div>
   
  );
}
