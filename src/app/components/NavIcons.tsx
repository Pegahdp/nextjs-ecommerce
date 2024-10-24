"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isProfileOpen, setIsprofileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsprofileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 md:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt=""
        onClick={handleProfile}
        className="cursor-pointer"
      />
      {isProfileOpen && (
        <div className="absolute p-4 top-8 left-0 rounded-md text-xs z-10 shadow-md">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image src="/notification.png" width={22} height={22} alt="" />
      <div className="cursor-pointer relative">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt=""
          className="cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 flex items-center justify-center text-[#fff] text-sm rounded-full bg-themeRed">
          2
        </div>
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}
