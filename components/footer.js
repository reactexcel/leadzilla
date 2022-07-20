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
                <Image
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="162px"
                  height="42px"
                />
              </div>
              <div className="sm:block md:block hidden flex flex-row items-center sm:mb-4 sm:mt-4">
                <Image
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="120px"
                  height="38px"
                />
              </div>
              {/* <div className='flex flex-row items-center ml-4'>
                <Image src="/assets/messageIcon.png" alt="message" width="14" height="14" />
                <p className='text-gray-300 text-xs font-semibold mx-2'>{"English (US)"}</p>
                <Image src='/assets/greyDownArrow.png' alt="down arrow" width="8" height="5" />
              </div> */}
            </div>

            <div className="flex flex-row items-center">
              <Link href="https://app.leadzilla.ai/login">
                <button className="text-white text-sm font-bold border-2 py-4 sm:py-2 px-8 sm:px-6 rounded-full mr-4 hover:bg-yellow-300 hover:text-black">
                  Get Started
                </button>
              </Link>
              <Link href="https://chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
                <button className="hover:text-white text-sm font-bold  bg-yellow-300 text-black  py-4 sm:py-2 px-8 sm:px-6 rounded-full">
                  Add Chrome Extension
                </button>
              </Link>
            </div>
          </div>

          {/* Disabling link while FAQ page is under development
           <div className='flex flex-row justify-between mt-16'> */}

          <div className="flex sm:flex-wrap justify-between mt-16">
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="/features">Features</Link>
              <p className="font-light">Text here</p>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>

            </div>
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="/pricing">Pricing</Link>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>


            </div>

            {/* <p className='text-gray-500 my-2 cursor-pointer'><Link href="/features">Features</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'> <Link href="https://blog.leadzilla.ai"> Blogs</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/faq">FAQ</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/contactus">Contacts</Link></p> */}
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="https://blog.leadzilla.ai">Blogs</Link>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>

            </div>
            {/* <div className='font-gilroybold text-white text-lg mb-5'><Link href="/faq">FAQ</Link></div> */}
            <div className="font-gilroybold text-white text-lg mb-5  flex flex-col">
              <Link href="/contactus">Contact Us</Link>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>
              <p>Text here</p>

            </div>
          </div>
          {/* <div className='flex flex-col'>
            </div>
            <div className='flex flex-col'>
            </div>
            <div className='flex flex-col'>
            </div> */}
          <div className="flex flex-col">
            {/* <p className='font-gilroybold text-white text-lg mb-5'>Legal</p> */}
          </div>
          {/* </div> */}
          <div className="flex flex-row-reverse sm:block justify-between items-center mt-20">
            <div className="flex flex-row sm:-ml-3 sm:mb-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  height="25"
                  width="18"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <Image
                  src="/assets/linkedIn.png"
                  alt="facebook"
                  height="25"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <Image
                  src="/assets/youtube.png"
                  alt="facebook"
                  height="18"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2">
                <Image
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
