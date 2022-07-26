import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Link from "next/link";
const MiddleSection = () => {
  return (
    <div className="bg-brown-bg">
      <Fade left>
      <div className="w-10/12 sm:w-auto md:w-auto sm:pt-0 py-10 px-4 m-auto flex justify-evenly pt-20 sm:flex-wrap-reverse md:flex-wrap-reverse">
        <div className="sm:mt-14 md:mt-14">
          <Image src="/assets/writemail.svg" alt="" width="521" height="564"/>
        </div>
        <div className="mt-14 pl-14 sm:pl-4">
          <div className="font-gilroylight text-5xl sm:text-xl">
            Press one button to
            <span className="font-black font-gilroybold"> write a</span>
            <div className="font-black font-gilroybold">highly personalized email for</div>
            <div className="font-black font-gilroybold">each person</div>
          </div>
          <div className="flex mt-8">
            <div style={{marginTop: "-4px"}}><Image src="/assets/arrowfeature.png" alt="" width="15" height="2"/></div>
            <div className="font-normal text-base ml-2">
              Our AI crawls the entire web for talking points that break the ice
              immediately with any prospect
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop: "-4px"}}><Image src="/assets/arrowfeature.png" alt="" width="15" height="2"/></div>
            <div className="font-normal text-base ml-2">
              It looks for information on their LinkedIn, blogs they authored,
               podcast appearances and much more
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop: "-4px"}}><Image src="/assets/arrowfeature.png" alt="" width="15" height="2"/></div>
            <div className="font-normal text-base ml-2">
              And you just click one button to send that email or sync it to
              your favorite email automation tool
            </div>
          </div>
          <div className="mt-20 ml-1 h-7 w-3/6">
          <Link href="https://app.leadzilla.ai/login">
            <button className="bg-black p-3 px-8 text-base font-bold relative transform hover: transition duration-500 hover:scale-125">
              Learn more
              <button className="bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap">
                Learn more
              </button>
            </button>
            </Link>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};
export default MiddleSection;
