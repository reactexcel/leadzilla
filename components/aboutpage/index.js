import React from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
const AboutUs=()=> {
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
              A team of veteran salespeople who want to be of help. 
            </div>
            <div>If you're thinking about or struggling with cold emailing or cold calling, we can help.</div>
          </div>
          <div className="text-center p-6 " >
            <button className="bg-black p-3 px-6 text-2xl font-bold relative transform  hover: transition duration-500 hover:scale-125">
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
                className="animate-pulse"
              />
            </div>

            <div className="mt-40 ml-24 mr-24">
              {" "}
              <Image
                src="/assets/aboutus/freepik--character-3--inject-4.svg"
                alt="freepik2"
                width="200"
                height="200"
                className="animate-pulse"
              />
            </div>

            <div className="mt-52">
              <Image
                src="/assets/aboutus/freepik--character-4--inject-4.svg"
                alt="freepik3"
                width="200"
                height="200"
                className="animate-pulse"
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
                  className="animate-ping"  
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
            className="m-6 ml-4 animate-bounce"
            height="50px"
          />
        </span>

        <span className="ml-2 absolute top-32 right-48">
          <Image
            src="/assets/righteyeimg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4 rotate-180 animate-bounce"
            height="50px"
          />
        </span>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-around  mt-40 w-10/12 py-2 mx-auto">
          <Fade left>
          <div className="text-left ">
            <div className="font-extrabold text-6xl font-gilroybold">
              What is Leadzilla?
            </div>
            <div className="font-normal pt-4 pb-6 text-aboutustextcolor-200 text-xl">
              Leadzilla was founded by Saurav Gupta in 2020 
              <br />
              with the aim of creating the world’s best data source for 
              <br />
              work emails, phone numbers and personalized <br />
              email copy for every salesperson, new or experienced. <br />
              Think of Leadzilla as an AI assistant for cold outreach on email, phone or LinkedIn.
              <br /> {" "}
            </div>
            <div className="font-normal text-aboutustextcolor-200 text-xl">
              With Leadzilla, sales professionals can identify, engage and{" "}
              <br /> close prospects, thanks to our prospecting platform,
              web <br /> extension. Leadzilla is used by 
              over <br /> 2000 sales professionals and 300 businesses
               <br />
            </div>
          </div>
          </Fade>
          <Fade right>
          <div>
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
        <div className="flex items-center justify-around  mt-24 w-10/12 py-2 mx-auto">
          <div className="relative ">
            <Image
              src="/assets/aboutus/groupspic.svg"
              alt="aboutourteam"
              width="1350px"
              height="600px"
            />

            <div className="absolute right-24 top-36">
              <div className="font-extrabold text-5xl text-left font-gilroybold">
                Meet Saurav?
              </div>
              <div className="text-left pb-4 pt-2 text-2xl text-aboutustextcolor-200">
                The Founder of Leadzilla
              </div>
              <div className="text-left text-aboutustextcolor-200"  style={{fontSize: "20px"}}>
                What started off as one founder's <br /> idea
                has become one of the best AI-assisted  <br />
                data platforms for salespeople, 
                small business owners and anyone who's just looking to get meetings<br /> 
                <br /> It's simply a much better way to{" "}
                <br />
                send cold emails and do cold calls without <br />
                going through the hassle of dealing with bad data or spamming people.
              </div>
            </div>
          </div>
        </div>
        </Fade>
        <Fade bottom>        
        <div>
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
}

export default AboutUs;
