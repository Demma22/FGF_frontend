import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { menuData } from "../menu/menuData";
import "./index.css"
import {
  FaCaretDown
} from 'react-icons/fa';

import ListPlant from "../pages/ListPlant";
import ListAnimal from "../pages/ListAnimal";
import ListCulture from "../pages/Culture/ListCulture";

export function Header2() {
  const location = useLocation();

  useEffect(() => {
  }, []);

  const heading =
    menuData.admin &&
    menuData.admin
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (
    // <nav className="w-full h-[77px] flex justify-between items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
    <nav className="h-[77px] flex items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
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

      {/* <div className="flex gap-2 items-center cursor-pointer" onClick={() => { }}>
        <div className="font-bold w-8 h-8 rounded-full overflow-hidden bg-[#C1BCCD] text-[#fff] flex justify-center items-center">
          <p className="font-medium text-sm">JM</p>
        </div>
        <span>John Mark</span>
        <FaCaretDown size={18} className="text-[#515861]" />
      </div> */}
    </nav>
  );
}
