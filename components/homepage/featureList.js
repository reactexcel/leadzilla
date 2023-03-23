import React from 'react';
import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Link from 'next/link';

const FeatureList = () => {
  return (
    <>
      <div className='text-center'>
        <div style={{ marginBottom: '-18px', marginLeft: '-101px' }}>
          <Image src='/assets/feature.png' alt='' width='20px' height='20px' />
        </div>
        <div className='text-5xl sm:text-3xl md:text-4xl' style={{ letterSpacing: '-0.6px' }}>
          <span className='font-gilroylight'> Now </span>
          <br />
          <div className='font-gilroybold py-3'>
            here’s the feature list you <br />
            <div className='py-3'> were looking for</div>
          </div>
        </div>
      </div>

      <div className='sm:-px-10'>
        
        <div className='w-10/12 mx-auto flex sm:block md:block justify-around items-center py-20 sm:py-0'>
          <div className='sm:hidden md:hidden'>
            <Fade left>
              <Image
                src='/assets/extansionleadzilla.svg'
                alt=''
                width='516px'
                height='417px'
              />
            </Fade>
          </div>
          <Fade right>
            <div className='ml-4'>
              <div className='text-4xl font-gilroybold'>
                Leadzilla extension
              </div>
              <div className='font-semibold py-5'>
                <span className='text-blue-600'> Find professional emails</span>{' '}
                of your ideal customers on LinkedIn Sales Navigator
              </div>

              <div className='mt-4 h-7 w-3/6'>
              <Link href="https:chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
                <button className='bg-black sm:w-36 p-3 sm:p-3 px-8 font-bold relative transform hover:ml-7 hover: transition duration-500 hover:scale-125'>
                  Learn more
                  <button className='bg-yellow-500 sm:w-36 p-3 sm:p-3 px-8 font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                    Learn more
                  </button>
                </button>
                </Link>
              </div>
            </div>
          </Fade>
          <div className='hidden sm:block sm:mt-6 md:block md:mt-6'>
            <Fade left>
              <Image
                src='/assets/extansionleadzilla.svg'
                alt=''
                width='516px'
                height='417px'
              />
            </Fade>
          </div>
        </div>

        <div className='w-10/12 mx-auto flex sm:block md:block justify-around items-center py-10'>
          <Fade left>
            <div>
              <div className='text-4xl font-gilroybold'>
                Export to an Excel Sheet or Hubspot or Salesforce in one-click
              </div>
              <div className='font-semibold py-5'>
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
                    Save 
                    <span className='text-blue-600'> 6-8 hours every week. </span>
                    No more copy pasting emails into Hubspot/Salesforce or Excel.
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
                  <div>Automatically remove emojis and clean data
                  <span className='text-blue-600'> 💎John -> John, Leadzilla Inc. -> Leadzilla</span>
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
                    Fetch 100 pages
                    <span className='text-blue-600'> of Sales Navigator </span>
                      results in 1 click (3-4 hours saved/week)
                  </div>
                </div>
              </div>

              <div className='mt-4 h-7 w-3/6'>
              <Link href="https://chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
                <button className='bg-black p-3 px-8 font-bold relative transform hover:ml-7 hover: transition duration-500 hover:scale-125'>
                  Learn more
                  <button className='bg-yellow-500 p-3 px-8 font-bold absolute bottom-2 right-2 whitespace-nowrap'>
                    Learn more
                  </button>
                </button>
                </Link>
              </div>
            </div>
          </Fade>
          <div className='sm:mt-6 md:mt-6'>
            <Fade right>
              <Image
                src='/assets/rectangleleadzilla.svg'
                alt=''
                width='578px'
                height='425px'
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
