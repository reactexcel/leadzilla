import Image from "next/image";

const FindContact = () => {
  return (
    <div className="w-10/12 py-2 px-8 m-auto pb-20">
      <div className="-mt-48 flex justify-center items-center">
        <Image
          src="/assets/detailsfeature.png"
          alt=""
          width="900px"
          height="750px"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-10" >
          <div className="font-light" style={{fontSize: "42px"}}>
            <span className="font-black font-gilroybold">Find contacts</span>
            <span className="font-gilroylight"> based on</span>
            <div className="font-gilroylight"> hyper-precise filters</div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="15" height="2"/>
            </div>
            <div className="text-base font-normal ml-2">
              Find contacts using typical filters like industry, geography,
              headcount and job title
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="15" height="2"/>
            </div>
            <div className="text-base font-normal ml-2">
              If that doesn’t work, you have advanced filters like funding,
              technology used and highly-precise lookalikes of your current/past
              customers
            </div>
          </div>
          <div className="flex mt-4">
            <div style={{marginTop:"-4px"}}>
              <Image src="/assets/arrowfeature.png" width="15" height="2"/>
            </div>
            <p className="text-base font-normal ml-2">
            Reveal their verified emails and phone numbers
            </p>
          </div>
          <div className='my-16 ml-1'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-1 right-1 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
        </div>
        <div>
          <Image src="/assets/jackcooper.png" alt="" width="562" height="677"/>
        </div>
      </div>
    </div>
  );
};
export default FindContact;
