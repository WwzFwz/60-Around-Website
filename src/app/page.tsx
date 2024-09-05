import React from "react";
import Link from "next/link"

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:'url(/Home_Bc.png)',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        justifyContent: 'flex-start', 
        position: 'relative' 
      }}
    >
        <div className="z-20 flex flex-col mt-80 ml-40 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-8">Embrace The Moment</h1>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Around Campus!</h1>
          <p className="text-lg md:text-xl mb-1">
            GO AROUND Campus of Ganesha ITB and create extraordinary experiences with us.
          </p>
        </div>
        <div
          className="absolute bottom-0 w-screen opacity-60"
        >
          <Link href="/explore">
            <p className="text-blue-900 font-bold py-4"
                style={{
                  background: 'linear-gradient(to top, #FFC475, #F9E998)',
                  textAlign: 'center',
                  padding: '10px',
                }}
                >
              Ready to Explore?
            </p>
          </Link>
        </div>
      </div>
  );
}
