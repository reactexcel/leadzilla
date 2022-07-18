import React from 'react'

const CommonButton = () => {
    return (
        <div>
            <button className='bg-black p-3 px-8 font-bold relative transform hover:ml-7 hover: transition duration-500 hover:scale-125'>
                Learn more
                <div className='bg-yellow-500 p-3 px-8 font-bold absolute  whitespace-nowrap -top-2 -left-1.5'>
                    Learn more
                </div>
            </button>
        </div>
    )
}

export default CommonButton
