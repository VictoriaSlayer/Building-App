import React from 'react';
import style from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';
import MyComponent from './myComponent.jsx';

function Header(props){
    return (
        <header className={style.header}>
            <MyComponent/>
            {/* <DropdownMenu dropdown={props.dropdown}/> */}
        </header>
    )
}

export default Header;