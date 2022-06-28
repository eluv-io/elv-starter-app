import React from 'react';
import { AppBar, Toolbar} from '@material-ui/core';
import { Link, NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ totalItems }) => {


    const resolution = window.innerWidth;
    const isMobile = resolution >= 320 && resolution <= 480;


    return (
        <AppBar position="fixed" className="appBar" color="inherit">
            <Toolbar className="navbar" >

                <NavLink to = '/'><p className='navbar-links'>Home</p></NavLink>
                <NavLink to = '/components'><p className = 'navbar-links'>Components</p></NavLink>


            </Toolbar>
        </AppBar>
    )
}

export default Navbar