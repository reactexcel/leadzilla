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
              <div className="flex-shrink-0 flex items-center">
                <Image
                  src="/assets/logo.png"
                  alt=""
                  width="45px"
                  height="45px"
                />
                <div className="font-bold ml-2 text-lg">Leadzilla</div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <div
                    className="text-black px-3 py-2 text-lg font-medium"
                    aria-current="page"
                  >
                    Solutions
                  </div>
                  <div className="text-black px-3 py-2 text-lg font-medium">
                    <Link href="/pricing">Pricing</Link>
                  </div>
                  <div className="text-black px-3 py-2 text-lg font-medium">
                    Resources
                  </div>
                  <div className="text-black px-3 py-2 text-lg font-medium">
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button className="border-2 border-black px-2 mr-3 py-2 text-base font-bold">
                  Sign up
                </button>
                <button className="bg-black py-2 px-2 text-white text-base font-bold">
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
