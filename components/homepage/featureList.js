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
        <div className='w-10/12 mx-auto flex sm:block md:block justify-around items-center py-10'>
          <Fade left>
            <div>
              <div className='text-4xl sm:text-2xl md:text-3xl font-gilroybold'>
                Leadzilla prospecting <br /> platform
              </div>
              <div className='text-base font-semibold sm:font-normal md:font-normal py-5'>
                Convert more prospects into customers with targeted search
                <br /> on over{' '}
                <span className='text-blue-600'>20 search filters</span>
              </div>

             
                <div className='mt-4 h-7 w-3/6'>
                <Link href="https://app.leadzilla.ai/login">
                  <button className='bg-black p-3 px-8 font-bold relative transform hover:ml-7 hover: transition duration-500 hover:scale-125'>
                    Learn more
                    <button className=' bg-yellow-500 p-3 px-8 font-bold absolute bottom-2 right-2 whitespace-nowrap'>
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
                src='/assets/platform.svg'
                alt=''
                width='516px'
                height='417px'
              />
            </Fade>
          </div>
        </div>
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
                <span className='text-blue-600'> Find, target and connect</span>{' '}
                with ideal prospects on LinkedIn
              </div>

              <div className='mt-4 h-7 w-3/6'>
              <Link href="https://chrome.google.com/webstore/detail/leadzilla/mlknnmdepgmefemphhdombdflfgceejg">
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
                Contact search
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
                    <span className='text-blue-600'>
                      200 million+ contacts, 95%+ email accuracy, 100m+
                    </span>
                    <br /> <span className='text-blue-600'>mobile</span> numbers
                    at your disposal.
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
                  <div>Built-in real-time email verification</div>
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
                    Highly advanced filters:{' '}
                    <span className='text-blue-600'>Technographics,</span>
                    <br />{' '}
                    <span className='text-blue-600'>
                      firmographics and our patent-pending Lookalike AI
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-4 h-7 w-3/6'>
              <Link href="https://app.leadzilla.ai/login">
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
        <div className='w-10/12 mx-auto flex sm:block md:block justify-around items-center'>
          <div className='pt-24 sm:hidden md:hidden sm:mt-10 md:pt-24'>
            <Fade left>
              <Image
                src='/assets/aipowerleadzilla.svg'
                alt=''
                width='578px'
                height='416px'
              />
            </Fade>
          </div>
          <Fade right>
            <div className='ml-4'>
              <div className='text-4xl font-gilroybold'>
                AI-powered personalization
              </div>
              <div className='font-semibold py-5'>
                AI that writes highly personalized icebreaker lines
                <br />
                Patent-pending personality analyzer AI for highly relevant
                emails
                <br />
                Personalization lines based on{' '}
                <span className='text-blue-600'>20+ data points </span> from the
                web
                {/* <span className='text-blue-600'> Find, target and connect</span> with ideal prospects on LinkedIn  */}
              </div>

              <div className='mt-4 h-7 w-3/6'>
              <Link href="https://app.leadzilla.ai/login">
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
          <div className='pt-24 hidden sm:block md:block'>
            <Fade left>
              <Image
                src='/assets/aipowerleadzilla.svg'
                alt=''
                width='578px'
                height='416px'
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
