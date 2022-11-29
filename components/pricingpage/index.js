import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TableData } from "../../hardcodedData";
import { Fade } from "react-reveal";
import Header from "../header";

const PricingPage = () => {
  return (
    <>
      <div className="bg-regal-green">
        <Header />
        <div className="flex items-center flex-col py-10">
          <div className="">
            <Fade left>
              <div className="flex font-extrabold text-6xl sm:text-2xl md:text-4xl text-left font-gilroybold sm:px-3 md:px-4">
                <div>Looking for the pricing table?</div>
                <div className="ml-6" style={{ marginTop: "10px" }}>
                  <Image
                    src="/assets/highlightpricing.png"
                    alt=""
                    width="30px"
                    height="30px"
                  />
                </div>
              </div>
            </Fade>
            <Fade right>
              <div>
                <Image
                  src="/assets/pricing/quoteimgs.svg"
                  alt="quoteimg"
                  width="45"
                  height="80"
                />
              </div>{" "}
            </Fade>
            <Fade right>
              <div className="mb-4 flex sm:block ml-16 sm:ml-4 md:ml-8">
                <div className="mr-36 sm:mr-24 md:mr-20 text-xl sm:text-sm md:text-lg sm:text-left text-pricingtextcolor-200">
                  <div className="">
                    I’m a lot like you! I see a lot of interesting software. But
                    <br />
                    bounce away from the pricing page!
                  </div>
                  <div className=" py-7">
                    Sometimes I feel it’s pricey for me. Sometimes I can’t judge
                    if it’d <br /> create enough value for me or my team.
                  </div>
                  <div className="">
                    So, here’s some perspective on Leadzilla’s value v/s price,
                    so <br /> you can make an informed choice.
                    <span className="ml-2">
                      <Image
                        src="/assets/editpricing.png"
                        alt=""
                        width="20px"
                        height="20px"
                      />
                    </span>
                  </div>
                </div>
                <div className="md:ml-0 md:mr-3">
                  <Image
                    src="/assets/pricing/founderceo.svg"
                    alt="founderceo"
                    width="200"
                    className="m-6 ml-4"
                    height="196"
                  />
                  <div className="font-bold text-xl text-center sm:text-left">
                    Saurav
                    <br /> Founder and CEO at <br />
                    Leadzilla
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="text-center mx-9 mt-16 relative sm:text-left sm:ml-3">
        {/* <span className="ml-2 absolute top-1/4 sm:top-72 md:top-60 sm:hidden" style={{left:'8%'}}>
          <Image
            src="/assets/arrow.svg"
            alt="arrow"
            width="120px"
            height="180px"
          />
        </span> */}

        <div className="text-center font-light text-3xl  sm:text-2xl sm:text-left sm:ml-3 md:ml-4 py-20 sm:py-12 font-gilroylight">
          Straight forward pricing <br/><br/>
          <span className="font-bold font-gilroybold">
            $49/mo for <br/>250 ContactAI credits <br/> and 100 WriterAI credits <br/><br/>
          </span>
          billed monthly
        </div>

        <div className="-mb-20">
          <Link href="https://app.leadzilla.ai/login">
            <button className="hover:text-white text-xl font-bold py-4 bg-yellow-300 text-black-300  sm:py-4 px-8 sm:px-4 rounded-full sm:w-120 sm:text-xs sm:font-bold">
              Try it at no cost
            </button>
          </Link>
          <Link href="https://calendly.com/sam_gupta/15min">
              <button className="hover:text-white text-xl font-bold py-4 bg-yellow-300 text-black-300  sm:py-4 px-8 sm:px-4 rounded-full sm:w-120 sm:text-xs sm:font-bold">
                Talk to our experts <br/><span className="font-bold font-gilroybold text-sm">if you need more credits!</span>
              </button>
          </Link>    
        </div>
        <div><br/><br/><br/><br/><br/></div>
        <div className="-mb-20">
          <div className="font-light text-3xl sm:text-xl md:text-2xl font-gilroylight">
            Your time and efforts are not cheap.
          </div>
          <div className="font-extrabold text-4xl sm:text-2xl my-5 font-gilroybold sm:text-justify">
            You’re probably spending a lot every <br />
            month on getting qualified leads already.
          </div>
          <div className="flex justify-evenly mx-auto mt-8">
            <div className="md:hidden sm:hidden">
              <Image
                src="/assets/arrow.svg"
                alt="arrow"
                width="120px"
                height="180px"
              />
            </div>
            <div className="text-xl py-2 sm:text-base md:text-lg sm:text-justify">
              There is significant cost and effort to find new customers - you
              spend hours trying to find contact information on Google or their
              website and then hours trying to writing personalized emails
            </div>
            <div className="mt-10 md:hidden sm:hidden">
              <Image
                src="/assets/righteyeimg.svg"
                alt="eyesImg"
                width="50px"
                className="m-6 ml-4 animate-bounce"
                height="50px"
              />
            </div>
          </div>
        </div>
        {/* <span className="ml-2 absolute top-32 right-48 sm:hidden md:hidden ">
          <Image
            src="/assets/righteyeimg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4 animate-bounce"
            height="50px"
          />
        </span> */}
        <div className="sm:overflow-x-scroll">
          <table
            className="m-auto mt-16  sm:mt-40 md:mt-40"
            style={{ borderRadius: "14px" }}
          >
            <thead className="bg-skin-bg  border border-skin-border rounded-t-lg text-left">
              <th scope="col" className="px-6 py-6">
                Current Activity
              </th>
              <th scope="col" className="px-16 py-6">
                Person
              </th>
              <th scope="col" className="px-16 py-6">
                Average Time
              </th>
              <th scope="col" className="px-16 py-6">
                Minimum Cost
              </th>
            </thead>
            <tbody>
              {TableData?.map(
                (
                  {
                    Current_Activity1,
                    Current_Activity2,
                    Average_Time,
                    Minimum_Cost,
                    Person,
                  },
                  key
                ) => {
                  return (
                    <>
                      <tr className="border border-skin-border">
                        <td className="text-left px-6 py-4">
                          {Current_Activity1} <br />
                          {Current_Activity2}
                        </td>
                        <td className="text-left px-16 py-4">{Person}</td>
                        <td className="text-left px-16 py-4">{Average_Time}</td>
                        <td className="text-left px-16 py-4">{Minimum_Cost}</td>
                      </tr>
                    </>
                  );
                }
              )}

              <tr className="border border-skin-border">
                <td className="text-left font-bold px-6 py-4">Total</td>
                <td className="text-left font-bold px-16 py-4"></td>
                <td className="text-left font-bold px-16 py-4">
                  80 hours / mo
                </td>
                <td className="text-left font-bold px-16 py-4">
                  {">"} A lot of dollars / mo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Fade right>
        <div className="mt-32 relative px-9 sm:mt-10 md:mt-20">
          <div className="flex justify-center w-10/12 mb-12 m-auto">
            <div className="xl:mr-96 lg:mr-auto">
              {" "}
              <div className="font-extrabold text-4xl sm:text-2xl font-gilroybold sm:text-justify">
                The real cost of alternatives <br />
                or leaving things as they are…
              </div>
              <div className="font-normal text-base	 mt-6 sm:text-justify">
                You can keep searching for emails on Google or use an
                alternative tool
                <br />
                that gives you inaccurate work emails and phone numbers. But
                there are
                <br />
                hidden costs everywhere – and sometimes they can be dangerously
                – <br />
                expensive.
              </div>
            </div>
            <div className="sm:hidden">
              <Image
                src="/assets/pricing/manstar.svg"
                alt="manstar"
                width="251"
                height="239"
              />
            </div>
          </div>

          <div className="text-center mt-32 sm:hidden md:mt-32">
            <Image
              src="/assets/pricing/realcosts.svg"
              alt="realcost"
              width="1170"
              height="341"
            />
          </div>
          <div className="text-center mt-36 sm:mt-10 hidden sm:block">
            <Image
              src="/assets/pricing/vertical_image.svg"
              alt="realcost"
              width="360"
              height="600"
            />
          </div>

          <span className="ml-32 absolute top-44 sm:top-64 md:top-60 left-1/2 sm:mt-12 md:ml-48 sm:hidden md:hidden">
            <Image
              src="/assets/designerarrow.svg"
              alt="designerarrow"
              width="105px"
              height="130px"
            />
          </span>
        </div>
      </Fade>
      <Fade left>
        <div className="flex justify-center mt-20 mb-20 px-16 sm:px-0 md:px-4">
          <div className="bg-grey-bg text-left text-2xl	md:text-xl sm:text-base text-aboutustextcolor-200 px-40 sm:px-3 md:px-6 py-16">
            Even if we disregard the opportunity cost and value of using
            AI-powered hyper-
            <br />
            personalized prospecting, and consider the time and costs in this
            example are <br />
            exaggerated,{" "}
            <span className="font-bold">
              Leadzilla will save you a minimum 30 hours and $$$ every <br />
              month. That’s 10x return on your investment – at least.
            </span>
          </div>
        </div>
      </Fade>

      <div className="bg-pink-bg w-full h-200px md:h-auto bg-center bg-no-repeat bg-cover  mb-100">
        <div className="font-extrabold text-center text-5xl md:text-4xl md:font-bold sm:text-2xl sm:text-left pt-20 font-gilroybold  sm:px-2">
          Now here’s the pricing table you <br />
          were looking for.
        </div>
        <Fade bottom>
          <div className="flex sm:block md:block justify-center mt-0 mx-10 sm:mx-4 py-20">
            <div className="bg-white rounded border border-pricing-border p-10 pb-20 sm:mb-5 md:mb-5">
              <div className="font-bold text-3xl mb-2.5 sm:text-2xl">
                Which module is it <br /> a part of?
              </div>
              <div className="flex items-center">
                <Image
                  src="/assets/pricing/tickvector.svg"
                  alt="tickvector"
                  width="12px"
                  height="12px"
                />
                <div className="pl-2 text-xl font-normal">ContactAI</div>
              </div>

              <div className="flex items-center pt-5 pb-5">
                <Image
                  src="/assets/pricing/tickvector.svg"
                  alt="tickvector"
                  width="12px"
                  height="12px"
                />
                <div className="pl-2 text-xl font-normal">WriterAI</div>
              </div>
            </div>
            <div className="bg-white rounded border border-pricing-border p-10 ml-10 pb-30 mr-10 sm:mx-0 md:mx-0 sm:mb-5 md:mb-5">
              <div className="font-bold text-3xl mb-10 sm:text-2xl">
                What do you get?
              </div>
              <div className="text-xl font-normal">
                1 email or 1 phone number
              </div>
              <div className="text-xl font-normal pt-5 pb-5">
                1 personalized line per prospect
              </div>
            </div>
            <div className="bg-white rounded border border-pricing-border p-10">
              <div className="font-bold text-3xl mb-3 ">
                How much does it <br />
                cost?
              </div>
              <div className="text-xl font-normal">1 contact credit</div>
              <div className="text-xl font-normal pt-5 pb-5">1 line credit</div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default PricingPage;
