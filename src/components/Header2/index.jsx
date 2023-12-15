import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";
import { FaUser } from 'react-icons/fa'; // Import the user icon
import "./index.css"
import { FaBars } from 'react-icons/fa';
import CreateAnimal from "../pages/Animals/CreateAnimal";
import ListPlant from "../pages/Plants/ListPlant";
import ListAnimal from "../pages/Animals/ListAnimal";
import ListCulture from "../pages/Culture/ListCulture";
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
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const [authenticated, setAuthenticated] = useState(
  //   localStorage.getItem('authenticated') === 'true'
  // );
  /* axios.post('http://localhost:8000/api/refresh-token', { refreshToken })
  .then((response) => {
    const newAuthToken = response.data.token;
    localStorage.setItem('authToken', newAuthToken);
    // Now you can use newAuthToken in your Authorization header.
  })
  .catch((error) => {
    console.error('Token refresh failed:', error);
  }); */

  const url = 'http://localhost:8000/api/profile/';
  // useEffect(() => {
  //   const token = localStorage.getItem('authToken');
  //   // Make a request to get user information using the stored token
  //   axios.get(url, token)
  //   // axios.get(url)  
  //   .then((response) => {
  //     setUsername(response.data.username);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
    
    
  // }, []);

  const getUserDetails = async () => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },

      });

      const userDetails = response.data;
      setUsername(userDetails);
      console.log('User Details: ', userDetails);
    } catch(error){
      console.error('Failed to get user details: ', error)
    }
  };



  const heading =
    menuData.admin &&
    menuData.admin
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (
    // <nav className="w-full h-[77px] flex justify-between items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
    
    <nav className="h-[100px] pl-5 flex bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
      <h2 className="font-bold text-lg">{heading}</h2>

        {/* Plants, Animals, and Cultures Dropdown */}
        <div className="flex gap-1 items-center cursor-pointer relative" id="header_item">
        <span onClick={toggleDropdown}><FaBars /></span>
        {showDropdown && (
          <DropdownMenu classname="" items={categories}>
            {/*  'categories' is an array of objects with 'label' and 'link' properties */}
            {/* You can customize the items here or pass them dynamically */}
          </DropdownMenu>
        )}
      </div>

      {/* Home Button */}
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => { }}>
        <Link to="/"><span><b>Home</b></span></Link>
      </div>
  
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
  
    <div className="flex gap-2 items-center cursor-pointer" onClick={() => { }}>
      <span>{username}</span>
    </div>
  </nav>
  


  );
}