import React from "react";
import Image from "next/image";
import Link from "next/link";
const SignInPage = () => {
  return (
    <div className="w-full lg:flex lg:h-screen md:h-auto sm:h-auto">
      <div className="p-10 lg:w-2/4 md:w-full sm:w-full">
        <div className="md:w-full mx-auto cursor-pointer">
        <Link href="/"> 
          <Image
            src="/assets/logo_img.png"
            alt=""
            width="160px"
            height="42px"
          />
          </Link>

          <div className="my-28 xl:w-9/12 lg:w-full  md:w-full mx-auto">
            <div className="font-extrabold font-gilroybold text-3xl">
              Welcome to Leadzilla
            </div>
            <div className="font-light text-base">
              The best zero password system to keep our customer secure
            </div>

            <div className="flex items-center justify-center border-2 mt-8 px-2">
              <Image src="/assets/Profile.png" width="18px" height="18px" />
              <input
                className="w-full h-12 text-black px-2 focus:outline-none"
                placeholder="Sanjay Patel"
              />
            </div>

            <div className="flex items-center justify-center border-2 px-2 my-6">
              <Image src="/assets/Message.png" width="18px" height="18px" />
              <input
                className="w-full h-12 text-black px-2 focus:outline-none"
                placeholder="sanjaypatel@gmail"
              />
            </div>

            <div className="mt-8">
              <button className="bg-black w-full h-12 text-base font-bold relative">
                SignUp
                <button className="bg-yellow-500 w-full h-12 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap">
                  SignUp
                </button>
              </button>
            </div>

            <div className="flex pt-2 pb-4 justify-center mt-8 mb-10">
              <div className="border-t-2 border-gray-200 w-10 mt-3.5  " />
              <div className="mx-2" style={{ color: "grey" }}>
                or
              </div>
              <div className="border-t-2 border-gray-200 w-10 mt-3.5" />
            </div>

            <div className="w-full h-12 border-2 border-gray-200 flex items-center justify-center">
              <Image
                className="mr-2"
                src="/assets/Google-icon.png"
                width="15px"
                height="15px"
              />
              <div className="mx-2">Sign in with Google</div>
            </div>

            <div className="w-full h-12 border-2 border-gray-200 items-center flex justify-center my-6">
              <Image src="/assets/Subtract.png" width="18px" height="18px" />
              <div className="mx-2">Login with facebook</div>
            </div>

            <div className="flex mt-6 justify-center">
              <p>Already have an account?</p>
              <p className="font-medium underline underline-offset-1 mx-1">
                Sign in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-no-repeat bg-purples-bg bg-right-top h-full md:h-auto ml-auto lg:w-2/4 md:w-full sm:w-full">
        {" "}
        <div className="relative h-full flex justify-end">
          <div className="lg:fixed lg:bottom-0">
            <Image
              src="/assets/signup/backgroundimg.svg"
              layout="fixed"
              height="800"
              width="497"
            />
          </div>
          <div className="absolute font-extrabold font-gilroybold right-1/4 text-3xl text-left top-24">
            <div>Join the World’s best </div>
            <div>companies using Leadzilla</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
