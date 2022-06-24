import React from "react";
import Image from "next/image";
import { TableData } from "../../hardcodedData";

function PricingPage() {
  return (
    <>
      <div className="bg-regal-green py-16">
        <div className="flex items-center flex-col">
          <div>
            {" "}
            <div className="font-extrabold text-6xl text-left">
              Looking for the pricing table?
            </div>
            <div>
              <Image
                src="/assets/pricing/quoteimgs.svg"
                alt="quoteimg"
                width="45"
                height="80"
              />
            </div>{" "}
            <div className="mb-4 flex ml-16">
              <div className="mr-36">
                <div className="font-medium text-xl">
                  I’m a lot like you! I see a lot of interesting software. But
                  <br />
                  bounce away from the pricing page!
                </div>
                <div className="font-medium text-xl pt-10 pb-10">
                  Sometimes I feel it’s pricey for me. Sometimes I can’t judge
                  if it’d <br /> create enough value for me or my team.
                </div>
                <div className="font-medium text-xl">
                  So, here’s some perspective on Leadzilla’s value v/s price, so{" "}
                  <br /> you can make an informed choice.
                </div>
              </div>
              <div>
                <Image
                  src="/assets/pricing/founderceo.svg"
                  alt="founderceo"
                  width="200"
                  className="m-6 ml-4"
                  height="196"
                />
                <div className="font-bold text-xl text-center">
                  Founder and CEO at <br />
                  Leadzilla{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 relative">
        <div className="font-light text-3xl">
          Your time and efforts are not cheap.
        </div>
        <div className="font-extrabold text-4xl mt-6 mb-6">
          You’re probably spending more than $1000 every <br />
          month on getting qualified leads already.
        </div>
        <div className="text-xl font-normal">
          There is significant cost and effort to set up a cold outbound process
          - you’ve hired sales <br /> reps, and they spend their precious hours
          getting nowhere.
        </div>

        <table className="m-auto mt-16 ">
          <thead className="bg-skin-bg border border-skin-border rounded-md text-left">
            <th scope="col" className="px-6 py-3">
              Current Activity
            </th>
            <th scope="col" className="px-16 py-3">
              Person
            </th>
            <th scope="col" className="px-16 py-3">
              Average Time
            </th>
            <th scope="col" className="px-16 py-3">
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
                {">"}55-60 hours / mo
              </td>
              <td className="text-left font-bold px-16 py-4">
                {">"} $800-$1200 / mo
              </td>
            </tr>
          </tbody>
        </table>

        <span className="ml-2 absolute top-32 right-48 ">
          <Image
            src="/assets/righteyeimg.svg"
            alt="eyesImg"
            width="50px"
            className="m-6 ml-4"
            height="50px"
          />
        </span>

        <span className="ml-2 absolute top-32 right-3/4 ">
          <Image
            src="/assets/arrow.svg"
            alt="arrow"
            width="120px"
            height="180px"
          />
        </span>
      </div>

      <div className="mt-28 relative px-9">
        <div className="flex justify-center">
          <div className="xl:mr-96 lg:mr-auto">
            {" "}
            <div className="font-extrabold text-4xl">
              The real cost of alternatives <br />
              or leaving things as they are…
            </div>
            <div className="font-normal text-base mt-6">
              You can keep using your current contact database that’s giving you
              <br />
              inaccurate data, let your reps write personalized emails on their
              own <br /> and find accounts manually. But there are hidden costs
              everywhere – <br />
              and sometimes they can be dangerously expensive.
            </div>
          </div>

          <Image
            src="/assets/pricing/manstar.svg"
            alt="manstar"
            width="251"
            height="239"
          />
        </div>

        <div className="text-center mt-8">
          <Image
            src="/assets/pricing/realcost.svg"
            alt="realcost"
            width="1170"
            height="341"
          />
        </div>

        <span className="ml-2 absolute top-24 left-1/2">
          <Image
            src="/assets/designerarrow.svg"
            alt="designerarrow"
            width="105px"
            height="130px"
          />
        </span>
      </div>

      <div className="flex justify-center mt-20 mb-20 px-16">
        <div className="bg-grey-bg text-left text-2xl px-40 py-10">
          Even if we disregard the opportunity cost and value of using
          AI-powered hyper-
          <br />
          personalized prospecting, and consider the time and costs in this
          example are <br />
          exaggerated,{" "}
          <span className="font-bold">
            Leadzilla will save you a minimum 30 hours and $840 every <br />
            month. That’s 10x return on your investment – at least.
          </span>
        </div>
      </div>

      <div className="bg-pink-bg w-full h-240px md:h-auto bg-center bg-no-repeat bg-cover  mb-100">
        <div className="font-extrabold text-center text-5xl pt-8">
          Now here’s the pricing table you <br />
          were looking for.
        </div>

        <div className="flex justify-center mt-16 mx-10">
          <div className="bg-white rounded border border-pricing-border p-10">
            <div className="font-bold text-3xl mb-4">
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

            <div className="flex items-center">
              <Image
                src="/assets/pricing/tickvector.svg"
                alt="tickvector"
                width="12px"
                height="12px"
              />
              <div className="pl-2 text-xl font-normal">LookalikeAI</div>
            </div>
          </div>
          <div className="bg-white rounded border border-pricing-border p-10 ml-10 mr-10 ">
            <div className="font-bold text-3xl mb-3 pb-8">What do you get?</div>
            <div className="text-xl font-normal">1 email or 1 phone number</div>
            <div className="text-xl font-normal pt-5 pb-5">
              1 personalized line per prospect
            </div>
            <div className="text-xl font-normal">
              Find highly-precise <br />
              competitors of your current <br />
              customers
            </div>
          </div>
          <div className="bg-white rounded border border-pricing-border p-10">
            <div className="font-bold text-3xl mb-3">
              How much does it <br />
              cost?
            </div>
            <div className="text-xl font-normal">2 credits</div>
            <div className="text-xl font-normal pt-5 pb-5">1 credit</div>
            <div className="text-xl font-normal">1 credit/competitor</div>
          </div>
        </div>

        <div className="text-center font-light text-3xl py-16">
          Straight forward pricing{" "}
          <span className="font-bold">$49/mo for 600 credits</span> , billed
          monthly
        </div>
      </div>
    </>
  );
}

export default PricingPage;
