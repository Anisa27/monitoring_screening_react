import './style.css'
import React from 'react';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SidebarMenu =()=>{
    return(
        <>
        <Sidebar>
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
            <MenuItem component={<Link to='/'/>}> Dashboard </MenuItem>
            <SubMenu label="Monitoring Screening">
            <MenuItem component={<Link to='/sc1'/>}> Screening 1 </MenuItem>
            <MenuItem component={<Link to='/sc2'/>}> Screening 2 </MenuItem>
            <MenuItem component={<Link to='/sc3'/>}> Screening 3 </MenuItem>
            </SubMenu>
        </Menu>
        </Sidebar>
        </>
        
    )
}

export default SidebarMenu;