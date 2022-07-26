import Image from "next/image";
import { Fade } from "react-reveal";
import Link from "next/link";

const FindContact = () => {
  return (
    <div className="w-10/12 py-2 px-8 m-auto pb-20 sm:px-0">
      <Fade right>
      <div className="-mt-48 flex justify-center items-center md:-mt-32 sm:-mt-24">
        <Image
          src="/assets/detailleadzilla.svg"
          alt=""
          width="900px"
          height="700px"
        />
      </div>
      </Fade>
      <Fade left>
      <div className="flex justify-between items-center sm:flex-wrap md:flex-wrap">
        <div className="mt-10" >
          <div className="font-light text-5xl sm:text-xl"
           >
            <span className="font-black font-gilroybold">Find contacts</span>
            <span className="font-gilroylight"> based on</span>
            <div className="font-gilroylight"> hyper-precise filters</div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="15" height="2" alt=""/>
            </div>
            <div className="text-base font-normal ml-2">
              Find contacts using typical filters like industry, geography,
              headcount and job title
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="15" height="2" alt=""/>
            </div>
            <div className="text-base font-normal ml-2">
              If that doesn’t work, you have advanced filters like funding,
              technology used and highly-precise lookalikes of your current/past
              customers
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="10" height="2" alt=""/>
            </div>
            <p className="text-base font-normal ml-2">
            Reveal their verified emails and phone numbers
            </p>
          </div>
          <div className='my-16 ml-1 h-7 w-3/6'>
          <Link href="https://app.leadzilla.ai/login">
              <button className='bg-black p-3 px-8 sm:px-4 text-base font-bold relative transform  hover: transition duration-500 hover:scale-125'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8  sm:px-4 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
              </Link>
            </div>
        </div>
        <div>
          <Image src="/assets/entireimagefeature.svg" alt="" width="562" height="677"/>
        </div>
      </div>
      </Fade>
    </div>
  );
};
export default FindContact;
