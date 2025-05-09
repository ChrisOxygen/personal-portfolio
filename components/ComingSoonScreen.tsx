import React from "react";
import SiteLogo from "./SiteLogo";
import Image from "next/image";

function ComingSoonScreen() {
  return (
    <main className="h-screen grid overflow-hidden place-items-center bg-[#14171E] relative">
      <Image
        src="/assets/blur-1.svg"
        alt="burl-bg"
        className="absolute top-0 right-0"
        width={782}
        height={759}
      />
      <Image
        src="/assets/blur-2.svg"
        alt="burl-bg"
        className="absolute top-[306px] left-0"
        width={782}
        height={759}
      />

      <div className="flex flex-col relative items-center text-white gap-5">
        <SiteLogo size="3xl" />
        <div className="relative">
          <h1 className="md:text-8xl text-6xl text-center font-bold text-white">
            Coming Soon
          </h1>
        </div>
        <p className="text-lg text-gray-500 items-center text-center">
          This site is currently under construction. Stay tuned for updates!
        </p>
      </div>
    </main>
  );
}

export default ComingSoonScreen;
