import React from "react";
import Image from "next/image";
function AboutUs() {
  return (
    <>
      {" "}
      <div
        className="bg-pink-bg w-full h-240px md:h-auto bg-center bg-no-repeat bg-cover  mb-100"
        style={{ height: "871px" }}
      >
        <div className="text-center pt-16 relative">
          {" "}
          <div className="font-medium text-xl">ABOUT Leadzilla</div>
          <div className="font-extrabold text-6xl pt-5 font-gilroybold">
            Hi! We’re Leadzilla
          </div>
          <div className="text-2xl text-center p-6 font-normal">
            <div>
              A team of data-enthusiasts who make the go-to-market smarter
            </div>
            <div>by commoditizing simple, self-service B2B SaaS products.</div>
          </div>
          <div className="text-center p-6">
            <button className="bg-black p-3 px-6 text-2xl font-bold relative">
              Join Us
              <span className="ml-2">
                <Image
                  src="/assets/aboutus/thumbsups.svg"
                  alt="thumbimg"
                  width="20px"
                  className="m-6 ml-4"
                  height="20px"
                />
              </span>
              <button className="bg-yellow-500 p-3 px-8 text-2xl font-bold absolute bottom-2 left-2 whitespace-nowrap">
                Join Us{" "}
                <span className="ml-2">
                  <Image
                    src="/assets/aboutus/thumbsups.svg"
                    alt="thumbimg"
                    width="20px"
                    className="m-6 ml-4"
                    height="20px"
                  />
                </span>
              </button>
            </button>
          </div>
          <div className="flex justify-center relative">
            <div>
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-1--inject-4.svg"
                alt="freepik1"
                width="200"
                height="200"
              />
            </div>

            <div className="mt-40 ml-24 mr-24">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-3--inject-4.svg"
                alt="freepik2"
                width="200"
                height="200"
              />
            </div>

            <div className="mt-52">
              <Image
                src="/assets/aboutus/freepik--character-4--inject-4.svg"
                alt="freepik3"
                width="200"
                height="200"
              />
            </div>

            <div className="flex items-start">
              <div className="mr-12">
                {" "}
                <Image
                  src="/assets/aboutus/freepikcursor.svg"
                  alt="freepikcursor"
                  width="50px"
                  height="50px"
                />
              </div>{" "}
              <Image
                src="/assets/aboutus/freepik--character-2--inject-4.svg"
                alt="freepik4"
                width="200"
                height="200"
              />
            </div>
          </div>
          <span className="ml-2 absolute bottom-2 right-48">
            <Image
              src="/assets/aboutus/smiley.svg"
              alt="eyesImg"
              width="50px"
              className="m-6 ml-4"
              height="50px"
            />
          </span>
        </div>

        <span className="ml-2 absolute top-32 left-48">
          <Image
            src="/assets/lefteyesImg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4"
            height="50px"
          />
        </span>

        <span className="ml-2 absolute top-32 right-48">
          <Image
            src="/assets/righteyeimg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4 rotate-180"
            height="50px"
          />
        </span>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-around  mt-40 w-10/12 py-2 mx-auto">
          <div className="text-left ">
            <div className="font-extrabold text-6xl font-gilroybold">
              What is Leadzilla?
            </div>
            <div className="font-normal text-lg pt-4 pb-6">
              Leadzilla was founded by Assaf Eisenstein and Yoni Tserruya in
              <br />
              2016 with the aim of creating the world’s largest crowdsourced
              <br />
              data community for B2B salespeople or a “Waze for <br />
              salespeople”. Leadzilla offers B2B salespeople of every <br />
              company size accurate and accessible data through its simple,
              <br /> self-service products.{" "}
            </div>
            <div className="font-normal text-lg">
              With Leadzilla, sales professionals can identify, engage and{" "}
              <br /> close prospects, thanks to Lusha’s prospecting platform,
              web <br /> extension and API. Leadzilla community has expanded to
              over <br /> 670,000 sales professionals and 223,000 sales
              organizations <br /> including Zendesk, Google, Dropbox and Uber.
            </div>
          </div>
          <div>
            <Image
              src="/assets/aboutus/whatsleadzilla.svg"
              alt="whatsleadzilla"
              height="400"
              width="614"
            />
          </div>
        </div>
        <div className="flex items-center justify-around  mt-40 w-10/12 py-2 mx-auto">
          <div className="relative ">
            <Image
              src="/assets/aboutus/groupspic.svg"
              alt="aboutourteam"
              width="1350px"
              height="600px"
            />

            <div className="absolute right-24 top-36">
              <div className="font-extrabold text-4xl text-left font-gilroybold">
                Meet Saurav?
              </div>
              <div className="text-left pb-4 pt-2">
                The Founders of Leadzilla
              </div>
              <div className="text-left">
                What started off as one developer's passion project <br /> has
                quickly evolved into one of B2Bs largest and <br />
                most respected contact data solutions. In 2016 Yoni,
                <br /> a young developer, and Assaf, an HR tech creator,
                <br /> met. Together, they created Lusha, a better way for{" "}
                <br />
                B2B salespeople to prospect based on community <br />
                sharing, simplicity, accuracy and accessibility.
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/assets/aboutus/aboutourteam.svg"
            alt="aboutourteam"
            width="448"
            height="296"
          />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
