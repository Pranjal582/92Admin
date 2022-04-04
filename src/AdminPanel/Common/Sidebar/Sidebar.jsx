import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link, useNavigate } from 'react-router-dom';
import GavelIcon from '@mui/icons-material/Gavel';

//icons from react icons



const Sidebar = (props) => {
        
    const removeToken = (token) => {
        localStorage.clear();     
    };

    const navigate = useNavigate();
    return (
        <>
            <div className="sidebar_in_mobile_view">
                <ProSidebar collapsed={props.isloading}>
                    <Menu iconShape="circle">    
                    <MenuItem title="DashBord" onClick={() => navigate("/dashbord")} icon={<DashboardTwoToneIcon />}>Dashboard</MenuItem>
                    <MenuItem title="Agreement" onClick={() => navigate("/agreement")} icon={<GavelIcon />}> Aggrements </MenuItem>
                    <MenuItem title="Order" onClick={() => navigate("/order-list")} icon={<LocalMallOutlinedIcon />}> Order </MenuItem>
                    <MenuItem title="Users" onClick={() => navigate("/users")} icon={<AccountCircleOutlinedIcon />}>Users </MenuItem>
                    <MenuItem title="Contact" onClick={() => navigate("/contact")} icon={<ContactMailOutlinedIcon />}>Contact </MenuItem>
                    <SubMenu title="Setting" icon={<SettingsOutlinedIcon />}>   
                        <Link to='/'>
                            <MenuItem onClick={removeToken}>Logout</MenuItem> 
                        </Link>                         
                    </SubMenu>
                    </Menu>
                </ProSidebar>
            </div>
        </>
    );
}

export default Sidebar;
