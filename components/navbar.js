import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <div className="w-10/12 py-2 mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between">
              <div className="flex-shrink-0 flex items-center cursor-pointer">
                <Link href="/">                
                 <Image
                  src="/assets/logoleadzilla.svg"
                  alt=""
                  width="160px"
                  height="42px"
                />
                </Link>

              </div>
              <div className="hidden sm:block sm:ml-6 font-medium">
                <div className="flex space-x-4">
                  <div
                    className="text-black px-3 py-2 text-base"
                    aria-current="page"
                  >
                    Solutions
                  </div>
                  <div className="text-black px-3 py-2 text-base">
                    <Link href="/pricing">Pricing</Link>
                  </div>
                  <div className="text-black px-3 py-2 text-base">
                    Resources
                  </div>
                  <div className="text-black px-3 py-2 text-base">
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
              <Link href="/signup"> 
                <button className="border-2 border-black px-2 mr-3 py-2 text-base font-medium hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Sign up
                </button>
                </Link>
                <button className="hover:bg-black hover:text-white border-2 border-black py-2 px-2 text-base font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
