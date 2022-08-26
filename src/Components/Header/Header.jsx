import React, {useEffect} from 'react';
import style from './Header.module.css';
import DropdownMenu from './DropdownMenu.jsx';
import {useLocation} from "react-router-dom";

function Header(props){
    const location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <header className={style.header}>
            <DropdownMenu data={props.data}/>
        </header>
    )
}

export default Header;