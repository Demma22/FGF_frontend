import {
    FaRegListAlt,
    FaPlusSquare,
    FaUsers,
    FaChartLine,
    FaEllipsisH,
} from 'react-icons/fa';

export const menuData = {
    admin: [
        
        {
            label: "Animals",
            link: "/CreateAnimal",
            icon: FaRegListAlt,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Plants",
            link: "/CreatePlant",
            icon: FaRegListAlt,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Cultures",
            link: "/CreateClan", 
            icon: FaRegListAlt,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Contributions",
            link: "/contributions",
            icon: FaPlusSquare,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Contributors",
            link: "/contributors",
            icon: FaUsers,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Analyze",
            link: "/analyze",
            icon: FaChartLine,
            roles: ['administrator']
        },
        {
            label: "More",
            link: "/more",
            icon: FaEllipsisH,
            roles: ['administrator']
        },
    ],
};
