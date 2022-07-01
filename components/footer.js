import Image from 'next/image'
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="bg-black w-full flex justify-center">
        <div className='w-10/12 py-20'>
          <div className='flex flex-row justify-between'>
            <div className='flex justify-center items-center'>
              <div className='flex flex-row items-center'>
                <Image src="/assets/footerlogoleadzilla.svg" alt="leadzilla logo" width="162px" height="42px" />
                <p className='text-white text-xl font-bold ml-2'>Leadzilla</p>
              </div>
              <div className='flex flex-row items-center ml-4'>
                <Image src="/assets/messageIcon.png" alt="message" width="14" height="14" />
                <p className='text-gray-300 text-xs font-semibold mx-2'>{"English (US)"}</p>
                <Image src='/assets/greyDownArrow.png' alt="down arrow" width="8" height="5" />
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <button className='text-white text-sm font-bold border-2 py-4 px-8 rounded-full mr-4 hover:bg-yellow-300 hover:text-black'>Get Started</button>
              <button className='text-white text-sm font-bold border-2 hover:bg-yellow-300 hover:text-black  py-4 px-8 rounded-full'>Download the plugin</button>
            </div>
          </div>

          <div className='flex flex-row justify-between mt-16'>
            <div className='flex flex-col'>
              <p className='font-gilroybold text-white text-lg mb-5'>Main</p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/features">Features</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'> <Link href="https://blog.leadzilla.ai"> Blogs</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/faq">FAQ</Link></p>
              <p className='text-gray-500 my-2 cursor-pointer'><Link href="/contactus">Contacts</Link></p>
            </div>
            <div className='flex flex-col'>
              <p className='font-gilroybold text-white text-lg mb-5'>Solutions</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-gilroybold text-white text-lg mb-5'>Company</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-gilroybold text-white text-lg mb-5'>Resources</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
            </div>
            <div className='flex flex-col'>
              <p className='font-gilroybold text-white text-lg mb-5'>Legal</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
              <p className='bg-black my-2'>Text here</p>
            </div>
          </div>
          <div className='flex justify-between items-center mt-20'>
            <p className='text-gray-400'>©Copyright2022Leadzilla</p>
            <div className='flex flex-row'>
              <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2'>
                <Image src="/assets/facebook.png" alt="facebook" height="25" width="18" />
              </div>
              <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2'>
                <Image src="/assets/linkedIn.png" alt="facebook" height="25" width="25" />
              </div>
              <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2'>
                <Image src="/assets/youtube.png" alt="facebook" height="18" width="25" />
              </div>
              <div className='flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 cursor-pointer mx-2'>
                <Image src="/assets/instagram.png" alt="facebook" height="25" width="25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;