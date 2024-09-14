"use client"
import { doc } from "prettier";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflowX = "hidden";
    
    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
     <div className="relative bg-gradient-to-t from-[#C8C7C740] to-[#7F9F8075] h-screen" >
      <div className="w-[1280px] h-screen mx-auto">
        <div className="absolute w-[385px] h-[244px] mt-[120px] ml-[60px] gap-0">
          <div className="font-poppins text-[49px] font-bold leading-[73.5px] text-left text-[#596E5A]">
            Prove Your Arounders Knowledge !
          </div>
        </div>
        <div className="absolute w-[312px] h-[74px] mt-[364px] ml-[60px] gap-0">
          <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#7F9F80]">
              Play the mini games and be the best Arounders of all time! 
          </div>
          <button className="bg-white w-[171.06px] h-[52.63px] rounded-3xl border-[4px] border-[#7F9F80] mt-10">
            <div className="font-poppins text-[16px] font-semibold leading-[24px] text-center">
              <Link href="/game"> Play Game</Link>
            </div>
          </button>
        </div>
        <div className="absolute bg-white h-flex xl:h-[500px] mt-[550px] xl:mt-[120px] ml-[60px] xl:ml-[400px] gap-0">
          <img className="h-flex xl:h-[500px] border-[10px] border-[#7F9F80]" src="/gamePreview.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}



