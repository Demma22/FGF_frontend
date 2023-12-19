import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { adminData } from '../data/adminData';
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri';

const Contributors = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageClick = (data) => {
    let selected = data.selected;
    setCurrentPage(selected);
  };

  // Filter the adminData to include only contributors
  const contributorsData = adminData.filter((admin) => admin.isContributor);

  const offset = currentPage * itemsPerPage;
  const currentItems = contributorsData.slice(offset, offset + itemsPerPage);

  return (
    <div className='grid lg:grid-cols-1 gap-4 p-4 overflow-auto'>
      <div className='lg:col-span-1 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
        Users
      </div>
      <ul>
        {currentItems.map((admin) => (
          <li key={admin.id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer py-7 w-30'>
            <div className='bg-green-100 rounded-lg p-3'>
              {admin.isAdmin ? <RiAdminFill className='text-purple-800' /> : <RiUser3Fill className='text-purple-800' />}
            </div>
            <div className='block'>
              <div className='pl-2'>
                {admin.isAdmin ? (
                  <p className='text-green-700 font-bold'>{admin.name.first} {admin.name.last}</p>
                ) : (
                  <p className='text-green-700 font-bold'>{admin.name.first} {admin.name.last}</p>
                )}
                <p>{admin.isAdmin ? 'Admin' : 'User'}</p>
                <p className='text-sm font-semibold'>{admin.access}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(contributorsData.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Contributors;