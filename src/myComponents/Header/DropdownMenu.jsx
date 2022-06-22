import React from 'react';
import classes from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';

function DropdownMenu(props){
    return (
        <div>
            {props.dropdown.map(item => (
                <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery}/>
            ))}
        </div>
    )
}

export default DropdownMenu;