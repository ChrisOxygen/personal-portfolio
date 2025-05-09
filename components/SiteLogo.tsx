import Link from "next/link";
import React from "react";

type LogoSize = "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";

interface SiteLogoProps {
  size?: LogoSize;
}

function SiteLogo({ size = "4xl" }: SiteLogoProps) {
  return (
    <Link href="/">
      <div className={`flex items-center text-${size}`}>
        <span className="font-grotesk">useChris</span>
        <span className="font-source font-bold text-[#7D44C5]">()</span>
      </div>
    </Link>
  );
}

export default SiteLogo;
