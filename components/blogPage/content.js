import React from "react";
import Image from "next/image";

const Contents = () => {
  const add = [
    {
      author: "MARKETING",
      createdAt: "17 SEP",
      minRead: 6,
      imgsrc: "/assets/image-2.png",
      description: "Which marketing strategy to choose to generate leads?",
      imagelogo: "/assets/profile-6.png",
      name: "Jenny Wilson",
    },
  ];

  const detail = [
    {
      author: "SALES",
      createdAt: "17 SEP",
      minRead: 6,
      imgsrc: "/assets/image-2.png",
      description: "Which marketing strategy to choose to generate leads?",
      imagelogo: "/assets/profile-6.png",
      name: "Jenny Wilson",
    },
    {
      author: "SALES",
      createdAt: "17 SEP",
      minRead: 6,
      imgsrc: "/assets/image-3.png",
      description: "The 5 steps for commercial prospecting",
      imagelogo: "/assets/profile-6.png",
      name: "Jane Cooper",
    },
    {
      author: "MARKETING",
      createdAt: "17 SEP",
      minRead: 6,
      imgsrc: "/assets/image-5.png",
      description: "The 5 steps for commercial prospecting",
      imagelogo: "/assets/profile-6.png",
      name: "Kristin Watson",
    },
  ];
  const detailmain = [
    {
      author: "SALES",
      createdAt: "17 SEP",
      minRead: 6,
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
      createdAt: "17 SEP",
      minRead: 6,
    },
    {
      imgsrc: "/assets/image-8.png",
      description: "Examples of prospecting emails",
      imagelogo: "/assets/profile-10.png",
      name: "Theresa Webb",
      author: "RECRUITING",
      createdAt: "17 SEP",
      minRead: 6,
    },

    {
      imgsrc: "/assets/image-2.png",
      description:
        "Why You Need Sales Intelligence to Create a Perfect Prospecting Process",
      imagelogo: "/assets/profile-6.png",
      name: "Esther Howard",
      author: "MARKETING",
      createdAt: "17 SEP",
      minRead: 6,
    },
    {
      imgsrc: "/assets/image-3.png",
      description: "What is Purchasing Intention and How to Recognize It",
      imagelogo: "/assets/profile-8.png",
      name: "Arlene McCoy",
      author: "RECRUITING",
      createdAt: "17 SEP",
      minRead: 6,
    },
    {
      imgsrc: "/assets/image-5.png",
      description: "What is B2B Demand Generation Marketing?",
      imagelogo: "/assets/profile-7.png",
      name: "Theresa Webb ",
      author: "RECRUITING",
      createdAt: "17 SEP",
      minRead: 6,
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
        {add.map((item) => {
          return (
            <>
              (
              <div>
                <Image src={item.imgsrc} alt="" width="300px" height="250px" />
              </div>
              <div>{item.description}</div>)
            </>
          );
        })}
      </div>

      <div style={{ height: "auto" }}>
        <div className="grid grid-cols-3   w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14">
          {detail.map((item) => {
            console.log(item, "BBBBBBBBBBBBBBBBBBBBBB");
            return (
              <div className="ml-7 h-auto col-span-1">
                <Image
                  src={item.imgsrc}
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                />
                <p
                  className="mb-7 font-extrabold"
                  style={{
                    color:
                      item.author === "SALES"
                        ? "red"
                        : item.author === "MARKETING"
                        ? "green"
                        : "yellow",
                  }}
                >
                  {item.author}
                </p>
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
          <div className="w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14">
            <div
              className="bg-yellow-300 p-3 py-4 text-xl  relative w-full "
              style={{ height: "500px" }}
            >
              <div
                className="bg-bluedon-300 p-3 py-4 text-xl text-center absolute bottom-2 right-2 whitespace-nowrap w-full  mt-20"
                style={{ height: "500px" }}
              >
                <p className="mt-20">weekly News letter</p>
                <p className="text-5xl text-yellow-300 font-extrabold m-2">
                  Join the community
                </p>

                <p className="text-center m-auto ">
                  Weekly articles, tips, and tools to inspire and help you gain
                  the latest insights.
                </p>
                <p>
                  Subscribe to get curated content delivered directly to your
                  inbox
                </p>

                <div className="mt-7 mb-20">
                  <input
                    style={{ width: "506px", maxWidth: "540px" }}
                    className="p-5"
                    placeholder="Enter your email address"
                    type="search"
                  />
                  <button className="bg-yellow-300 p-5 mb-20">
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "auto" }}>
        <div className="grid grid-cols-3   w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14">
          {detailmain.map((item) => {
            console.log(item, "BBBBBBBBBBBBBBBBBBBBBB");
            return (
              <div className="ml-7 h-auto ">
                <Image
                  src={item.imgsrc}
                  alt=""
                  width="100%"
                  height="80%"
                  layout="responsive"
                  objectFit="contain"
                />
                <p
                  className="mb-7 font-extrabold"
                  style={{
                    color:
                      item.author === "SALES"
                        ? "red"
                        : item.author === "MARKETING"
                        ? "green"
                        : "yellow",
                  }}
                >
                  {item.author}
                </p>
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
          <div className="w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 mt-20 pl-14">
            <div
              className="bg-yellow-300 p-3 py-4 text-xl  relative w-full "
              style={{ height: "500px" }}
            >
              <div
                className="bg-pinky-300 p-3 py-4 text-xl text-center absolute bottom-2 right-2 whitespace-nowrap w-full  mt-20"
                style={{ height: "500px" }}
              >
                <p className="mt-20">weekly News letter</p>
                <p className="text-5xl text-yellow-300 font-extrabold m-2">
                  Join the community
                </p>

                <p className="text-center m-auto ">
                  Weekly articles, tips, and tools to inspire and help you gain
                  the latest insights.
                </p>
                <p>
                  Subscribe to get curated content delivered directly to your
                  inbox
                </p>

                <div className="mt-7 mb-20">
                  <input
                    style={{ width: "506px", maxWidth: "540px" }}
                    className="p-5"
                    placeholder="Enter your email address"
                    type="search"
                  />
                  <button className="bg-yellow-300 p-5 mb-20">
                    Subscribe Now
                  </button>
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
