import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CreateAnimal from './CreateAnimal';
import Animal from './Animal';
import CreatePlant from './CreatePlant';
import CreateClan from '../pages/Culture/CreateClan';
import { Link } from 'react-router-dom';

export default function Admin() {
    return (

        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Categories">
                        <MenuItem> Plants </MenuItem>

                        <MenuItem component={<Link to="/CreateAnimal" />}> Animals </MenuItem>

                        <MenuItem> Cultures </MenuItem>
                    </SubMenu>
                    <SubMenu label="Reports">
                        <MenuItem> Contributions </MenuItem>
                        <MenuItem> Charts </MenuItem>
                        <MenuItem> Download </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}
