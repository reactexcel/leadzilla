import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-black w-full flex sm:flex-wrap justify-center sm:mt-32">
        <div className="w-10/12 py-20">
          <div className="flex flex-row justify-between sm:flex-wrap">
            <div className="flex justify-center items-center md:mr-6">
              <div className="flex flex-row items-center sm:hidden">
                <Image
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="162px"
                  height="42px"
                />
              </div>
              <div className="flex flex-row items-center hidden sm:block">
                <Image
                  src="/assets/footerlogoleadzilla.svg"
                  alt="leadzilla logo"
                  width="120px"
                  height="38px"
                />
              </div>
              {/* <p className='text-white text-xl font-bold ml-2'>Leadzilla</p> */}

              {/* <div className='flex flex-row items-center ml-4'>
                <Image src="/assets/messageIcon.png" alt="message" width="14" height="14" />
                <p className='text-gray-300 text-xs font-semibold mx-2'>{"English (US)"}</p>
                <Image src='/assets/greyDownArrow.png' alt="down arrow" width="8" height="5" />
              </div> */}
            </div>

            <div className="flex flex-row items-center sm:justify-space sm:mt-4">
              <Link href="https://app.leadzilla.ai/login">
                <button className="text-white text-sm  sm:text-[10px] font-bold border-2 py-4 sm:py-2 px-8 sm:px-10 md:px-6 rounded-full mr-4 hover:bg-yellow-300 hover:text-black">
                  Get Started
                </button>
              </Link>
              <Link href="https://chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
                <button className="hover:text-white text-sm sm:text-[6px] font-bold  bg-yellow-300 text-black  py-4 px-8 sm:px-10 md:px-8 sm:py-2 rounded-full">
                  Add Chrome Extension
                </button>
              </Link>
            </div>
          </div>

          {/* Disabling link while FAQ page is under development
           <div className='flex flex-row justify-between mt-16'> */}

          <div className="flex justify-between mt-16 sm:flex-wrap">
            <div className="font-gilroybold text-white text-lg mb-5">
              <Link href="/features">Features</Link>
            </div>
            <div className="font-gilroybold text-white text-lg mb-5">
              <Link href="/pricing">Pricing</Link>
            </div>

            {/* <p className='text-gray-500 my-2 cursor-pointer'><Link href="/features">Features</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'> <Link href="https://blog.leadzilla.ai"> Blogs</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/faq">FAQ</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/contactus">Contacts</Link></p> */}
            <div className="font-gilroybold text-white text-lg mb-5">
              <Link href="https://blog.leadzilla.ai">Blogs</Link>
            </div>
            {/* <div className='font-gilroybold text-white text-lg mb-5'><Link href="/faq">FAQ</Link></div> */}
            <div className="font-gilroybold text-white text-lg mb-5">
              <Link href="/contactus">Contact Us</Link>
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
          <div className="flex justify-between items-center mt-20 sm:flex-wrap-reverse">
            <p className="text-gray-400 sm:mt-8">©Copyright 2022 Leadzilla</p>
            <div className="flex flex-row">
              <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-400 cursor-pointer mx-2">
                <Image
                  src="/assets/facebook.png"
                  alt="facebook"
                  height="25"
                  width="18"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12  rounded-full bg-gray-400 cursor-pointer mx-2">
                <Image
                  src="/assets/linkedIn.png"
                  alt="facebook"
                  height="25"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10  sm:h-12 sm:w-12 rounded-full bg-gray-400 cursor-pointer mx-2">
                <Image
                  src="/assets/youtube.png"
                  alt="facebook"
                  height="18"
                  width="25"
                />
              </div>
              <div className="flex items-center justify-center h-10 w-10  sm:h-12 sm:w-12 rounded-full bg-gray-400 cursor-pointer mx-2">
                <Image
                  src="/assets/instagram.png"
                  alt="facebook"
                  height="25"
                  width="25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
