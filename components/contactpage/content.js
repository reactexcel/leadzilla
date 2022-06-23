import React from 'react';

const Contents = () => {
  return (
    <div style={{ height: '800px' }}>
      <div className='bg-blue-300' style={{ height: '350px' }}>
        <div className='grid grid-cols-2 w-10/12 py-2 mx-auto  px-2 sm:px-6 lg:px-8'>
          <div className='mt-36'>
            <h1 className='text-6xl font-extrabold leading-10'>Contact us</h1>
            <p className='mt-3 pt-4 mb-11 text-xl text-voilet-300 w-2/3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid.
            </p>
            <div className=' mt-20 text-xl absolute mb-7'>
              <p className='text-blur-200 mb-2' text-xl>
                Product Supply
              </p>
              <p>support@leadzilla.so</p>
            </div>
            <div className='mt-44 text-xl absolute '>
              <p className='text-blur-200 mb-2'>Other queries</p>
              <p>help@leadzilla.so</p>
            </div>
          </div>

          <div
            className='mt-40  flex flex-col rounded-xl absolute right-20 mr-7 mx-auto'
            style={{
              backgroundColor: 'white',

              width: '40%',
              marginRight: '5%',
            }}
          >
            <input
              className='mt-7 ml-7 py-1 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Name'
            />
            <input
              className='mt-7 ml-7 py-1 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Email'
            />
            <input
              className='mt-7 ml-7 py-1 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Phone Number'
            />
            <input
              className='mt-7 ml-7 py-1 border-b-2 border-inputblack-100 outline-none mr-7'
              placeholder='Company Name'
            />

            <div className='flex'>
              <input
                className='mt-7 ml-7 p-5 w-6 h-6'
                type='checkbox'
                id='vehicle1'
                name='vehicle1'
                value='Bike'
              />
              <div className='m-4 mt-5'>
                <p className='text-sm text-gray-400'>
                  i confirm that i have read and agree to the elevate
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

            <div className='p-6'>
              <button className='bg-black p-3 py-4 text-xl  relative '>
                Send message
                <button className='bg-yellow-500 p-3 py-4 text-xl  absolute bottom-2 right-2 whitespace-nowrap'>
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
