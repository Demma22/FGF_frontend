import {
    FaRegListAlt,
    FaPlusSquare,
    // FaUsers,
    // FaChartLine,
    // FaEllipsisH,
} from 'react-icons/fa';

export const menuData = {
    contributor: [
        
        {
            label: "Animals",
            link: "/Animal",
            icon: FaRegListAlt,
            roles: 'contributor',
        },
        {
            label: "Plants",
            link: "/Plant",
            icon: FaPlusSquare,
            roles:'contributor',
        },
        {
            label: "Cultures",
            link: "/CreateClan", 
            icon: FaRegListAlt,
            roles: 'contributor',
        },
        // {
        //     label: "Contributions",
        //     link: "/contributions",
        //     icon: FaPlusSquare,
        //     roles: ['administrator', 'contributor'],
        // },
        // {
        //     label: "Contributors",
        //     link: "/contributors",
        //     icon: FaUsers,
        //     roles: ['administrator', 'contributor'],
        // },
        // {
           
        //     link: "/Dashboard",
        //     icon: FaChartLine,
        //     roles: ['administrator']
        // },
        // {
        //     label: "More",
        //     link: "/more",
        //     icon: FaEllipsisH,
        //     roles: ['administrator']
        // },
    ],
};
