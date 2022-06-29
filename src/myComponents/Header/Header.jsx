import React from 'react';
import style from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';
import MyComponent from './myComponent.jsx';

function Header(props){

    return (
        <header className={style.header}>
            {/* <MyComponent/> */}
            <DropdownMenu data={props.data}/>
        </header>
    )
}

export default Header;