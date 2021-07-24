import React from 'react';
import './Navbar.css';
import HomeIcon from '@material-ui/icons/Home'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar-container">
            <div className="navbar-left">
                <Link to="/">
                    <HomeIcon style={{fontSize: '40px'}} className="icon"/>
                </Link>
            </div>
            <div className="navbar-right">
                <Link to="/upload">
                    <AddBoxIcon style={{fontSize: '40px'}} className="icon"/>
                </Link>
                <Link to="/auth">
                    <AccountBoxIcon style={{fontSize: '40px'}} className="icon"/>
                </Link>
            </div>
        </nav>
    )
}
