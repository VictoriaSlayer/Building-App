import React from 'react';
import style from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';
class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            choosenId: 0,
        };
    }

    clickedItem = (id) =>{
        if(this.state.opened === true){
            this.setState(state => ({
                choosenId: id,
            }));
        }
        this.setState(state => ({
            opened: !state.opened
        }));
    }

    render(){
        // преобразовываем данные с пропсов в массив и маппим их после
        const dataObject = this.props.data.data;
        console.log(dataObject);
        const dropdownObjects = [];
        if(this.state.opened === false){
            dropdownObjects.push(dataObject[this.state.choosenId].dropdownmenu);
        }
        else{
            dropdownObjects.push(dataObject[this.state.choosenId].dropdownmenu);
            for(let i in dataObject){
                dropdownObjects.push(dataObject[i].dropdownmenu);
            }
        }

        const dropdownStrings = dropdownObjects.map((item, index) => {
            return (
                <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links}/>
            );
        });

        return (
            <div className = {style.DropdownMenu}>
                {dropdownStrings}
            </div>
        )
    }
}

export default DropdownMenu;