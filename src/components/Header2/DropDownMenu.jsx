import { Link } from "react-router-dom";

export const DropdownMenu = ({ items }) => {
    return (
      <div className="absolute bg-white mt-2 py-2 px-4 shadow-md top-full left-0">
        {items.map((item, index) => (
          <Link key={index} to={item.link} onClick={(e) => e.stopPropagation()}>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    );
   };