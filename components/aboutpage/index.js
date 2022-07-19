import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Link from "next/link";
const AboutUs = () => {
  return (
    <>
      {" "}
      <div
        className="bg-pink-bg w-full md:h-auto bg-no-repeat bg-cover"
        style={{ height: "871px" }}
      >
        <div className="text-center pt-16 relative sm:text-left">
          {" "}
          <div className="font-medium text-xl sm:text-sm  sm:pl-6">ABOUT Leadzilla</div>
          <div className="text-6xl sm:text-3xl pt-5 font-gilroybold sm:pl-6">
            Hi! We’re Leadzilla
          </div>
          <div className="text-2xl sm:text-sm p-6">
            <div>A team of veteran salespeople who want to be of help.</div>
            <div>
              If you're thinking about or struggling with cold emailing or cold
              calling, we can help.
            </div>
          </div>
          <div className="text-center p-6 sm:text-left">
            <Link href="https://app.leadzilla.ai/login">
              <button className="bg-black p-3 px-6 text-2xl font-bold relative transform  hover: transition duration-500 hover:scale-125">
                Join Us
                <span className="ml-2">
                  <Image
                    src="/assets/aboutus/thumbsups.svg"
                    alt="thumbimg"
                    width="20px"
                    height="20px"
                    className="m-6 ml-4"
                  />
                </span>
                <button className="bg-yellow-500 p-3 px-8 text-2xl font-bold absolute bottom-2 left-2 whitespace-nowrap">
                  Join Us{" "}
                  <span className="ml-2">
                    <Image
                      src="/assets/aboutus/thumbsups.svg"
                      alt="thumbimg"
                      width="20px"
                      height="20px"
                      className="m-6 ml-4"
                    />
                  </span>
                </button>
              </button>
            </Link>
          </div>
          <div className="flex justify-center relative sm:block">
            <div className="mt-4">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-1--inject-4.svg"
                alt="freepik1"
                width="200"
                height="200"
                className="animate-pulse"
              />
            </div>

            <div className="mt-40 ml-24 mr-24 sm:mt-4 sm:ml-60">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-3--inject-4.svg"
                alt="freepik2"
                width="200"
                height="200"
                className="animate-pulse"
              />
            </div>

            <div className="mt-52 sm:-mt-96 ml-60">
              <Image
                src="/assets/aboutus/freepik--character-4--inject-4.svg"
                alt="freepik3"
                width="200"
                height="200"
                className="animate-pulse"
              />
            </div>

            <div className="flex items-start sm:block mt-24">
              <div className="mr-12 sm:hidden">
                {" "}
                <Image
                  src="/assets/aboutus/freepikcursor.svg"
                  alt="freepikcursor"
                  width="50px"
                  height="50px"
                  className="animate-ping "
                />
              </div>{" "}
              <Image
                src="/assets/aboutus/freepik--character-2--inject-4.svg"
                alt="freepik4"
                width="200"
                height="200"
                className="animate-pulse"
             
              />
            </div>
          </div>
          <span className="ml-2 absolute bottom-2 right-48 sm:hidden">
            <Image
              src="/assets/aboutus/smiley.svg"
              alt="eyesImg"
              width="50px"
              // className="m-6 ml-4"
              height="50px"
            />
          </span>
        </div>
/
        <span className="ml-2 absolute top-32 left-48 sm:hidden  md:hidden">
          <Image
            src="/assets/lefteyesImg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4 animate-bounce"
            height="50px"
          />
        </span>

        <span className="ml-2 absolute top-32 right-48 sm:hidden  md:hidden">
          <Image
            src="/assets/righteyeimg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4 rotate-180 animate-bounce"
            height="50px"
          />
        </span>
      </div>
      <div>
        <div className="flex sm:block md:block items-center justify-around sm:mt-24 mt-40 w-10/12 sm:w-screen py-2 mx-auto">
          <Fade left>
            <div className="text-left sm:px-3">
              <div className="text-6xl sm:text-3xl font-gilroybold">What is Leadzilla?</div>
              <div className="pt-4 pb-6 text-aboutustextcolor-200 text-xl sm:text-lg">
                Leadzilla was founded by Saurav Gupta in 2020
                <br />
                with the aim of creating the world’s best data source for
                <br />
                work emails, phone numbers and personalized <br />
                email copy for every salesperson, new or experienced. <br />
                Think of Leadzilla as an AI assistant for cold outreach on
                email, phone or LinkedIn.
                <br />{" "}
              </div>
              <div className="text-aboutustextcolor-200 text-xl sm:text-lg">
                With Leadzilla, sales professionals can identify, engage and{" "}
                <br /> close prospects, thanks to our prospecting platform, web{" "}
                <br /> extension. Leadzilla is used by over <br /> 2000 sales
                professionals and 300 businesses
                <br />
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="mt-10">
              <Image
                src="/assets/aboutus/whatsleadzilla.svg"
                alt="whatsleadzilla"
                height="400"
                width="614"
              />
            </div>
          </Fade>
        </div>
        <Fade left>
          <div
            className="flex sm:block md:block items-center justify-center mt-24 w-10/12 sm:w-screen md:w-screen mx-auto sm:mx-0 md:mx-0 pb-2 sm:mb-80 md:mb-80"
            style={{ height: "446px" }}
          >
            <div className="sm:hidden md:hidden">
              <Image
                src="/assets/pricing/founderceo.svg"
                alt=""
                width="570"
                height="448"
              />
            </div>
            <div
              className="bg-meetsauravbg-200 h-[446px] w-[800px]"
              // style={{ width: "800px", height: "446px" }}
            >
              <div className="px-16 pt-16 sm:pt-10 sm:px-3">
                <div className="text-5xl sm:text-3xl font-gilroybold">Meet Saurav?</div>
                <div className="py-6 text-2xl sm:text-xl text-aboutustextcolor-200">
                  The Founder of Leadzilla
                </div>
                <div className="text-aboutustextcolor-200 text-justify text-xl sm:text-lg">
                  What started off as one sales dude's idea has become one of
                  the best AI-assisted data platforms for salespeople, small
                  business owners and anyone who's just looking to get meetings.
                  It's simply a much better way to send cold emails and do cold
                  calls without going through the hassle of dealing with bad
                  data or spamming people
                </div>
                <div className="hidden sm:block md:block sm:mt-10 md:mt-10">
                  <Image
                    src="/assets/pricing/founderceo.svg"
                    alt=""
                    width="570"
                    height="448"
                  />
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="flex justify-center sm:hidden md:hidden">
            <Image
              src="/assets/aboutus/aboutourteam.svg"
              alt="aboutourteam"
              width="448"
              height="296"
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default AboutUs;
