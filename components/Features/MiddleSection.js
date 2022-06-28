import React from "react";
import Image from "next/image";
const MiddleSection = () => {
  return (
    <div className="bg-brown-bg">
      <div className="w-10/12 py-10 px-4 m-auto flex justify-evenly pt-20 ">
        <div>
          <div className="flex">
            <div>
              <Image
                src="/assets/greencard.png"
                alt=""
                width="294.79"
                height="343.6"
              />
            </div>
            <div></div>
          </div>
          <div className="flex">
            <div className="w-56"></div>
            <div className="-mt-16  ">
              <Image
                src="/assets/pinkcard.png"
                alt=""
                width="277.72px"
                height="270.05px"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 pl-14">
          <div className="font-gilroylight" style={{fontSize: "42px"}}>
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
          <div className="mt-20 ml-1">
            <button className="bg-black p-3 px-8 text-base font-bold relative">
              Learn more
              <button className="bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap">
                Learn more
              </button>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MiddleSection;
