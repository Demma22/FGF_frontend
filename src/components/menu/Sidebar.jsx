import { menuData } from "./menuData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createStyles, Navbar, Group, Code, getStylesRef, rem } from '@mantine/core';

import {
    FaCog,
    FaSignOutAlt,
} from 'react-icons/fa';

const useStyles = createStyles((theme) => ({
    navbar: {
        fontFamily: '"Jost", sans-serif',
    },

    navbarContainer: {
        height: '100vh',
        overflowY: 'auto',
    },

    version: {
        fontFamily: '"Outfit", sans-serif',
        backgroundColor: 'green',
        color: theme.white,
        fontWeight: 700,
    },

    header: {
        fontFamily: '"Poppins", sans-serif',
        marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    },

    footer: {
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
    },

    link: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: theme.white,
        cursor: 'pointer',
        borderRadius: theme.radius.sm,
        // fontWeight: 500,
        // fontFamily: '"Outfit", sans-serif',
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '14px',

        '&:hover': {
            // backgroundColor: 'green',
        },
    },

    linkIcon: {
        // ref: getStylesRef('icon'),
        color: theme.white,
        opacity: 0.75,
        marginRight: 15,
        fontSize: '14px',
    },
}));


export function Sidebar() {
    const { classes, cx } = useStyles();
    const userRole = 'administrator';

    const location = useLocation();

    const allowedMenuItems = menuData.admin.filter(item => item.roles.includes(userRole));

    const toggleActiveClassStyle = (current_path) =>
        current_path === location.pathname
            ? " my-1 w-full font-medium relative bg-white/10"
            : " my-1 w-full font-medium relative";

    // TODO: Allow for toggling
    // const [toggleMenu, setToggleMenu] = useState(true);
    // const [toggleMenu, setToggleMenu] = useLocalStorage("toggleMenu", true);

    const links = allowedMenuItems.map((item, index) => (
        <li
            className={cx(classes.link, toggleActiveClassStyle(item.link))}
            key={item.label}
            style={
                index % 2 === 1 // Apply the border only for odd indexes (0-based)
                    ? { borderColor: '#002800', borderWidth: '1px', borderStyle: 'solid' }
                    : {}
            }
        >
            <Link
                to={item.link}
                className={`${classes.link} w-full px-5 py-3 hover:bg-[#012904] ${item.link === location.pathname ? 'text-[#fff]' : 'text-[#ccc]'}`}
            >
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span className="text-md">{item.label}</span>
            </Link>
        </li>
    ));


    return (
        <Navbar width={{ sm: 250 }} className={`${classes.navbarContainer} px-2 py-2 bg-[#002200] text-white`}>
            
            <Navbar.Section className="flex-grow">
                <Group className={`${classes.header} border-b border-b-[#23A74C]/10 `} position="apart">
                    <header className="p-2 flex gap-2 items-center">
                        <img src="/imgs/logo.png" alt="" className="w-20"/>
                        <h1 className="f text-lg">FGF</h1> 
                    </header>
                    <Code className={classes.version}>v1.0.0</Code>
                </Group>

                {links}
            </Navbar.Section>

            <Navbar.Section className={`${classes.footer} border-t border-[#23A74C]/10`}>
                {userRole === "administrator" && (
                    <li
                        className={`${classes.link} font-medium w-full px-5 py-3 hover:bg-[#012904] text-[#fff]' toggleActiveClassStyle(item.link)`}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/settings');
                        }}
                    >
                        <FaCog className={classes.linkIcon} stroke={1.5} />
                        <span>Settings</span>
                    </li>
                )}

                {/* <li
                    className={`${classes.link} font-medium w-full px-5 py-3 hover:bg-[#012904] text-[#fff]' border border-[#002800]`}
                    onClick={(event) => {
                        event.preventDefault();
                        signOut();
                        navigate('/login');
                    }}
                >
                    <FaSignOutAlt className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </li> */}

                    <li
                        className={`${classes.link} font-medium w-full px-5 py-3 hover:bg-[#012904] text-[#fff]' border border-[#002800]`}
                        onClick={(event) => {
                            event.preventDefault();
                            signOut();
                            navigate('/login');
                        }}
                    >
                        <FaSignOutAlt className={classes.linkIcon} stroke={1.5} />
                        <span>Create Account</span>
                    </li>
            </Navbar.Section>

        </Navbar>
    );
}