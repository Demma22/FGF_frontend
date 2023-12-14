import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Notification = () => {
    const [data, setData] = useState([]);
    
    const url = 'https://fgfbackend.onrender.com/api/count-entries/';

    useEffect(() => {
        axios.get(url)  
          
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        <div className='grid lg:grid-cols-1 gap-4 p-4 overflow-hidden'>
            <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>4</div>
                    <div className='text-gray-600'>Pending Entries</div>
                    <div className='text-gray-600'>Category: Plants</div>
                </div>
                <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-gray-900 text-lg'>Approve</span>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>{data.total_animal_count}</div>
                    <div className='text-gray-700'>Number of Animals</div>
                </div>
                <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-gray-700 text-lg'>Review</span>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <div className='text-xl font-bold'>{3000}</div>
                    <div className='text-gray-700'>Total Number of Entries</div>
                </div>
                <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-gray-700 text-lg'>Update</span>
                </div>
            </div>
        </div>
    )
}

export default Notification