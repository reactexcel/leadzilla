import Image from "next/image";

const FindContact = () => {
  return (
    <div className="w-10/12 py-2 px-8 m-auto pb-20">
      <div className="-mt-36">
        <Image
          src="/assets/details.png"
          alt=""
          width="882.82px"
          height="582px"
        />
      </div>
      <div className="flex justify-between">
        <div className="mt-10" >
          <div className="text-3xl font-light">
            <span className="font-black">Find contacts</span>
            <span> based on</span>
            <p> hyper-precise filters</p>
          </div>
          <div className="flex items-center mt-8">
            <div className="border-t border-black w-3 mr-2"/>
            <p className="w-96">
              Find contacts using typical filters like industry, geography,
              headcount and job title
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="border-t border-black w-3 mr-2"/>
            <p className="w-96">
              If that doesn’t work, you have advanced filters like funding,
              technology used and highly-precise lookalikes of your current/past
              customers
            </p>
          </div>
          <div className="flex items-center mt-4">
            <div className="border-t border-black w-3 mr-2"/>
            <p className="w-96">
            Reveal their verified emails and phone numbers
            </p>
          </div>
          <div className='mt-6 ml-1'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
        </div>
        <div className="flex">
            <div className=" flex flex-col justify-between">
                <Image src="/assets/SmileyHeart.png" alt="smile" width ="50px" height="50px"/>
                <div className=" justify-self-center"><Image src="/assets/ThumbsUp.png" alt="smile" width ="40px" height="40px"/></div>
                <div><Image src="/assets/threeline.png" alt="" width="50px" height="50px"/></div>
            </div>
            <div className="bg-voilet-bg px-5 pt-20 border-t-4 border-r-4 mt-8 mx-2 border-black rounded-sm">
                <Image  src="/assets/portfolio-img.png" alt="" width="339.68px" height="622.19px"/>
            </div>
            <div className=" flex flex-col justify-between">
              <Image src="/assets/HighlightNE.png" alt="smile" width ="30px" height="30px"/>
              <Image src="/assets/CurlEnd.png" alt="smile" width ="30px" height="30px"/>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};
export default FindContact;
