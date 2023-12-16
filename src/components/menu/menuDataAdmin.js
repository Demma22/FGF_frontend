import {
    FaRegListAlt,
    FaPlusSquare,
    FaChartLine,
    FaUser,
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
            link: "/CreateAnimalAdmin",
            icon: FaRegListAlt,
            roles: 'administrator',
        },
        {
            label: "Plants",
            link: "/CreatePlantAdmin",
            icon: FaPlusSquare,
            roles:'administrator',
        },
        {
            label: "Cultures",
            link: "/CreateCultureAdmin", 
            icon: FaRegListAlt,
            roles: 'administrator',
        },
        // {
        //     label: "Contributers",
        //     link: "/Users",
        //     icon: FaUser,
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
