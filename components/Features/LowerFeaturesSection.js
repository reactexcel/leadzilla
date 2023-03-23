import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-reveal';

const LowerFeaturesSection = () => {
  return (
    <div className='bg-green-bg'>
      <div className='w-10/12 py-8 px-8 m-auto pt-24 sm:w-auto sm:px-0 sm:pt-0'>
        <div className='font-light text-center text-5xl md:mb-3 sm:text-left sm:ml-12 sm:pt-4 sm:mb-0 sm:text-xl md:text-2xl'>
          <span className='font-black font-gilroybold'>Top 5 reasons</span>
          <span className='font-gilroylight'> why people</span>
          <div className='font-gilroylight sm:mb-0'>choose Leadzilla</div>
        </div>
        <div className='flex justify-between my-10 items-center sm:hidden'>
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
              className='animate-bounce'
            />
          </div>
        </div>
       <Fade bottom>
        <div className='flex justify-center'>
          <div className='bg-black sm:bg-transparent sm:border-0 border-2 border-darkcolor-200 p-3 sm:p-0 text-xl sm:text-base relative w-4/5'>
          <div className='flex  flex-col justify-between text-left mx-auto ml-10 py-3 sm:ml-0 sm:py-0'>
              <div className='my-2 font-medium text-xl sm:text-base flex mt-8'>
                <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
               <div className='ml-2 text-pricingtextcolor-200'> The product is very easy to use. Just one click and our customers
                find emails and phone numbers</div>
              </div>
              <div className='my-2 font-medium text-xl sm:text-base flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
                <div className='ml-2 text-pricingtextcolor-200'>We understand that most of our customers are SMBs and we don’t
                tie them up in long term contracts</div>
              </div>
              <div className='my-2 font-medium text-xl sm:text-base flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>A lot of our customers are busy salespeople who struggle with copy-pasting 
                contact info into CRMs. We save them 6-8 hours every week.</div>
              </div>
              <div className='my-2 font-medium text-xl sm:text-base flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>It goes through multiple pages of Sales Navigator searches in one click and saves 3-5 hours of manual work every week.</div>
              </div>
              <div className='my-2 font-medium text-xl sm:text-base flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>Our support team is always there to help each and every
                customer get the most of out of the product</div>
              </div>
              </div>
            <div className='bg-whitebagfeature-100 border-2 sm:hidden border-darkcolor-200 p-3 absolute py-3 text-xl bottom-2 right-2 w-full'>
              <div className='flex  flex-col justify-between text-left mx-auto ml-10 py-3'>
              <div className='my-2 font-medium text-xl flex mt-8'>
                <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
               <div className='ml-2 text-pricingtextcolor-200'> The product is very easy to use. Just one click and our customers
                find emails and phone numbers</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
                <div className='ml-2 text-pricingtextcolor-200'>We understand that most of our customers are SMBs and we don’t
                tie them up in long term contracts</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>A lot of our customers are busy salespeople who struggle with copy-pasting 
                contact info into CRMs. We save them 6-8 hours every week.</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>It goes through multiple pages of Sales Navigator searches in one click and 
              saves 3-5 hours of manual work every week.</div>
              </div>
              <div className='my-2 font-medium text-xl flex mt-4'>
              <div className='flex items-start pt-3'><Image src="/assets/arrowfeature.png" alt='' width="10" height="3"/></div>
              <div className='ml-2 text-pricingtextcolor-200'>Our support team is always there to help each and every
                customer get the most of out of the product</div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <div className='sm:hidden md:hidden'>
            <Image
              src='/assets/belowfeature.svg'
              alt=''
              width='340.73px'
              height='321.26px'
            />
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};
export default LowerFeaturesSection;
