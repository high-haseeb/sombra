import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen h-screen left-0 z-50 mix-blend-difference text-4xl font-bold leading-8 pointer-events-none">
      <div className="relative w-full h-full">
        <span className="absolute top-10 left-10 font-sans">
          <Image src={"/logo.png"} width={180} height={40} alt="checkbox" />
        </span>
        <div className="flex flex-col gap-2 absolute right-10 top-10 invert">
          <Image src={"/icons/box.svg"} width={10} height={40} alt="checkbox" />
          <Image src={"/icons/box.svg"} width={10} height={40} alt="checkbox" />
          <Image src={"/icons/box.svg"} width={10} height={40} alt="checkbox" />
        </div>
        <div className="uppercase text-xl absolute -left-20 top-1/2 -rotate-90">bringing dark to light</div>
        <div className="uppercase text-sm font-normal absolute left-10 bottom-10">Copyright (c) 2024 Sombra. All Rights Reserved.</div>
        <div className="flex gap-4 absolute bottom-10 right-10 text-xl items-center justify-center pointer-events-auto">
          <div className="w-6 h-6 border-2 border-white"></div>
          <Link href={"https://x.com"}>X</Link>
          <div className="w-6 h-6 border-2 border-white"></div>
          <Link href={"https://linkedin.com"}>LINKEDIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
