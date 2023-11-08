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
            link: "/ListAnimals",
            icon: FaRegListAlt,
            roles: ['administrator'],
        },
        {
            label: "Plants",
            link: "/ListPlant",
            icon: FaRegListAlt,
            roles: ['administrator', 'contributor'],
        },
        {
            label: "Cultures",
            link: "/CreateClan",  //set back to ListCultures
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
