import React from 'react';
import Header from '../header';

const Contents = () => {
  return (
    <div className="" id="contactPage"
      style={{ 'marginBottom': '340px' }}
    >
      <div className='bg-blue-300'
        id="contact"
      >
        <Header />
        <div className=' grid grid-cols-2 lg:w-10/12 py-2 mx-auto md:mx-0 px-2 lg:px-8 md:block'
        >
          <div className='mt-36 md:mt-8 md:px-6'>
            <h1 className='text-6xl font-extrabold leading-10 font-gilroybold lg:text-5xl md:text-4xl'>Contact us</h1>
            <p className='mt-3 pt-4 mb-11 text-xl text-voilet-100 w-2/3 md:text-lg md:w-full'>
              Don't be a stranger. Feel free to contact us about anything, anytime.
            </p>
            
            <div className=' mt-32 text-xl xs:text-base md:text-lg absolute mb-7 md:mt-0'>
              <p className='text-blur-200 mb-2' >
                Product queries
              </p>
              <p className="underline">saurav@leadzilla.ai</p>
            </div>
            <div className='mt-60 text-xl xs:text-base md:text-lg absolute md:mt-0 md:ml-44'>
              <p className='text-blur-200 mb-2'>Technical queries</p>
              <p className="underline">vikas@leadzilla.ai</p>
            </div>
          </div>

          <div
            className='mt-40 px-5 md:px-0 lg:w-2/5 flex flex-col rounded-xl md:shadow-none md:rounded-none md:mt-44 lg:absolute right-20 lg:right-16 mr-7 md:mr-0  mx-auto shadow-md'
            style={{
              backgroundColor: 'white',
            }}
          >
            <input
              className='mt-7 ml-7 py-3 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Name'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Email'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Phone Number'
            />
            <input
              className='mt-7 ml-7 py-3.5 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Company Name'
            />

            <div className='flex'>
              <input
                className='mt-7 ml-7 p-5 w-6 h-6'
                type='checkbox'
              />
              <div className='m-4 mt-5'>
                <p className='text-sm text-gray-400'>
                  I confirm that i have read and agree to the Leadzilla
                </p>
                <p className='text-xs text-slate-50'>
                  <spam className='text-sm underline decoration-solid ...'>
                    terms&conditions
                  </spam>{' '}
                  <spam className='text-xs text-gray-500'>and</spam>{' '}
                  <spam className='underline decoration-solid ...'>
                    privacy policy.
                  </spam>
                </p>
              </div>
            </div>

            <div className='p-10 w-7/12 md:w-2/4 lg:w-full sm:m-auto sm:p-0'>
              <button className='bg-black p-3 sm:p-2 sm:py-2  py-4 text-xl sm:text-lg relative transform  hover: transition duration-500 hover:scale-125' id="sendBtn1">
                Send message
                <button className='bg-yellow-500 p-3 sm:p-2 py-4 sm:py-3 text-xl sm:text-lg absolute bottom-2 right-2 whitespace-nowrap' id="sendBtn2">
                  Send message
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
