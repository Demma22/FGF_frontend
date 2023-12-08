import {
    FaRegListAlt,
    FaPlusSquare,
    FaChartLine,
    // FaUsers,
    
    // FaEllipsisH,
} from 'react-icons/fa';

export const menuDataAdmin = {
    admin: [
        {
            label: 'Admin',
            link: "/AdminDashboard",
            icon: FaChartLine,
            roles: 'administrator'
        },

        {
            label: "Animals",
            link: "/Animal",
            icon: FaRegListAlt,
            roles: 'administrator',
        },
        {
            label: "Plants",
            link: "/Plant",
            icon: FaPlusSquare,
            roles:'administrator',
        },
        {
            label: "Cultures",
            link: "/CreateClan", 
            icon: FaRegListAlt,
            roles: 'administrator',
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
           
 
        // {
        //     label: "More",
        //     link: "/more",
        //     icon: FaEllipsisH,
        //     roles: ['administrator']
        // },
    ],
};
