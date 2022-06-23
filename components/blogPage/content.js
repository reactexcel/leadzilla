import React from "react";
import Image from "next/image";

const Contents = () => {
  const detail = [
    { imgsrc: "/assets/image-1.png" ,description:""},
    { imgsrc: "/assets/image-1.png" },
    { imgsrc: "/assets/image-1.png" },
  ];
  return (
    <>
      <div className="w-full bg-glad-100">
        <div className="w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 ">
          <div className="mt-16 mb-16">
            <div className="flex items-center text-center justify-center flex-col">
              <div>
                <p className="text-6xl font-extrabold mt-5">Leadzilla Blog</p>
              </div>
              <div className="flex justify-evenly w-9/12 mt-7">
                <div>
                  <a>All</a>
                </div>
                <div>
                  <a>sales</a>
                </div>
                <div>
                  <a>Marketing</a>
                </div>
                <div>
                  <a>Recurting</a>
                </div>
                <div>
                  <Image
                    src="/assets/logo.png"
                    alt=""
                    width="45px"
                    height="45px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14">
        <div className="w-full">
          <Image
            src="/assets/image-1.png"
            alt=""
            width="570px"
            height="400px"
          />
        </div>

        <div className="pl-7">
          <p>Marketing</p>
          <p className="text-4xl font-extrabold w-full">
            Which marketing strategy to choose to generate leads?
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-3  w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14 gap-4">
          {/* <div className="w-full p-3">
          <Image src="/assets/image-1.png" alt="" width="370px" height="252px" />
        </div>
        <div className="w-full p-3">
          <Image src="/assets/image-1.png" alt="" width="370px" height="252px" />
        </div>
        <div className="w-full p-3">
          <Image src="/assets/image-1.png" alt="" width="370px" height="252px" />
        </div> */}
        
          {detail.map((item) => {
            console.log(item, "BBBBBBBBBBBBBBBBBBBBBB")
            return (
                <div className="w-full"><Image  src={item.imgsrc} alt="" width="370px"  height="250px" /></div>
            );
          })}
          
        </div>
      </div>
    </>
  );
};

export default Contents;
