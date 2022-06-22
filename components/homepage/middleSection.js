import React from 'react';
import Image from 'next/image';

const MiddleTopSection = () => {
  return (
    <>
      <div className='mt-80 text-4xl text-center' style={{fontFamily: "Manrope"}}>
        <div>Let’s get real</div>
        <div className='p-1'>You don’t need contact data.</div>
        <div className='font-bold mb-4'>You need meetings with good fit buyers.</div>
        <div className='py-3'>
            <Image src='/assets/current.png' alt="" width="486px" height="420px"/>
            <Image src='/assets/process.png' alt="" width="486px" height="420px"/>
        </div>
      </div>
    </>
  );
};

export default MiddleTopSection;
