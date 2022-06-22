import React from 'react';
import Image from 'next/image';

const FeatureList = () => {
  return (
    <>
      <div className='text-center'>
        <div style={{ marginBottom: '-18px', marginLeft: '-86px' }}>
          <Image src='/assets/feature.png' alt='' width='20px' height='20px' />
        </div>
        <div className='text-4xl' style={{ letterSpacing: '-0.6px' }}>
          Now
          <br />
          <div className='font-extrabold py-3'>
            here’s the feature list you <br />
            <div className='py-3'> were looking for</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureList;
