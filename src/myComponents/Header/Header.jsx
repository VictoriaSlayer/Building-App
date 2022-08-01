import React from 'react';
import style from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';

function Header(props){

    return (
        <header className={style.header}>
            {/* <MyComponent/> */}
            <DropdownMenu data={props.data}/>
        </header>
    )
}

export default Header;