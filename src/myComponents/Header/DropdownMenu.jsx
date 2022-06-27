import React from 'react';
import classes from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';
class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                {this.props.dropdown.map((item, index) => (
                    <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index}/>
                ))}
            </div>
        )
    }
}

export default DropdownMenu;