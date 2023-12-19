import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Notification = () => {
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
  const pendingAnimalEntriesCount = data.filter((entry) => entry.status === 'pending' && entry.category === 'Animal').length;
  const pendingCultureEntriesCount = data.filter((entry) => entry.status === 'pending' && entry.category === 'Culture').length;
  const pendingPlantsEntriesCount = data.filter((entry) => entry.status === 'pending' && entry.category === 'Plants').length;

  return (
    <div className='grid lg:grid-cols-1 gap-4 p-4 overflow-hidden'>
      {/* Card 1: Pending Animal Entries */}
      <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{pendingAnimalEntriesCount}</div>
          <div className='text-gray-600'>Pending Entries<br></br>Category : Animals</div>
        </div>
        <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-gray-900 text-lg'>Approve</span>
        </div>
      </div>

      {/* Card 2: Pending Culture Entries */}
      <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{pendingCultureEntriesCount}</div>
          <div className='text-gray-600'>Pending Entries<br></br>Category : Cultures</div>
        </div>
        <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-gray-900 text-lg'>Approve</span>
        </div>
      </div>

      {/* Card 3: Pending Entries: Plants */}
      <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <div className='text-xl font-bold'>{pendingPlantsEntriesCount}</div>
          <div className='text-gray-600'>Pending Entries<br></br>Category : Plants</div>
        </div>
        <div className='bg-orange-200 flex justify-center items-center p-2 rounded-lg'>
          <span className='text-gray-900 text-lg'>Approve</span>
        </div>
      </div>
    </div>
  );
};

export default Notification;