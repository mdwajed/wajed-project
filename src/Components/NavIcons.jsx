"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  // temporary
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="flex items-center gap-4 xl:gap-6  relative">
      <Image
        src="/profile.png"
        alt="search img"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 top-12 rounded-md left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2) ] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Log Out</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="search img"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt="search img"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-wajed rounded-full text-white text-sm flex items:center justify-center ">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
