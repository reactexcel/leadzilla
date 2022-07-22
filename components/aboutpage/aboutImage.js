import React from 'react'
import Image from "next/image";

const AboutImage = () => {
  return (
    <div>
       <div className="hidden sm:block flex justify-center relative ">
            <div className="">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-1--inject-4.svg"
                alt="freepik1"
                width="160"
                height="160"
                className="animate-pulse"
              />
            </div>

            <div className="">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-3--inject-4.svg"
                alt="freepik2"
                width="160"
                height="160"
                className="animate-pulse"
              />
            </div>

            <div className="">
              <Image
                src="/assets/aboutus/freepik--character-4--inject-4.svg"
                alt="freepik3"
                width="160"
                height="160"
                className="animate-pulse"
              />
            </div>

            <div className="flex items-start ">
              <Image
                src="/assets/aboutus/freepik--character-2--inject-4.svg"
                alt="freepik4"
                width="160"
                height="160"
                className="animate-pulse"
              />
            </div>
          </div>
    </div>
  )
}

export default AboutImage
