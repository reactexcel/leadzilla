import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-reveal';

const LowerMiddlesection = () => {
  return (
    <Fade right>
    <div className='w-10/12 py-2 px-8 m-auto text-center pt-20'>
      <div className='font-light' style={{ fontSize: '42px' }}>
        <div className='font-gilroybold'>
          Leadzilla works across industries{' '}
        </div>
        <div className='font-gilroylight'>and business types</div>
      </div>
      <div className='flex justify-center my-16 items-center'>
        <div>
          <div className=''>
            <button
              className='bg-darkgrayfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  relative '
              style={{ height: '486px', width: '542px' }}
            >
              <button
                className='bg-grayfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  absolute bottom-2 right-2 whitespace-nowrap'
                style={{ height: '486px', width: '542px' }}
              >
                <button
                  className='bg-whitebagfeature-100 border-2 border-darkcolor-200 p-3 py-4 text-xl  absolute bottom-2 right-2 whitespace-nowrap'
                  style={{ height: '486px', width: '542px' }}
                >
                  <div className='flex  flex-col justify-between text-left mx-auto ml-32'>
                    <div className='font-gilroybold text-2xl'> Who uses Leadzilla?</div>
                    <div className='my-2 font-semibold text-base'>Salespeople</div>
                    <div className='my-2 font-semibold text-base'>Internet / digital marketers</div>
                    <div className='my-2 font-semibold text-base'>Growth hackers</div>
                    <div className='my-2 font-semibold text-base'>Software & SaaS</div>
                    <div className='my-2 font-semibold text-base'>Small and medium businesses</div>
                    <div className='my-2 font-semibold text-base'>Startups</div>
                    <div className='my-2 font-semibold text-base'>Recruiters </div>
                    <div className='my-2 font-semibold text-base'>Lead generation agencies</div>
                  </div>
                </button>
              </button>
            </button>
          </div>
        </div>

        <div className='my-auto'>
          <Image src='/assets/line.png' alt='' width='223px' height='2px' />
        </div>

        <div className=''>
          <button
            className='bg-pinky-300 p-3 py-4 text-xl border-2 border-darkcolor-200 relative '
            style={{ height: '486px', width: '542px' }}
          >
            <button
              className='bg-yellow-500 p-3 py-4 text-xl border-2 border-darkcolor-200 absolute bottom-2 right-2 whitespace-nowrap'
              style={{ height: '486px', width: '542px' }}
            >
              <button
                className='bg-bluefeature-100 p-3 py-4 text-xl border-2 border-darkcolor-200 absolute bottom-2 right-2 whitespace-nowrap'
                style={{ height: '486px', width: '542px' }}
              >
                <div className='text-left ml-3'>
                   <div className='font-gilroybold text-yellow-500 text-2xl'>Result</div> 
                  <div className="text-white my-2 font-semibold text-base">"I’m at 130% of quota for this quarter and a large </div>
                  <div className="text-white my-2 font-semibold text-base">part of it is because of Leadzilla"</div>
                  <div className="text-white my-2 font-semibold text-base">"I used to struggle to find the email </div>
                  <div className="text-white my-2 font-semibold text-base">addresses of company directors but not anymore!"</div>
                  <div className="text-white my-2 font-semibold text-base">"the data leadzilla finds is our secret sauce"</div>
                  <div className="text-white my-2 font-semibold text-base">
                    {' '}
                    "I love how you can press one button and have an email!"
                  </div>
                  <div className="text-white my-2 font-semibold text-base">
                    "Really clever, quick and intuitive. Very easy to use"
                  </div>
                  <div className="text-white my-2 font-semibold text-base">
                    "Surprised at how much work gets done using Leadzilla"
                  </div>
                  <div className="text-white my-2 font-semibold text-base">"I’m finding emails and contact information </div>
                  <div className="text-white my-2 font-semibold text-base"> without a lot of research and expense."</div>
                  <div className="text-white my-2 font-semibold text-base"> "other tools do not have great accuracy"</div>
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
