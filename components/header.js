import React,{useState} from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="hidden sm:block md:block border-gray-200 px-2 md:px-4 py-2.5 rounded dark:bg-gray-900">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <Link href="/">
        <Image
          src="/assets/logoleadzilla.svg"
          alt=""
          width="120px"
          height="38px"
        />
      </Link>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg" aria-controls="navbar-default" aria-expanded="false" onClick={(e) => setToggle(!toggle)}>
        <span className="sr-only">Open main menu</span>
        {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
        <Image src="/assets/Vector.svg"
        alt=""
        width="20px"
        height="20px"
        />
      </button>
      <div className={`${toggle ? "" : "hidden"} w-full ml-10`} id="navbar-default">
        <ul className="flex flex-col ml-3 mt-4 md:mt-2 md:text-md">
         
          <li className="sm:my-2 md:my-2 font-semibold">
            <Link href="/pricing" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100">Pricing</Link>
          </li>
          <li className="sm:my-2 md:my-2 font-semibold">
            <Link href="/features" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100">Features</Link>
          </li>
          <li className="sm:my-2 md:my-2 font-semibold">
            <Link href="/https://blog.leadzilla.ai" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100">Blogs</Link>
          </li>
          <li className="sm:my-2 md:my-2 font-semibold">
            <Link href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100">About</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
