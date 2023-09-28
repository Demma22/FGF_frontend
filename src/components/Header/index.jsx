import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuData } from "../menu/menuData";

import {
  FaCaretDown
} from 'react-icons/fa';

export function Header() {
  const location = useLocation();

  useEffect(() => {
  }, []);

  const heading =
    menuData.admin &&
    menuData.admin
      .filter((item) => item.link === location.pathname)
      .map((item) => item.label);

  return (
    <nav className="w-full h-[77px] flex justify-between items-center px-12 py-7 bg-[#FFF] text-[#515861] border-b border-[#e4e4e7]">
      <h2 className="font-bold text-lg">{heading}</h2>

      <div className="flex gap-2 items-center cursor-pointer" onClick={() => { }}>
        <div className="font-bold w-8 h-8 rounded-full overflow-hidden bg-[#C1BCCD] text-[#fff] flex justify-center items-center">
          <p className="font-medium text-sm">JM</p>
        </div>
        <span>John Mark</span>
        <FaCaretDown size={18} className="text-[#515861]" />
      </div>
    </nav>
  );
}
