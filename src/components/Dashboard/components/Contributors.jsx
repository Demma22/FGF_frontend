import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { adminData } from '../data/adminData'
import { RiAdminFill, RiUser3Fill } from 'react-icons/ri'

const Contributors = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const handlePageClick = (data) => {
        let selected = data.selected;
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = adminData.slice(offset, offset + itemsPerPage);


    return (   
        <div className='grid lg:grid-cols-1 gap-4 p-4 overflow-auto'>
            <div className='lg:col-span-1 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-lg'>
                Users</div>    
                <ul>
                    {currentItems.map((admin, id) => (
                        <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer py-7 w-30'>
                            <div className='bg-green-100 rounded-lg p-3'>
                                {admin.isAdmin ? <RiAdminFill className='text-purple-800' /> : <RiUser3Fill className='text-purple-800' />}
                            </div>
                            <div className='block'>
                                <div className='pl-2'>
                                    <p className='text-green-700 font-bold'>{admin.name.first} {admin.name.last}</p>
                                    <p>{admin.isAdmin}</p>
                                    <p className='text-sm font-semibold'>{admin.access}</p>
                                </div>
                                {/* <div className='lg:flex md:hidden absolute right-2 items-center gap-2 text-gray-700'> */}
                                    {/* <p className='text-sm font-semibold'>{admin.access}</p> */}
                                    {/* <p className='text-md'>{admin.age}</p> */}
                                {/* </div> */}
                            </div>
                        </li>
                    ))}
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(adminData.length / itemsPerPage)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </ul>
            </div>
        
    )
}

export default Contributors;