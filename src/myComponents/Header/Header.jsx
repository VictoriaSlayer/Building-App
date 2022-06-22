import React from 'react';
import style from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';

function Header(props){
    return (
        <header className={style.header}>
            <DropdownMenu dropdown={props.dropdown}/>
        </header>
    )
}

export default Header;