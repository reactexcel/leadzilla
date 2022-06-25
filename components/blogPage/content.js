import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contents = () => {
  const add = [
    {
      author: "MARKETING",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
      imgsrc: "/assets/image-23.png",
      description: "Which marketing strategy to choose to generate leads?",
      imagelogo: "/assets/profile-1.png",
      name: "Devon Lane",
      post:"Marketing Manager"
    },
  ];

  const detail = [
    {
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
      imgsrc: "/assets/image-2.png",
      description: "Which marketing strategy to choose to generate leads? ",
      imagelogo: "/assets/profile1.png",
      name: "Jenny Wilson",
    },
    {
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
      imgsrc: "/assets/image-3.png",
      description: "The 5 steps for commercial prospecting",
      imagelogo: "/assets/profile3.png",
      name: "Jane Cooper",
    },
    {
      author: "MARKETING",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
      imgsrc: "/assets/image-5.png",
      description: "The 5 steps for commercial prospecting",
      imagelogo: "/assets/profile2.png",
      name: "Kristin Watson",
    },
  ];
  const detailmain = [
    {
      author: "SALES",
      createdAt: " - 20 AUG - ",
      minRead: "6 MIN",
      imgsrc: "/assets/image-5.png",
      description: "Tips and examples for successful telephone prospecting ",
      imagelogo: "/assets/profile-6.png",
      name: "Esther Howard",
    },
    {
      imgsrc: "/assets/image-7.png",
      description: "Must have Skills to make a difference",
      imagelogo: "/assets/profile-5.png",
      name: "Arlene McCoy",
      author: "RECRUITING",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },
    {
      imgsrc: "/assets/image-8.png",
      description: "Examples of prospecting emails",
      imagelogo: "/assets/profile-10.png",
      name: "Theresa Webb",
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },

    {
      imgsrc: "/assets/image-2.png",
      description:
        "Why You Need Sales Intelligence to Create a Perfect Prospecting Process",
      imagelogo: "/assets/profile-6.png",
      name: "Esther Howard",
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },
    {
      imgsrc: "/assets/image-3.png",
      description: "What is Purchasing Intention and How to Recognize It",
      imagelogo: "/assets/profile-8.png",
      name: "Arlene McCoy",
      author: "MARKETING",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },
    {
      imgsrc: "/assets/image-5.png",
      description: "What is B2B Demand Generation Marketing?",
      imagelogo: "/assets/profile-7.png",
      name: "Theresa Webb ",
      author: "RECRUITING",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },
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
                <div className="text-lg underline underline-offset-2">
                  <Link href="/all">ALL</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="/sales">Sales</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="/marketing">Marketing</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="/pricing">Pricing</Link>
                </div>
                <div className="mt-1 bg-white ml-1 mr-7">
                  <div className="ml-1 mr-1">
                    <Image
                      src="/assets/search.png"
                      alt=""
                      width="15px"
                      height="15px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-10/12 py-2 mx-auto px-2">
        <div className="grid grid-cols-2   mt-20 ">
          {add.map((item) => {
            return (
              <>
              <div >
                <Image  src={item.imgsrc} alt="" width="560px" height="400px"   layout="responsive"
                    />
                </div>
                <div>
                  <div className="flex">
                    <p
                      className="ml-5 font-extrabold"
                      style={{
                        color:
                          item.author === "SALES"
                            ? "#FF3194"
                            : item.author === "MARKETING"
                            ? "#6C38FF"
                            : "yellow",
                      }}
                    >
                      {item.author}
                    </p>
                    <p className="ml-2">{item.createdAt}</p>
                    <p className="ml-2">{item.minRead}</p>
                  </div>

                  <p className="text-5xl font-extrabold m-5 mt-9">
                    {item.description}
                  </p>

                  <div  className="mt-20 m-5 flex">
                <Image src={item.imagelogo} alt="" width="65px" height="65px" />
                  <div>
                <p className="ml-4 text-xl font-extrabold">{item.name}</p>
                <p className="ml-4 mt-2 text-sm text-grace-600">{item.post}</p>
                </div>

                </div>
                </div>

               
              </>
            );
          })}
        </div>

        <div className="w-auto mx-auto grid-flow-col mt-20">
          <div className="grid grid-cols-3 gap-8 mx-auto  my-auto  mt-20 ">
            {detail.map((item) => {
              console.log(item, "BBBBBBBBBBBBBBBBBBBBBB");
              return (
                <div className="mr-4 h-auto ">
                  <Image
                    src={item.imgsrc}
                    alt=""
                    width="100%"
                    height="90%"
                    layout="responsive"
                    objectFit="contain"
                  />
              <div className="flex">
                    <p
                      className="ml-5 font-extrabold"
                      style={{
                        color:
                          item.author === "SALES"
                            ? "#FF3194"
                            : item.author === "MARKETING"
                            ? "#6C38FF"
                            : "yellow",
                      }}
                    >
                      {item.author}
                    </p>
                    <p className="ml-2">{item.createdAt}</p>
                    <p className="ml-2">{item.minRead}</p>
                  </div>
                  <p className="text-3xl font-extrabold mb-1">
                    {item.description}
                  </p>

                  <div className="flex mt-5 ">
                    <Image
                      className="mt-3"
                      src={item.imagelogo}
                      alt=""
                      width="48px"
                      height="48px"
                    />
                    <p className="self-center ml-2 font-bold text-xl">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div style={{ height: "500px" }}>
            <div className="  mt-20">
              <div
                className="bg-yellow-300 p-3 py-4 text-xl  relative w-full border-2 border-darkcolor-200 "
                style={{ height: "500px" }}
              >
                <div
                  className="bg-bluedon-300 p-3 py-4 text-xl text-center absolute bottom-2 right-2 whitespace-nowrap w-full  mt-20 border-2 border-darkcolor-200"
                  style={{ height: "500px" }}
                >
                  <p className="mt-20 text-xl text-white ">weekly News letter</p>
                  <p className="text-5xl text-yellow-300 font-extrabold m-2 mb-7">
                    Join the community
                  </p>

                  <p className="text-center m-auto text-white ">
                    Weekly articles, tips, and tools to inspire and help you
                    gain the latest insights.
                  </p>
                  <p className="text-white">
                    Subscribe to get curated content delivered directly to your
                    inbox
                  </p>

                  <div className="mt-7 mb-20">
                    <input
                    
                      style={{ width: "506px", maxWidth: "540px" }}
                      className="p-5 border-2 border-darkcolor-200"
                      placeholder="Enter your email address"
                      type="search"
                    />
                    <button className="bg-yellow-300 p-5 mb-20 border-2 border-darkcolor-200">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "auto" }}>
          <div className="grid grid-cols-3  mt-20">
            {detailmain.map((item) => {
              console.log(item, "BBBBBBBBBBBBBBBBBBBBBB");
              return (
                <div className="mr-4 h-auto ">
                  <Image
                    src={item.imgsrc}
                    alt=""
                    width="100%"
                    height="85%"
                    layout="responsive"
                    objectFit="contain"
                  />
                <div className="flex">
                    <p
                      className="ml-5 font-extrabold"
                      style={{
                        color:
                          item.author === "SALES"
                            ? "#FF3194"
                            : item.author === "MARKETING"
                            ? "#6C38FF"
                            : "yellow",
                      }}
                    >
                      {item.author}
                    </p>
                    <p className="ml-2">{item.createdAt}</p>
                    <p className="ml-2">{item.minRead}</p>
                  </div>
                  <p className="text-3xl font-extrabold mb-1">
                    {item.description}
                  </p>
                  <div className="flex mt-5 ">
                    <Image
                      className="mt-3"
                      src={item.imagelogo}
                      alt=""
                      width="48px"
                      height="48px"
                    />
                    <p className="self-center ml-2 font-bold text-xl">
                      {item.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div style={{ height: "600px" }}>
            <div className="py-2  px-4  mt-20 ">
              <div
                className="bg-yellow-300 p-3 py-4 text-xl  relative w-full border-2 border-darkcolor-200"
                style={{ height: "500px" }}
              >
                <div
                  className="bg-pinky-300 p-3 py-4 text-xl text-center absolute bottom-2 right-2 whitespace-nowrap w-full  mt-20 border-2 border-darkcolor-200"
                  style={{ height: "500px" }}
                >
                  <p className="mt-20 text-lg text-white mb-5">
                    Get access to verified profiles.
                  </p>

                  <div>
                    <p className="text-5xl text-black-800 font-extrabold break-all">
                      Leadzilla offers you the best way
                    </p>

                    <p className="text-5xl text-black-800 font-extrabold break-all">
                      to reach your customers.
                    </p>
                  </div>

                  <div className=" mb-20 mt-12">
                    <input

                      style={{ width: "506px", maxWidth: "540px" }}
                      className="p-5 border-2 border-darkcolor-200"
                      placeholder="Enter your email address"
                      type="search"
                    />
                    <button className="bg-yellow-300 p-5 mb-20 border-2 border-darkcolor-200">
                      Try for Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
