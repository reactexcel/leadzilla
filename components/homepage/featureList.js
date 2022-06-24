import React from 'react';
import Image from 'next/image';

const FeatureList = () => {
  return (
    <>
      <div className='text-center'>
        <div style={{ marginBottom: '-18px', marginLeft: '-101px' }}>
          <Image src='/assets/feature.png' alt='' width='20px' height='20px' />
        </div>
        <div className='text-5xl' style={{ letterSpacing: '-0.6px' }}>
         <span className='font-gilroylight'> Now </span>
          <br />
          <div className='font-extrabold font-gilroybold py-3'>
            here’s the feature list you <br />
            <div className='py-3'> were looking for
            </div>
            {/* <div style={{marginTop: "-19px", marginLeft:"39%"}}><Image src="/assets/smallArrowtwisted.png" alt='arrow' height="45" width="65"/></div> */}
          </div>
        </div>
      </div>
      
      <div>
        <div className='w-10/12 mx-auto flex justify-around items-center py-10'>
          <div>
            <div className='text-4xl font-extrabold font-gilroybold'>
              Leadzilla prospecting <br /> platform
            </div>
            <div className='text-base font-semibold py-5'>
              Convert more prospects into customers with targeted search
              <br /> on over{' '}
              <span className='text-blue-600'>20 search filters</span>
            </div>

            <div className='mt-4'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
          </div>

          <div>
            <Image
              src='/assets/platform.png'
              alt=''
              width='516px'
              height='417px'
            />
          </div>
        </div>
        <div className='w-10/12 mx-auto flex justify-around items-center py-20'>
          <div>
            <Image
              src='/assets/extansion.png'
              alt=''
              width='516px'
              height='417px'
            />
          </div>
          <div className='ml-4'>
            <div className='text-4xl font-extrabold font-gilroybold'>Leadzilla extension</div>
            <div className='text-base font-semibold py-5'>
              <span className='text-blue-600'> Find, target and connect</span>{' '}
              with ideal prospects on LinkedIn
            </div>

            <div className='mt-4'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
          </div>
        </div>

        <div className='w-10/12 mx-auto flex justify-around items-center py-10'>
          <div>
            <div className='text-4xl font-extrabold font-gilroybold'>Contact search</div>
            <div className='text-base font-semibold py-5'>
              <div className='flex'>
                <div className='mr-3'>
                  <Image
                    src='/assets/rectangle.png'
                    alt=''
                    width='10px'
                    height='10px'
                  />
                </div>
                <div>
                  <span className='text-blue-600'>200 million+ contacts, 95%+ email accuracy, 100m+</span>
                  <br /> <span className='text-blue-600'>mobile</span> numbers at your disposal.
                </div>
              </div>
              <div className='flex'>
                <div className='mr-3'>
                  <Image
                    src='/assets/rectangle.png'
                    alt=''
                    width='10px'
                    height='10px'
                  />
                </div>
                <div>
                Built-in real-time email verification
                </div>
              </div>
              <div className='flex'>
                <div className='mr-3'>
                  <Image
                    src='/assets/rectangle.png'
                    alt=''
                    width='10px'
                    height='10px'
                  />
                </div>
                <div>
                Highly advanced filters: <span className='text-blue-600'>Technographics,</span>
                  <br /> <span className='text-blue-600'>firmographics and our patent-pending Lookalike AI</span>
                </div>
              </div>
            </div>

            <div className='mt-4'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
          </div>

          <div>
            <Image
              src='/assets/contactsearch.png'
              alt=''
              width='578px'
              height='425px'
            />
          </div>
        </div>
        <div className='w-10/12 mx-auto flex justify-around items-center py-20'>
          <div>
            <Image
              src='/assets/aipower.png'
              alt=''
              width='578px'
              height='416px'
            />
          </div>
          <div className='ml-4'>
            <div className='text-4xl font-extrabold font-gilroybold'>
              AI-powered personalization
            </div>
            <div className='text-base font-semibold py-5'>
              AI that writes highly personalized icebreaker lines
              <br />
              Patent-pending personality analyzer AI for highly relevant emails
              <br />
              Personalization lines based on{' '}
              <span className='text-blue-600'>20+ data points </span> from the
              web
              {/* <span className='text-blue-600'> Find, target and connect</span> with ideal prospects on LinkedIn  */}
            </div>

            <div className='mt-4'>
              <button className='bg-black p-3 px-8 text-base font-bold relative'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 text-base font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                  Learn more
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
