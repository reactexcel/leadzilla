import React from 'react';

const Contents = () => {
  return (
    <div style={{ height: '800px' }}>
      <div className='bg-blue-300' style={{ height: '380px' }}>
        <div className='grid grid-cols-2 w-10/12 py-2 mx-auto  px-2 sm:px-6 lg:px-8'>
          <div className='mt-36 sm:mt-20'>
            <h1 className='text-6xl sm:text-3xl font-extrabold leading-10 font-gilroybold'>Contact us</h1>
            <p className='mt-3 pt-4 mb-11 text-xl sm:text-sm text-voilet-100 w-2/3 sm:w-64'>
              Don't be a stranger. Feel free to contact us about anything, anytime.
            </p>
            <div className='sm:flex'>
              <div className=' mt-32 sm:mt-4 text-xl sm:text-sm sm:mr-4 mb-7 absolute '>
                <p className='text-blur-200 mb-2'>
                  Product queries
                </p>
                <p>saurav@leadzilla.ai</p>
              </div>
              <div className='mt-60 sm:mt-4 sm:ml-36 text-xl sm:text-sm absolute'>
                <p className='text-blur-200 mb-2 sm:mr-0'>
                  Technical queries
                </p>
                <p>vikas@leadzilla.ai</p>
              </div>
            </div>
          </div>

          <div
            className='mt-40 bg-white sm:mt-96 px-5 flex flex-col rounded-xl sm:rounded-none absolute right-20 mr-7 mx-auto shadow-md sm:shadow-none mr-[5%]'
            style={{
              // backgroundColor: 'white',
              // width: '40%',
              // marginRight: '5%',
            }}
          >

            <input
              className='mt-7 ml-7 py-3 border-b-2 border-inputblack-100 outline-none mr-7 '
              placeholder='Name'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7 '
              placeholder='Email'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7 '
              placeholder='Phone Number'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7 '
              placeholder='Company Name'
            />

            <div className='flex'>
              <input
                className='mt-7 ml-7  p-5 w-6 h-6'
                type='checkbox'

              />
              <div className='m-4 mt-5'>
                <p className='text-sm sm:text-xs text-gray-400'>
                  I confirm that i have read and agree to the Leadzilla
                </p>
                <p className='text-xs text-slate-50'>
                  <span className='text-sm underline decoration-solid ...'>
                    terms&conditions
                  </span>{' '}
                  <span className='text-xs text-gray-500'>and</span>{' '}
                  <span className='underline decoration-solid ...'>
                    privacy policy.
                  </span>
                </p>
              </div>
            </div>

            <div className='p-10 transform w-7/12 hover: transition duration-500 hover:scale-125'>
              <button className='bg-black p-3 sm:px-28 sm:left-1.5 sm:top-1 sm:py-0 py-4 text-xl relative '>
                Send message
                <div className='bg-yellow-500 sm:px-24 sm:py-4 px-3 py-4 text-xl absolute bottom-2 right-2 sm:bottom-1 sm:right0 sm:-left-1 whitespace-nowrap '>
                  Send message
                </div>
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
