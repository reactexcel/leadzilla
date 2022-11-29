import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-black w-full flex justify-center">
        <div className="w-10/12 py-20">
          <div className="flex  sm:flex-wrap flex-row justify-between">
            <div className="flex justify-center items-center">
              <div className="flex flex-row items-center sm:hidden md:hidden">
                <img
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="162px"
                  height="42px"
                />
              </div>
              <div className="sm:block md:block hidden flex flex-row items-center sm:mb-4 sm:mt-4">
                <img
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="120px"
                  height="38px"
                />
              </div>
            </div>

            <div className="flex flex-row items-center">
              <Link href="https://app.leadzilla.ai/login">
                <button className="text-white text-sm font-bold border-2 py-4 sm:py-4 px-8 sm:px-4 rounded-full mr-4 hover:bg-yellow-300 hover:text-black sm:w-119 sm:text-xs">
                  Try it at no cost
                </button>
              </Link>
              <Link href="https://chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
                <button className="hover:text-white text-sm font-bold py-4 bg-yellow-300 text-black-300  sm:py-4 px-8 sm:px-4 rounded-full sm:w-120 sm:text-xs sm:font-bold">
                  Add chrome extension
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div className="font-gilroybold text-white text-lg mb-5 flex flex-col">
              <Link href="/features">Features</Link>
            </div>
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="/pricing">Pricing</Link>
            </div>
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="https://blog.leadzilla.ai">Blogs</Link>
            </div>
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="/contactus">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col"></div>
          <div className="flex flex-row-reverse sm:block justify-between items-center mt-20">
            <div className="flex flex-row sm:-ml-3 sm:mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <img
                  src="/assets/facebook.png"
                  alt="facebook"
                  height="25"
                  width="18"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <img
                  src="/assets/linkedIn.png"
                  alt="facebook"
                  height="25"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <img
                  src="/assets/youtube.png"
                  alt="facebook"
                  height="18"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <img
                  src="/assets/instagram.png"
                  alt="facebook"
                  height="25"
                  width="25"
                />
              </div>
            </div>
            <p className="text-gray-400">©Copyright 2022 Leadzilla</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
