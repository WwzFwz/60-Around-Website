import { doc } from "prettier";
import React, { useEffect } from "react";
import Link from "next/link";

export default function Page() {

  return (
     <div className="relative bg-gradient-to-t from-[#C8C7C740] to-[#7F9F8075] h-screen" >
      <div className="w-[1280px] h-[832px] mx-auto">
        <div className="absolute w-[385px] h-[244px] mt-[246px] ml-[96px] gap-0">
          <div className="font-poppins text-[49px] font-bold leading-[73.5px] text-left text-[#596E5A]">
            Prove Your Arounders Knowledge !
          </div>
        </div>
        <div className="absolute w-[312px] h-[74px] mt-[512px] ml-[96px] gap-0">
          <div className="font-poppins text-[20px] font-normal leading-[30px] text-left text-[#7F9F80]">
              Play the mini games and be the best Arounders of all time! 
          </div>
        </div>
        <div className="absolute bg-white h-[578px] mt-[164px] ml-[517px] gap-0">
          <img className="h-[578px] border-[10px] border-[#7F9F80]" src="/gamePreview.jpg" alt="" />
          <button className="bg-white w-[171.06px] h-[52.63px] rounded-3xl border-[4px] border-[#7F9F80] mt-10">
            <div className="font-poppins text-[16px] font-semibold leading-[24px] text-center">
              <Link href="/game"> Play Game</Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}



