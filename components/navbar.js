import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
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

      <nav class="hidden sm:block md:block bg-blue-300 border-gray-200 px-2 md:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <Image
              src="/assets/logoleadzilla.svg"
              alt=""
              width="120px"
              height="38px"
            />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false" onClick={(e) => setToggle(!toggle)}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class={`${toggle ? "" : "hidden"} w-full`} id="navbar-default">
            <ul class="flex flex-col ml-3 mt-4 md:mt-2 md:text-md">
             
              <li className="sm:my-2 md:my-2">
                <Link href="/pricing" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Pricing</Link>
              </li>
              <li className="sm:my-2 md:my-2">
                <Link href="/features" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Features</Link>
              </li>
              <li className="sm:my-2 md:my-2">
                <Link href="/https://blog.leadzilla.ai" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Blogs</Link>
              </li>
              <li className="sm:my-2 md:my-2">
                <Link href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </>
  );
};

export default Navbar;
