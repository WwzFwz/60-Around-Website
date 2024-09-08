"use client"; 
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "Build\WGL.loader.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen">
      <Link href={`/mini-games`}>
        <button className="absolute top-32 left-2 rounded-full p-2">
          <Image src="/back_arrow.svg" alt="Back" width={40} height={40} />
        </button>
      </Link>
    
      <iframe
      src="index.html"
      height="100%"
      width="100%"
      allowFullScreen
    ></iframe>
    </div>
  );
}
