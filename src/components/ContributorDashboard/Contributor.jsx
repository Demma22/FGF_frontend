import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CreateAnimal from './CreateAnimal';
import Animal from './Animal';
import CreatePlant from './CreatePlant';
import CreateClan from '../pages/Culture/CreateClan';
import { Link } from 'react-router-dom';

export default function Contributor() {
    return (

        <>
            <Sidebar>
                <Menu>
                    <SubMenu label="Categories">
                        <MenuItem component={<Link to="/CreateAnimal" />}> Plants </MenuItem>

                        <MenuItem component={<Link to="/CreateAnimal" />}> Animals </MenuItem>

                        <MenuItem component={<Link to="/CreateAnimal" />}> Cultures </MenuItem>
                    </SubMenu>
                    <SubMenu label="Reports">
                        <MenuItem> Contributions </MenuItem>                    
                        <MenuItem> Download </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>
        </>
    )
}
