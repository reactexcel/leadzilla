import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="sm:bg-blue-300 sm:hidden">
        <div className="w-10/12 py-2 mx-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between ">
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
                  {/* <div
                    className="text-black px-3 py-2 text-base"
                    aria-current="page"
                  >
                    Blogs
                  </div> */}
                  <div className="text-black px-3 py-2 text-base">
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="text-black px-3 py-2 text-base">
                    <Link href="/features">Features</Link>
                  </div>

                  <div className="text-black px-3 py-2 text-base">
                    <Link href="https://blog.leadzilla.ai">Blogs</Link>
                  </div>
                  <div className="text-black px-3 py-2 text-base">
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


      <nav class="bg-blue-300 border-gray-200 dark:border-gray-600 dark:bg-gray-900 hidden sm:block">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="/">
            <Image
              src="/assets/logoleadzilla.svg"
              alt=""
              width="120px"
              height="38px"
            />
          </Link>
          <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div id="mega-menu-full" class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 text-sm font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100" aria-current="page">Solutions</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Pricing</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">Resources</a>
              </li>
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 ">About</a>
              </li>
            </ul>
          </div>
        </div>

      </nav>


    </>
  );
};

export default Navbar;
