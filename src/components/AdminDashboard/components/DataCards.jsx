import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataCards = () => {
  const [data, setData] = useState([]);

  const url = 'https://fgfbackend.onrender.com/api/count-entries/';

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Calculate counts based on the data received
  const totalVisits = data.reduce((acc, entry) => acc + entry.visits, 0);
  const totalUsers = data.reduce((acc, entry) => acc + entry.users.length, 0);
  const totalEntries = data.reduce((acc, entry) => acc + entry.total_entries, 0);

  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4 overflow-hidden'>
      {/* Card 1 */}
      <div className='lg:col-span-1 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{totalVisits}</div>
          <div className='text-gray-600'>Total number of Visits</div>
        </div>
        <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>+18%</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className='lg:col-span-1 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{totalUsers}</div>
          <div className='text-gray-600'>Users</div>
        </div>
        <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>+100%</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className='lg:col-span-1 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{totalEntries}</div>
          <div className='text-gray-600'>Total Entries</div>
        </div>
        <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-green-700 text-lg'>+10%</span>
        </div>
      </div>
    </div>
  );
};

export default DataCards;