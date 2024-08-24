"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-4">
      <h1>React Counter Button</h1>
      <Button></Button>
    </main>
  );
}

function Button(){
  const [count, setCount] = useState(0)
  return <button onClick={()=> setCount((count)=> count+1)} className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold px-4 py-2">
              {"I have been clicked "+count+" times"}
        </button>
}
