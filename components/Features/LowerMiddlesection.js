import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-reveal';

const LowerMiddlesection = () => {
  return (
    <Fade right>
      <div className='w-10/12 py-2 px-8 m-auto text-center pt-20 md:px-0'>
        <div className='font-light text-5xl md:text-left sm:text-xl'>
          <div className='font-gilroybold'>
            Leadzilla works across industries{' '}
          </div>
          <div className='font-gilroylight'>and business types</div>
        </div>
        <div className='flex justify-center my-16 items-center sm:flex-wrap md:flex-wrap'>
          <div className="sm:mb-10">
            <div className=''>
              <button className='bg-darkgrayfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  relative w-128 h-128 sm:w-148 sm:h-148'>
                <button className='bg-grayfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  absolute bottom-2 right-2 whitespace-nowrap w-128 h-128 sm:w-148 sm:h-148'>
                  <button className='bg-whitebagfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  absolute bottom-2 right-2 whitespace-nowrap w-128 h-128 sm:w-148 sm:h-148'>
                    <div className='flex  flex-col justify-between text-left mx-auto ml-32 sm:ml-4'>
                      <div className='font-gilroybold text-2xl'>
                        {' '}
                        Who uses Leadzilla?
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Salespeople
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Internet / digital marketers
                      </div>
                      <div className='my-2 font-semibold text-base '>
                        Growth hackers
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Software & SaaS
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Small and medium businesses
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Startups
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Recruiters{' '}
                      </div>
                      <div className='my-2 font-semibold text-base'>
                        Lead generation agencies
                      </div>
                    </div>
                  </button>
                </button>
              </button>
            </div>
          </div>

          <div className='my-auto sm:hidden'>
            <Image src='/assets/line.png' alt='' width='223px' height='2px' />
          </div>

          <div className=''>
            <button className='bg-pinky-300 p-3 py-4 text-xl border-2 border-darkcolor-200 relative w-128 h-128 sm:w-148 sm:h-148'>
              <button className='bg-yellow-500 p-3 py-4 text-xl border-2 border-darkcolor-200 absolute bottom-2 right-2 whitespace-nowrap w-128 h-128 sm:w-148 sm:h-148'>
                <button className='bg-bluefeature-100 p-3 py-4 text-xl border-2 border-darkcolor-200 absolute bottom-2 right-2 whitespace-nowrap w-128 h-128 sm:w-148 sm:h-148'>
                  <div className='text-left ml-3 sm:ml-1 sm:text-justify'>
                    <div className='font-gilroybold text-yellow-500 text-2xl'>
                      Result
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "I’m at 130% of quota for this quarter and a large{' '}
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      part of it is because of Leadzilla"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "I used to struggle to find the email{' '}
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      addresses of company directors but not anymore!"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "the data leadzilla finds is our secret sauce"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      {' '}
                      "I love how you can press one button and find an email!"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "Really clever, quick and intuitive. Very easy to use"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "Surprised at how much work gets done using Leadzilla"
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      "I’m finding emails and contact information{' '}
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      {' '}
                      without a lot of research and expense."
                    </div>
                    <div className='text-white my-2 font-semibold text-base sm:text-sm sm:whitespace-pre-line'>
                      {' '}
                      "other tools do not have great accuracy"
                    </div>
                  </div>
                </button>
              </button>
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};
export default LowerMiddlesection;
