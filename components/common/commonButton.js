import React from 'react'

const CommonButton = () => {
    return (
        <div>
            {/* <button className='bg-black p-3 px-8 font-bold relative transform hover:ml-7 hover: transition duration-500 hover:scale-125 md:py-0 md:px-14 lg:py-0 lg:px-14'>
                Learn more
                <button className='bg-yellow-500 p-3 px-8 lg:px-12 font-bold absolute  whitespace-nowrap -top-2 -left-1.5'>
                    Learn more
                </button>
            </button> */}

            <button className='bg-black px-8 py-4 font-bold absolute ml-[5.5px]'
            >Learn More
            </button><button className='bg-yellow-500 px-7 py-4 font-bold relative -top-1.5 '
            >Learn More</button>

        </div>
    )
}

export default CommonButton
