"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MyLinks from "./MyLinks";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  // Change this to true when user logged in
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const isLoggedIn = session?.user;

  const LogOut = async () => {
    await authClient.signOut();
    window.location.href ='/login'
  };
   const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handelResize =()=>{
      if (window.innerWidth > 700 ) {
        setShowMenu(false)
      }
    }
    document.getElementById('closeBlack').addEventListener("click", ()=>{
      setShowMenu(false)
    })
    
    window.addEventListener('resize', handelResize)
    return () => {
      window.removeEventListener('resize', handelResize)
    };
  }, [])


  return (
    <header className="w-full z-150 fixed top-0 shadow-md bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center">
          <span onClick={()=>setShowMenu(!showMenu)} className=" text-2xl mr-2 md:hidden">
            {showMenu?<IoMdClose className="text-red-700 border cursor-pointer"/>:<IoMenuSharp className="cursor-pointer"/>}
          </span>
          <Link href="/" className="font-extrabold text-2xl text-blue-600">
            Tiles Gallery
          </Link>
        </div>

        <div className={`px-20 transition-all duration-700 flex flex-col top-18 ${showMenu? 'left-0':' -left-100'} z-50 bg-white h-screen fixed gap-8 text-gray-700 font-medium md:hidden`}>
          <MyLinks href="/">Home</MyLinks>

          <MyLinks href="/all-tiles" className="hover:text-blue-600 transition">
            All Tiles
          </MyLinks>

          <MyLinks href="/profile" className="hover:text-blue-600 transition">
            My Profile
          </MyLinks>
        </div>
        <div id="closeBlack" className={`fixed transition-all duration-200 top-18.5 z-10 bg-black/50 h-screen w-full ${showMenu ? 'left-0 ':'-left-500'}`}></div>
        {/* Center - Menu Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <MyLinks setShowMenu={ setShowMenu} href="/">Home</MyLinks>

          <MyLinks  setShowMenu={ setShowMenu} href="/all-tiles" className="hover:text-blue-600 transition">
            All Tiles
          </MyLinks>

          <MyLinks setShowMenu={ setShowMenu} href="/profile" className="hover:text-blue-600 transition">
            My Profile
          </MyLinks>
        </div>

        {/* Right - Auth Buttons */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Link
              href="/login"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href={"/profile"}
                className="rounded-full overflow-hidden h-[40px] w-[40px] "
              >
                <Image
                  src={isLoggedIn.image}
                  width={40}
                  height={40}
                  alt="Image"
                  className="object-cover "
                ></Image>
              </Link>

              <button
                onClick={LogOut}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;