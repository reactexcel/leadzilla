import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleClickedSignUp = (e) => {
    e.preventDefault();
    router.push("https://app.leadzilla.ai/login");
  };

  const handleBookAdemo = (e) => {
    e.preventDefault();
    router.push("https://calendly.com/sam_gupta/15min");
  };
  return (
    <nav
      className={`hidden sm:block md:block border-gray-200 px-2 md:px-4 py-2.5 rounded dark:bg-gray-900 shadow-md ${
        toggle && "bg-gray-50 z-10"
      }`}
    >
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/">
          <img
            src="/assets/logoleadzilla.svg"
            alt=""
            width="120px"
            height="38px"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={(e) => setToggle(!toggle)}
        >
          <img src="/assets/hamburger.svg" width="30" height="30" />
        </button>
        <div className={`${toggle ? "" : "hidden"} w-full`} id="navbar-default">
          <ul className="flex flex-col ml-3 mt-4 md:mt-2 md:text-md">
            <li className="sm:my-2 md:my-2 font-semibold">
              <Link
                href="/pricing"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 "
              >
                Pricing
              </Link>
            </li>
            <li className="sm:my-2 md:my-2 font-semibold">
              <Link
                href="/features"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 "
              >
                Features
              </Link>
            </li>
            <li className="sm:my-2 md:my-2 font-semibold">
              <Link
                href="https://blog.leadzilla.ai"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 "
              >
                Blogs
              </Link>
            </li>
            <li className="sm:my-2 md:my-2 font-semibold">
              <Link
                href="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100"
              >
                About
              </Link>
            </li>
            <hr />
            <li
              className="sm:my-2 md:my-2 font-semibold"
              onClick={handleClickedSignUp}
            >
              <button className="border-2 px-2 mr-3 py-2 text-base font-medium w-full hover:bg-black hover:text-white border-black">
                {/* <Link
                  href='https://app.leadzilla.ai/login'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100'
                > */}
                Start for free
                {/* </Link> */}
              </button>
            </li>
            <li
              className="sm:my-2 md:my-2 font-semibold"
              onClick={handleBookAdemo}
            >
              <button className="border-2 px-2 mr-3 py-2 text-base font-medium w-full hover:bg-black hover:text-white border-black">
                {/* <Link
                  href='https://calendly.com/sam_gupta/15min'
                  className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100'
                > */}
                Book a demo
                {/* </Link> */}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
