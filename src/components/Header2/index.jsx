import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";
import "./index.css"
import {
  FaCaretDown
} from 'react-icons/fa';


import CreateAnimal from "../pages/CreateAnimal";

import ListPlant from "../pages/ListPlant";
import ListAnimal from "../pages/ListAnimal";
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
    
    <nav className="h-[100px] flex items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
      <h2 className="font-bold text-lg">{heading}</h2>
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => { }}>
      
      <Link to="/"><span>Home</span></Link>

      </div>
      
      
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => {  }}>
      <Link to="/ListPlant"> <span> Plants </span></Link>
      </div>
      
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => {  }}>
        <Link to="/ListAnimal"> <span> Animals </span></Link>
      </div>
      <div className="flex gap-1 items-center cursor-pointer" id="header_item" onClick={() => {  }}>
        <span></span>
        <Link to="/ListCulture"> <span> Cultures </span></Link>
      </div>
    
      <div className="flex gap-2 items-center cursor-pointer" onClick={() => { }}>
        {/* <div className="font-bold w-8 h-8 rounded-full overflow-hidden bg-[#C1BCCD] text-[#fff] flex justify-center items-center"> */}
          {/* <p className="font-medium text-sm">JM</p>  */}
        {/* </div> */}
         <span>{username}</span>
        <FaCaretDown size={18} className="text-[#515861]" />
      </div>
    </nav>
    

  );
}
