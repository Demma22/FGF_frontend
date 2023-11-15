// import { Sidebar } from "../menu/Sidebar";
import { Header } from "../Header";
import { Header2 } from "../Header2";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import "./index.css"

export function Layout2({ children }) {


    return (
        
        // <main className="flex w-screen h-screen items-center justify-between outline fixed">
        <main className="flex w-screen h-screen items-start justify-start fixed top-0 left-0">
            {/* <Sidebar /> */}
            <section className="w-30 min-h-screen pt-100 bg-[#F4F4F5]">
            {/* <Sidebar className="bg-[#044225]" > */}
            <Sidebar className="bg-[#044225]" >
                <Menu
                menuItemStyles={{
                    button: {
                      // the active class will be added automatically by react router
                      // so we can use it to style the active menu item
                      [`&.active`]: {
                        backgroundColor: '#13395e',
                        color: '#b6c8d9',
                      },
                    },
                  }}
                  >
                    {/* <SubMenu label="Categories" className="bg-[#044225] text-white"> */}
                    <SubMenu label="Categories" className="bg-[#044225] text-white">
                        <MenuItem className="text-black"> Plants </MenuItem>
                        
                        <MenuItem className="text-black"> Animals </MenuItem>
                        
                        <MenuItem className="text-black"> Cultures </MenuItem>
                    </SubMenu>
                    <SubMenu label="Reports" >
                        <MenuItem className="text-black"> Contributions </MenuItem>
                        <MenuItem className="text-black"> Charts </MenuItem>
                        <MenuItem className="text-black"> Download </MenuItem>
                    </SubMenu>
                    <MenuItem> Creat Account </MenuItem>
                    
                </Menu>
            </Sidebar>
            </section>
            

            <section className="w-full min-h-screen bg-[#F4F4F5]">

                
                <Header2 />
                <section className="px-30 py-10 text-[#434C50] h-[calc(100vh-70px-2rem)] overflow-y-scroll rounded-sm mx-7 my-2">{children}</section>
            </section>

            
        </main>
    );
}
