"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="w-full h-[calc(100vh-80px)] absolute bg-black text-white text-xl left-0 top-20 flex flex-col justify-center items-center gap-8 ">
          <Link href="/">Homepage</Link>
          <Link href="/">Shopes</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
