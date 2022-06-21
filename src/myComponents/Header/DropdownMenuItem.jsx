import React from 'react';
import classes from './DropdownMenuItem.module.css';

function DropdownMenuItem(props){
    return (
        <li className={classes.active}>
            {props.name}
        </li>
    )
}

export default DropdownMenuItem;