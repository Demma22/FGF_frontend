import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";
import { FaUser, FaBell, FaBars } from 'react-icons/fa'; // Import the user, bell, and bars icons
import "./index.css";
import { DropdownMenu } from "./DropDownMenu";

const categories = [
  { label: 'Plants', link: '/ListPlant' },
  { label: 'Animals', link: '/ListAnimal' },
  { label: 'Cultures', link: '/ListCulture' },
];

export function Header2() {
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3); // Replace with actual unread notifications count

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    // Simulating user authentication. Replace this with your actual authentication logic.
    const UserData = {
      username: "JohnDoe", // Replace with actual username
    };

    setUsername(UserData.username);
    // Simulating unread notifications
  }, []);

  const handleNotificationClick = () => {
    // Handle notification click logic here
    // For now, let's just reset the unread count
    setUnreadNotifications(0);
  };

  const heading =
    username &&
    menuData[username.toLowerCase()] &&
    menuData[username.toLowerCase()]
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (
    <nav className="h-[100px] pl-5 flex bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
      <h2 className="font-bold text-lg">{heading}</h2>

      {/* Plants, Animals, and Cultures Dropdown */}
      <div className="flex gap-1 items-center cursor-pointer relative" id="header_item">
        <span onClick={toggleDropdown}><FaBars /></span>
        {showDropdown && (
          <DropdownMenu classname="" items={categories}>
            {/* 'categories' is an array of objects with 'label' and 'link' properties */}
            {/* You can customize the items here or pass them dynamically */}
          </DropdownMenu>
        )}
      </div>

      {/* Home Button */}
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => { }}>
        <Link to="/"><span><b>Home</b></span></Link>
      </div>

      {/* Notification Bell Icon */}
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={handleNotificationClick}>
        <FaBell size={18} className="text-[#515861]" />
        {unreadNotifications > 0 && (
          <div className="bg-[#FF0000] text-[#fff] rounded-full p-1">
            {unreadNotifications}
          </div>
        )}
      </div>

      {/* User Icon and Username */}
      <div className="flex gap-2 items-center cursor-pointer" onClick={() => { }}>
        <span><FaUser /></span>
        <span>{username}</span>
      </div>

      {/* Login/Register Buttons */}
      <div id="login_register_container" className="flex gap-1 items-center cursor-pointer">
        <div className="flex gap-1 items-center" id="header_item" onClick={() => {  }}>
          <span></span>
          <Link to="/Login" id="login">
            <FaUser style={{ marginRight: '5px', paddingRight:'1px' }} /><span> Login </span>
          </Link>
        </div>
  
        <div className="flex gap-1 items-center" onClick={() => {  }}>
          <button className="registration-button">
            <Link to="/Register" id="register">
              <span>Register</span>
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
