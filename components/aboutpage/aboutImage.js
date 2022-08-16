import React from 'react'
import Image from "next/image";

const AboutImage = () => {
  return (
    <div>
       <div className="hidden sm:block flex justify-center relative mt-16 px-2 ml-6">
            <div className="absolute">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-1--inject-4.svg"
                alt="freepik1"
                width="120"
                height="120"
                className="animate-pulse"
              />
            </div>

            <div className="absolute ml-48 mt-36">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-3--inject-4.svg"
                alt="freepik2"
                width="120"
                height="120"
                className="animate-pulse"
              />
            </div>

            <div className="absolute ml-48 -mt-10">
              <Image
                src="/assets/aboutus/freepik--character-4--inject-4.svg"
                alt="freepik3"
                width="120"
                height="120"
                className="animate-pulse"
              />
            </div>

            <div className="absolute mt-44 ml-6">
              <Image
                src="/assets/aboutus/freepik--character-2--inject-4mobile.svg"
                alt="freepik4"
                width="120"
                height="120"
                className="animate-pulse"
              />
            </div>
          </div>
    </div>
  )
}

export default AboutImage
