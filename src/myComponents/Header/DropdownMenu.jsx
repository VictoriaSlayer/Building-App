import React from 'react';
import classes from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';
class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        // преобразовываем данные с пропсов в массив и маппим их после
        const dataObject = this.props.data.data;
        const dropdownObjects = [];
        for(let i in dataObject){
            dropdownObjects.push(dataObject[i].dropdownmenu);
        };

        const dropdownStrings = dropdownObjects.map((item, index) => {
            return (
                <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} visibility = {index == 0 ? "visible" : "hidden"} />
            );
        });
        return (
            <div>
                {dropdownStrings}
            </div>
        )
    }
}

export default DropdownMenu;