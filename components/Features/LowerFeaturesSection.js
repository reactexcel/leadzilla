import React from 'react';
import Image from 'next/image';

const LowerFeaturesSection = () => {
  return (
    <div className='bg-green-bg'>
      <div className='w-10/12 py-8 px-8 m-auto pt-24'>
        <div className='font-light text-center' style={{ fontSize: '42px' }}>
          <span className='font-black font-gilroybold'>Top 5 reasons</span>
          <span className='font-gilroylight'> why people</span>
          <div className='font-gilroylight'>choose Leadzilla</div>
        </div>
        <div className='flex justify-between my-10 items-center'>
          <div>
            <Image
              src='/assets/featuresarrow.png'
              alt=''
              width='140.69'
              height='100.63'
            />
          </div>
          <div>
            <Image
              src='/assets/eyes.png'
              alt=''
              width='70.14px'
              height='65.72px'
            />
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='bg-black border-2 border-darkcolor-200 p-3 text-xl  relative w-4/5'>
          <div className='flex  flex-col justify-between text-left mx-auto ml-10 py-3'>
              <div className='my-2 font-medium text-xl flex mt-8'>
                <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
               <div className='ml-2 text-pricingtextcolor-200'> “Product is very easy to use. Just one click and our customers
                find emails and phone numbers”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
                <div className='ml-2 text-pricingtextcolor-200'>“We understand that most of our customers are SMBs and we don’t
                tie them up in long term contracts”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“A lot of our customers are busy salespeople who struggle with
                writing personalized emails. Our AI helps them get leads on
                autopilot”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“The data is very accurate and there’s an email verification
                tool inbuilt into the product at no added cost”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“Our support team is always there to help each and every
                customer get the most of out of the product”</div>
              </div>
              </div>
            <div className='bg-whitebagfeature-100 border-2 border-darkcolor-200 p-3 absolute py-4 text-xl bottom-2 right-2 w-full'>
              <div className='flex  flex-col justify-between text-left mx-auto ml-10 py-3'>
              <div className='my-2 font-medium text-xl flex mt-8'>
                <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
               <div className='ml-2 text-pricingtextcolor-200'> “Product is very easy to use. Just one click and our customers
                find emails and phone numbers”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
                <div className='ml-2 text-pricingtextcolor-200'>“We understand that most of our customers are SMBs and we don’t
                tie them up in long term contracts”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“A lot of our customers are busy salespeople who struggle with
                writing personalized emails. Our AI helps them get leads on
                autopilot”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“The data is very accurate and there’s an email verification
                tool inbuilt into the product at no added cost”</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>“Our support team is always there to help each and every
                customer get the most of out of the product”</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div>
            <Image
              src='/assets/belowfeature.svg'
              alt=''
              width='340.73px'
              height='321.26px'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LowerFeaturesSection;
