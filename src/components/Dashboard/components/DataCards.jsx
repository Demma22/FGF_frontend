import React from 'react'

const DataCards = () => {
    return (
        <div className='grid lg:grid-cols-5 gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>3000</div>
                    <div className='text-gray-600'>Total number of Entries</div>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>15</div>
                    <div className='text-gray-700'>Daily Visits</div>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+5%</span>
                </div>
            </div>
            <div className='bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>30</div>
                    <div className='text-gray-600'>Users</div>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+100%</span>
                </div>
            </div>
        </div>
    )
}

export default DataCards