import clsx from "clsx";
import Link from "next/link";
import React from "react";

type HeaderNavLinkProps = {
  href: string;
  isActive: boolean;
  title: string;
};

function HeaderNavLink({ href, isActive, title }: HeaderNavLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          " text-white capitalize w-max font-grotesk leading-0 after:w-[90%] after:h-[3px] after:bg-[#9362D1] after:rounded-full after:bottom-[-18px] after:left-1/2 after:-translate-x-1/2 after:absolute relative after:transition-all after:duration-300",
          isActive ? "after:content-[''] font-bold" : "font-normal"
        )}
      >
        {title}
      </div>
    </Link>
  );
}

export default HeaderNavLink;
