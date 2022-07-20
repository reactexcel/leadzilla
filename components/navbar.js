import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="sm:hidden md:hidden">
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
              <div className="font-medium lg:mx-5">
                <div className="flex space-x-4">
                  {/* <div
                    className="text-black px-3 py-2 text-base"
                    aria-current="page"
                  >
                    Blogs
                  </div> */}
                  <div className="text-black px-3 lg:px-1 py-2 text-base">
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="text-black px-3 lg:px-1 py-2 text-base">
                    <Link href="/features">Features</Link>
                  </div>

                  <div className="text-black px-3 lg:px-1 py-2 text-base">
                    <Link href="https://blog.leadzilla.ai">Blogs</Link>
                  </div>
                  <div className="text-black px-3 lg:px-1 py-2 text-base">
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>
              <div className="flex">
                <Link href="https://app.leadzilla.ai/login">
                  <button className="border-2 hover:border-white border-black px-2 mr-3 py-2 text-base font-medium hover:bg-black hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    Sign up
                  </button>
                </Link>
                <Link href="https://calendly.com/sam_gupta/15min">
                  <button className="hover:bg-black hover:border-white hover:text-white border-2 border-black py-2 px-2 text-base font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    Book a demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

   
      

    </>
  );
};

export default Navbar;
