import React from "react";
import { Button } from "./ui/button";

function CustomButtonOne({ children }: { children: React.ReactNode }) {
  return (
    <Button className="cursor-pointer shadow-[12.61px_7.42px_7.71px_0px_rgba(23,28,37,0.24)] font-grotesk font-medium text-[20px] transition-all duration-1000 ease-in-out leading-none tracking-[-2%] bg-[linear-gradient(to_right,#8B63C2_0%,#8B63C2_75%,#BB8EF9_100%)] rounded-[30.77px] group relative inline-flex pl-[39px] pr-[27px] items-center justify-center overflow-hidden py-5 text-neutral-200 hover:scale-105">
      {children}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20"></div>
      </div>
    </Button>
  );
}

export default CustomButtonOne;

{
  /* <div className="flex items-center gap-5">
        <span className="">Let's talk</span>
        <Image
          src="/assets/button-arrow.svg"
          alt="Arrow right icon"
          width={42}
          height={42}
        />
      </div> */
}
