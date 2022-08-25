import React from 'react';
import style from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';
class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            chosenId: 0,
        };
    }

    clickedItem = (id) =>{
        if(this.state.opened === true){
            this.setState(state => ({
                chosenId: id,
            }));
        }
        this.setState(state => ({
            opened: !state.opened
        }));
    }

    render(){
             // преобразовываем данные с пропсов в массив и маппим их после
            const dataObject = this.props.data;
            const dropdownObjects = [];

            if(this.state.opened === false){
                dropdownObjects.push(dataObject[this.state.chosenId]);
            }
            else{
                dropdownObjects.push(dataObject[this.state.chosenId]);
                for(let i in dataObject){
                    dropdownObjects.push(dataObject[i]);
                }
            }

            let dropdownComponents = dropdownObjects.map((item, index) => {
                return (
                    <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={item} clicked={this.clickedItem} id = {item.id} link = {item.link} quotes={index === 0 ? ">" : "" } />
                    );
                });

            return (
                <div className = {style.DropdownMenu}>
                    {dropdownComponents}
                </div>
            )
        }
    }


export default DropdownMenu;