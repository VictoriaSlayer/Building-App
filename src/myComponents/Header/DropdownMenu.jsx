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

            // По дефолту поведение компонента DropdownMenuItem рендерит все остальные компоненты, которые мы передаем ему через пропсы, что не очень хорошо с точки зрения производительности. Поэтому придумал заглушку в виде ListDropdownMenuItem, которая отрисовывает те же дропдауны, но не отрисовывает все остальные элементы.
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
                    // Оставляем кавычку только в первой менюшке дропдауна и убираем во всех остальных
                    return index === 0 ?
                        (<ListDropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links} quotes=">"/>):
                        (<ListDropdownMenuItem name={item.name} address={item.address} objectDelivery={item.objectDelivery} key={index} clicked={this.clickedItem} id = {item.id} links = {item.links} quotes=""/>);
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