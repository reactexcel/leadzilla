import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../header";
const Contents = () => {
  const add = [
    {
      author: "MARKETING",
      createdAt: " -4 AUG - ",
      minRead: "3 MIN",
      imgsrc: "/assets/cardimg_one.png",
      description: "Which marketing strategy to choose to generate leads?",
      imagelogo: "/assets/cardprofileimg_one.png",
      name: "Devon Lane",
      post: "Marketing Manager",
    },
  ];

  const detail = [
    {
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
      imgsrc: "/assets/cardimg_two.png",
      description: "The 5 steps for commercial prospecting",
      imagelogo: "/assets/cardprofileimg_two.png",
      name: "Jenny Wilson",
    },
    {
      author: "SALES",
      createdAt: " -13 SEP - ",
      minRead: "5 MIN",
      imgsrc: "/assets/cardimg_three.png",
      description:
        "Discover the importance of managing your outbound prospecting well",
      imagelogo: "/assets/cardprofileimg_three.png",
      name: "Jane Cooper",
    },
    {
      author: "MARKETING",
      createdAt: " -25 AUG - ",
      minRead: "7 MIN",
      imgsrc: "/assets/cardimg_four.png",
      description:
        "A successful Cold Emailing campaign to beat the competition",
      imagelogo: "/assets/cardprofileimg_four.png",
      name: "Kristin Watson",
    },
  ];
  const detailmain = [
    {
      author: "SALES",
      createdAt: " - 20 AUG - ",
      minRead: "6 MIN",
      imgsrc: "/assets/cardimg_seven.png",
      description: "Tips and examples for successful telephone prospecting ",
      imagelogo: "/assets/cardprofileimg_five.png",
      name: "Esther Howard",
    },
    {
      imgsrc: "/assets/cardimg_six.png",
      description: "Must have Skills to make a difference",
      imagelogo: "/assets/cardprofileimg_six.png",
      name: "Arlene McCoy",
      author: "RECRUITING",
      createdAt: " -3 JUNE - ",
      minRead: "2 MIN",
    },
    {
      imgsrc: "/assets/cardimg_five.png",
      description: "Examples of prospecting emails",
      imagelogo: "/assets/cardprofileimg_seven.png",
      name: "Theresa Webb",
      author: "SALES",
      createdAt: " -27 JULY - ",
      minRead: "2 MIN",
    },

    {
      imgsrc: "/assets/cardimg_two.png",
      description:
        "Why You Need Sales Intelligence to Create a Perfect Prospecting Process",
      imagelogo: "/assets/cardprofileimg_five.png",
      name: "Esther Howard",
      author: "SALES",
      createdAt: " -17 SEP - ",
      minRead: "6 MIN",
    },
    {
      imgsrc: "/assets/cardimg_eight.png",
      description: "What is Purchasing Intention and How to Recognize It",
      imagelogo: "/assets/cardprofileimg_six.png",
      name: "Arlene McCoy",
      author: "MARKETING",
      createdAt: " -14 SEP - ",
      minRead: "2 MIN",
    },
    {
      imgsrc: "/assets/cardimg_eight.png",
      description: "What is B2B Demand Generation Marketing?",
      imagelogo: "/assets/cardprofileimg_seven.png",
      name: "Theresa Webb ",
      author: "RECRUITING",
      createdAt: " -14 SEP - ",
      minRead: "2 MIN",
    },
  ];

  return (
    <>
      <div className="w-full bg-glad-100">
        <Header />
        <div className="w-10/12 py-2 mx-auto px-2 sm:px-6 lg:px-8 md:w-full ">
          <div className="mt-16 mb-16">
            <div className="flex items-center text-center justify-center flex-col">
              <div>
                <p className="text-6xl font-gilroybold mt-5">Leadzilla Blog</p>
              </div>
              <div className="flex justify-evenly w-9/12 mt-7 items-center font-bold sm:w-full">
                <div className="text-lg underline underline-offset-2">
                  <Link href="">ALL</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="">Sales</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="">Marketing</Link>
                </div>
                <div className="text-lg text-gray-400">
                  <Link href="">Pricing</Link>
                </div>
                <div
                  className="mt-1 bg-white ml-1 mr-7"
                  style={{ borderRadius: "5px" }}
                >
                  <div className="ml-1 mr-1 p-2">
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
      <div className=" w-10/12 py-2 mx-auto px-2 md:w-full">
        <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1  mt-20 ">
          {add.map((item, key) => {
            return (
              <>
                <div key={key}>
                  <Image
                    src={item.imgsrc}
                    alt=""
                    width="560px"
                    height="400px"
                    layout="responsive"
                  />
                </div>
                <div>
                  <div className="flex font-gilroybold">
                    <p
                      className="ml-5"
                      style={{
                        color:
                          item.author === "SALES"
                            ? "#FF3194"
                            : item.author === "MARKETING"
                            ? "#6C38FF"
                            : "#508BFF",
                      }}
                    >
                      {item.author}
                    </p>
                    <p className="ml-2 text-graytextcol-200">
                      {item.createdAt}
                    </p>
                    <p className="ml-2 text-graytextcol-200">{item.minRead}</p>
                  </div>

                  <p className="text-5xl font-gilroybold m-5 mt-9">
                    {item.description}
                  </p>

                  <div className="mt-20 m-5 flex">
                    <Image
                      src={item.imagelogo}
                      alt=""
                      width="65px"
                      height="65px"
                    />
                    <div>
                      <p className="ml-4 mt-1 text-xl font-extrabold">
                        {item.name}
                      </p>
                      <p className="ml-4 mt-1 text-sm text-grace-600">
                        {item.post}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="w-auto mx-auto grid-flow-col md:grid-flow-row sm:grid-flow-row ms:ml-5 mt-20">
          <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mx-auto  my-auto  mt-20 ">
            {detail.map((item, key) => {
              return (
                <div className="mr-4 h-auto md:mr-0 sm:mr-0" key={key}>
                  <Image
                    src={item.imgsrc}
                    alt=""
                    width="370px"
                    height="252px"
                    layout="responsive"
                    objectFit="contain"
                  />
                  <div className="flex mb-1.5 my-2 font-gilroybold">
                    <p
                      className=" font-extrabold"
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
                    <p className="ml-2 text-graytextcol-200">
                      {item.createdAt}
                    </p>
                    <p className="ml-2 text-graytextcol-200">{item.minRead}</p>
                  </div>
                  <p className="text-3xl font-gilroybold mb-1">
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
            <div className="mt-20">
              <div
                className="bg-yellow-300 p-3 py-4 text-xl  relative w-full border-2 border-darkcolor-200 "
                style={{ height: "500px" }}
              >
                <div
                  className="bg-bluedon-300 p-3 py-4 text-xl text-center absolute bottom-2 right-2 whitespace-nowrap w-full  mt-20 border-2 border-darkcolor-200"
                  style={{ height: "500px" }}
                >
                  <p className="mt-20 text-base font-gilroybold text-white ">
                    WEEKLY NEWSLETTER
                  </p>
                  <p className="text-4xl xs:text-3xl text-yellow-300 font-gilroybold m-2 mb-7">
                    Join the community
                  </p>

                 <div className="md:hidden sm:hidden lg:block">
                    <div className="text-center m-auto text-white">
                      Weekly articles, tips, and tools to inspire and help you
                      gain the latest insights.
                    </div>
                    <div className="text-white">
                      Subscribe to get curated content delivered directly to your
                      inbox
                    </div>
                  </div>

                  <div className="md:block sm:block lg:hidden">
                    <div className="text-center m-auto text-white xs:text-base">
                      Weekly articles, tips, and tools to <br/> inspire and help you
                      gain the latest <br/> insights.
                    </div>
                    <div className="text-white xs:text-base">
                      Subscribe to get curated content <br/> delivered  directly to your
                      inbox
                    </div>
                  </div>

                  <div className="mt-7 mb-20">
                    <input
                      className="p-5 ms:py-2 ms:px-0 ms:p-0 ms:w-3/5 ms:text-base border-2 border-darkcolor-200 inputstyle"
                      placeholder="Enter your email address"
                      type="search"
                    />
                    <button className="bg-yellow-300 p-5 ms:py-2 ms:text-base ms:p-0 ms:px-0 mb-20 border-2 border-darkcolor-200 font-bold">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "auto" }}>
          <div className="grid grid-cols-3 md:grid-cols-1 sm:grid-cols-1 mt-20 ms:ml-5">
            {detailmain.map((item, key) => {
              return (
                <div className="mr-4 h-auto md:mr-0 sm:mr-0 mb-10" key={key}>
                  <Image
                    src={item.imgsrc}
                    alt=""
                    width="370px"
                    height="252px"
                    layout="responsive"
                    objectFit="contain"
                  />
                  <div className="flex font-gilroybold py-2.5">
                    <p
                      className="mb-5 font-extrabold"
                      style={{
                        color:
                          item.author === "SALES"
                            ? "#FF3194"
                            : item.author === "MARKETING"
                            ? "#6C38FF"
                            : "#508BFF",
                      }}
                    >
                      {item.author}
                    </p>
                    <p className="ml-2 text-lightgrayblog-200">
                      {item.createdAt}
                    </p>
                    <p className="ml-2 text-lightgrayblog-200">
                      {item.minRead}
                    </p>
                  </div>
                  <div className="text-3xl font-gilroybold">
                    {item.description}
                  </div>
                  <div className="flex mt-2.5 ">
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
          <div className="ms:ml-6" style={{ height: "600px" }}>
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

                  <div className="md:hidden sm:hidden lg:block">
                    <p className="text-5xl text-black-800 font-extrabold break-all">
                      Leadzilla offers you the best way
                    </p>

                    <p className="text-5xl text-black-800 font-extrabold break-all">
                      to reach your customers.
                    </p>
                  </div>

                  <div className="lg:hidden">
                    <p className="text-4xl ms:text-2xl text-black-800 font-extrabold break-all">
                      Leadzilla offers you
                    </p>

                    <p className="text-4xl ms:text-2xl text-black-800 font-extrabold break-all">
                      the best way to reach
                    </p>
                    <p className="text-4xl ms:text-2xl text-black-800 font-extrabold break-all">
                      your customers.
                    </p>
                  </div>

                  <div className=" mb-20 mt-12">
                    <input
                      className="p-5 ms:py-2 ms:px-0 ms:p-0 ms:w-3/5 ms:text-base border-2 border-darkcolor-200 inputstyle"
                      placeholder="Enter your email address"
                      type="search"
                    />
                    <button className="bg-yellow-300 ms:text-base p-5 ms:py-2 ms:px-0 ms:p-0 mb-20 border-2 font-bold border-darkcolor-200">
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
