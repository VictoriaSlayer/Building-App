import React from 'react';
import style from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';
import ListDropdownMenuItem from './ListDropdownMenuItem.jsx';
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
            const dropdownObjects = [];
            const dropdownLinks = [];

            if(this.state.opened === false){
                dropdownObjects.push(dataObject[this.state.choosenId].dropdownmenu);
                dropdownLinks.push(dataObject[this.state.choosenId].links);
            }
            else{
                dropdownObjects.push(dataObject[this.state.choosenId].dropdownmenu);
                for(let i in dataObject){
                    dropdownObjects.push(dataObject[i].dropdownmenu);
                    dropdownLinks.push(dataObject[i].links);
                }
            }

            // При открытом меню, состояние стейта меняется. И по дефолту поведение компонента DropdownMenuItem рендерит все остальное меню, что не очень хорошо с точки зрения производительности. Поэтому придумал заглушку в виде ListDropdownMenuItem
            let dropdownStrings = [];
            if(dropdownObjects.length === 1){
                dropdownStrings = dropdownObjects.map((item, index) => {
                    return (
                        <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links}/>
                        );
                    });
            }
            else{
                dropdownStrings = dropdownObjects.map((item, index) => {
                    return (
                        <ListDropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links}/>
                        );
                    });
            }

            return (
                <div className = {style.DropdownMenu}>
                    {dropdownStrings}
                </div>
            )

            // const dropdownStrings = dropdownObjects.map((item, index) => {
            //     return (
            //         <DropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links}/>
            //         );
            //     });

            // return (
            //     <div className = {style.DropdownMenu}>
            //         {dropdownStrings}
            //     </div>
            // )
        }
    }


export default DropdownMenu;