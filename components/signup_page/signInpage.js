import React from "react";
import Image from "next/image";
const SignInPage = () => {
  return (
    <div class="grid grid-rows-1  grid-flow-col">
      <div className="p-10">
        <div className="flex">
          <Image src="/assets/logo_img.png" alt="" width="160px" height="42px" />
          {/* <div className="pl-2 font-black text-xl mt-2 ">Leadzilla</div> */}
        </div>
        <div className="p-20">
          <div className="pt-10  font-bold text-2xl">Welcome to Leadzilla</div>
          <div>The best zero password system to keep our customer secure</div>
          <div className=" pr-32 mt-4">
            <div>
              <div>
                
                <div className="flex items-center justify-center border-2 mt-5 px-2">
                  <Image src="/assets/Profile.png" width="18px" height="18px" />
                <input
                  className="w-full h-12 text-black px-2 focus:outline-none"
                  placeholder="Sanjay Patel"
                  value="Sanjay Patel"
                  
                />
                </div>
                 <br />
                <div className="flex items-center justify-center border-2  px-2">
                  <Image src="/assets/Message.png" width="18px" height="18px" />
                <input
                  className="w-full h-12 text-black px-2 focus:outline-none"
                  value="sanjaypatel@gmail"
                />
                </div>
              </div>
              <div className="mt-8">
                <button className="bg-black w-full h-12 text-base font-bold relative">
                  SignUp
                  <button className="bg-yellow-500 w-full h-12 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap">
                    SignUp
                  </button>
                </button>
              </div>
              <div className="flex pt-6 pb-8 justify-center">
                <div className="border-t-2 border-gray-200 w-10 mt-3.5  "/>
                <div className="mx-2"  style={{color: "grey"}}>or</div>
                <div className="border-t-2 border-gray-200 w-10 mt-3.5 " />
              </div>
              <div className="w-full h-12 border-2 border-gray-200 flex items-center justify-center ">
                <Image
                className="mr-2"
                  src="/assets/Google-icon.png"
                  width="15px"
                  height="15px"
                />
                <div className="mx-2">Sign in with Google</div>
              </div>
              <br />
              <div className="w-full h-12 border-2 border-gray-200 items-center flex justify-center">
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
      </div>
      <div
        style={{
          backgroundColor: "#E471FF",
          paddingLeft: "30px",
          paddingTop: "35px",
        }}
      >

        <div style={{ width: "365px", textAlign: "center" }}>
          <div className="pt-10 m-auto">
            <div className="flex justify-end line-height -mb-6 mr-4"><Image src="/assets/100.png" width="50px" height="50px"/></div>
           <h2 className="text-2xl font-bold"> Join the World’s best</h2>
          </div>
          <div className="font-bold text-2xl m-auto pl-12">
            companies using Leadzilla
          </div>
          <div className="pl-4 pt-4">
            <Image
              src="/assets/Underline 6.png"
              alt=""
              width="250px"
              height="24px"
            />
          </div>
          <br />
          <div className="pt-10">
            <Image
              src="/assets/Groupimg.png"
              alt=""
              width="310px"
              height="278px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
