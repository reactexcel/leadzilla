import React, { useState } from 'react';
import Image from 'next/image';

const AccordianLayout = ({ title,index, activeIndex, setActiveIndex, answer }) => {
    const [toggle, setToggle] = useState(true)
    const handleOpenAccordian=()=>{
        setToggle(true)
        setActiveIndex(index)
    }
  return (
    <div className={`w-full ${toggle && index===activeIndex?'bg-backgray-200 my-3 rounded':'' }`}>
      <div
        className={`flex justify-between p-2 mt-2 border border-bordergray-200 rounded w-full ${toggle && index===activeIndex?'mb-1 sm:mx-0':'mb-7 sm:ml-5  sm:w-11/12'}`}
        style={{ alignItems: 'center' }}
      >
        <div className='text-base font-bold'>{title}</div>
        <div className='flex items-center rounded justify-center'>
            {toggle && index===activeIndex ? <Image src='/assets/close.png' alt='' width='35px' height='35px' className='cursor-pointer' onClick={()=>setToggle(false)}/>:
          <Image src='/assets/open.png' alt='' width='35px' height='35px' className='cursor-pointer' onClick={handleOpenAccordian}/>}
        </div>
      </div>
      {toggle && index===activeIndex &&
      <div className='shadow-3xl rounded-2xl shadow-cyan-500/50 p-2 mb-6 text-sm font-medium text-faqtextcolor-200'>
        {answer}
      </div>}
    </div>
  );
};

export default AccordianLayout;
