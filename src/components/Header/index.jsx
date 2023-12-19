import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";

import { FaBell, FaCaretDown } from 'react-icons/fa';

// DropdownMenu component
const DropdownMenu = () => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10">
      {/* Add your dropdown menu items here */}
      <Link to="/Userprofile" className="block p-2 hover:bg-gray-100">My Profile</Link>
      <Link to="/settings" className="block p-2 hover:bg-gray-100">Account Settings</Link>
      <Link to="/logout" className="block p-2 hover:bg-gray-100">Log Out</Link>
    </div>
  );
};

// NotificationDropdown component
const NotificationDropdown = ({ role, alerts }) => {
  // Define different alerts based on user role
  const roleSpecificAlerts = role === 'admin'
    ? ["New admin message", "System update", "Emergency alert"]
    : ["New message", "Friend request", "Event reminder"];

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-10">
      {roleSpecificAlerts.map((alert, index) => (
        <div key={index} className="p-2">
          {alert}
        </div>
      ))}
    </div>
  );
};

export function Header() {
  const location = useLocation();

  const [userData, setUserData] = useState({
    username: "JohnDoe",
    role: "user", // Replace with the actual user role
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsNotificationDropdownOpen(false);
  };

  const heading =
    menuData.contributor &&
    menuData.contributor
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (
    <nav className="relative w-full h-[77px] flex justify-end items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
      <>
        <h2 className="font-bold text-lg">{heading}</h2>

        {/* User Icon and Username with Dropdown */}
        <div className="relative group">
          <div className="flex gap-2 items-center cursor-pointer" onClick={toggleDropdown}>
            <div className="font-bold w-8 h-8 rounded-full overflow-hidden bg-[#C1BCCD] text-[#fff] flex justify-center items-center">
              <p className="font-medium text-sm">{userData.username[0]}</p>
            </div>
            <span>{userData.username}</span>
            <FaCaretDown size={18} className="text-[#515861]" />
          </div>

          {/* Conditionally render the user dropdown */}
          {isDropdownOpen && <DropdownMenu />}
        </div>

        {/* Notification Bell Icon with Dropdown */}
        <div className="relative group ml-4" onMouseLeave={closeDropdowns}>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
          >
            <FaBell size={24} />
          </div>
          {/* Conditionally render the notification dropdown */}
          {isNotificationDropdownOpen && (
            <NotificationDropdown role={userData.role} alerts={userData.role === 'admin' ? ["New admin message", "System update", "Emergency alert"] : ["New message", "Friend request", "Event reminder"]} />
          )}
        </div>
      </>
    </nav>
  );
}