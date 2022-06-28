import React from "react";
import Image from "next/image";

const LowerFeaturesSection = () => {
  return (
    <div className="bg-green-bg">
      <div className="w-10/12 py-8 px-8 m-auto">
        <div className="text-3xl font-light text-center ">
          <span className="font-black">Top 5 reasons</span>
          <span> why people</span>
          <div>choose Leadzilla</div>
        </div>
        <div className="flex">
          <div className="mx-auto ml-56">
            <Image
              src="/assets/featuresarrow.png"
              alt=""
              width="140.69"
              height="100.63"
            />
          </div>
          <div>
            <Image
              src="/assets/eyes.png"
              alt=""
              width="70.14px"
              height="65.72px"
            />
          </div>
        </div>
        <div className="px-40">
          <div className="bg-black pb-2">
            <div className="bg-white py-8  pb-12 mt-10 border-2 border-black mr-2 font-normal">
              <div className="flex justify-center mt-8">
                <div className="border-t-2 border-black w-3 mr-2  mt-4" />

                <div>
                  “Product is very easy to use. Just one click and our customers
                  <div>find emails and phone numbers”</div>
                </div>
              </div>
              <div className="flex justify-center  mt-4 pl-10">
                <div className="border-t-2 border-black w-3 mr-2  mt-4" />

                <div>
                  “We understand that most of our customers are SMBs and we
                  don’t
                  <div> tie them up in long term contracts”</div>
                </div>
              </div>
              <div className="flex justify-center  mt-4">
                <div className="border-t-2 border-black w-3 mr-2  mt-4" />

                <div>
                  “A lot of our customers are busy salespeople who struggle
                  <div>
                    {" "}
                    with writing personalized emails. Our AI helps them get{" "}
                  </div>
                  <div>leads on autopilot”</div>
                </div>
              </div>
              <div className="flex justify-center  mt-4">
                <div className="border-t-2 border-black w-3 mr-2  mt-4" />

                <div>
                  “The data is very accurate and there’s an email verification
                  <div>tool inbuilt into the product at no added cost” </div>
                </div>
              </div>
              <div className="flex justify-center  mt-4">
                <div className="border-t-2 border-black w-3 mr-2  mt-4" />
                <div>
                  “Our support team is always there to help each and every
                  <div>customer get the most of out of the product”</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          
          <div className=" flex flex-col justify-between">
            <div className="pt-2 mx-auto">
              <Image
                src="/assets/msg.png"
                alt=""
                width="41.22px"
                height="39.26px"
              />
            </div>
            <div></div>
          </div>
          <div>
            <Image
              src="/assets/man.png"
              alt=""
              width="340.73px"
              height="321.26px"
            />
          </div>
          <div className=" flex flex-col justify-between">
            <Image
              src="/assets/smilingheart.png"
              alt="smile"
              width="40px"
              height="40px"
            />
            <Image
              src="/assets/heartsmily.png"
              alt="smile"
              width="50px"
              height="50px"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default LowerFeaturesSection;
