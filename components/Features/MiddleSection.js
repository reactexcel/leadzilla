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
          <div className="text-3xl font-light">
            Press one button to
            <span className="font-black"> write a</span>
            <div className="font-black">highly personalized email for</div>
            <div className="font-black">each person</div>
          </div>
          <div className="flex items-center mt-8">
            <div className="border-t border-black w-3 mr-2" />
            <div>
              Our AI crawls the entire web for talking points that break the ice
              <div>immediately with any prospect</div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="border-t border-black w-3 mr-2" />
            <div>
              It looks for information on their LinkedIn, blogs they authored,
              <div> podcast appearances and much more</div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <div className="border-t border-black w-3 mr-2" />
            <div>
              And you just click one button to send that email or sync it to
              <div>your favorite email automation tool</div>
            </div>
          </div>
          <div className="mt-6 ml-1">
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
