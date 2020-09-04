import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../../assets/img/logo.png';

const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <img src={ logo } alt="logo" width="64" height="64"></img>
            &nbsp; &nbsp;
            <h1>Crypto App</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';

export default Header;