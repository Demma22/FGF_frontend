import { Link } from 'react-router-dom'
import React from 'react'

import DataCards from './DataCards'
import { SiNextdotjs } from 'react-icons/si'
// import { RxDashboard, RxPerson } from 'react-icons/rx'
// import {MdAdminPanelSettings, MdOutlineSettings} from 'react-icons/md'
import {
    FaCog,
    FaSignOutAlt,
} from 'react-icons/fa';

const Sidebar = ({ children }) => {
    return (
        <div className='flex'>
            <div className='fixed w-20 h-screen p-2 bg-white border-r-[1px] flex flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='cursor-pointer bg-green-900 p-3 rounded-lg inline-block'>
                            <SiNextdotjs className='text-amber-400' size={20} />
                            
                        </div>
                    </Link>

                    <span className='border-b-[1px] border-gray-300 w-full m-2'></span>

                    <Link href='/'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            {/* <RxDashboard className='text-amber-400 hover:text-amber-700' size={20} /> */}
                        </div>
                    </Link>

                    <Link href='/Users'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            {/* <RxPerson className='text-amber-400 hover:text-amber-700' size={20} /> */}
                        </div>
                    </Link>

                    <Link href='/Manage'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            {/* <MdAdminPanelSettings className='text-amber-400 hover:text-amber-700' size={20} /> */}
                        </div>
                    </Link>

                    <Link href='/'>
                        <div className='cursor-pointer bg-gray-400 hover:bg-gray-200 p-3 my-2 rounded-lg inline-block'>
                            {/* <MdOutlineSettings className='text-amber-400 hover:text-amber-700' size={20} /> */}
                        </div>
                    </Link>
                </div>
            </div>
            <main className='ml-20 w-full'>{children}</main>
        </div>
    )
}

export default Sidebar