import React from 'react';
import classes from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';

function Header(props){
    console.log(classes.qwerty);
    return (
        <header className={classes.header}>
            <DropdownMenu/>
            {classes.qwerty}
        </header>
    )
}

export default Header;