import React from 'react';
import classes from './DropdownMenu.module.css';
import DropdownMenuItem from './DropdownMenuItem.jsx';

function DropdownMenu(props){
    let array = document.querySelector(`.${classes.MenuItem}`);
    console.log(array);
    return (
        <div>
            <DropdownMenuItem name='ЖК Архитектор' address='ул. Академика Волгина, 2А, Москва, 119421' objectDelivery='4 квартал 2023'/>
            <DropdownMenuItem name='ЖК Сидней' address='ул. Шеногина, вл. 2, Москва, 119421' objectDelivery='1 квартал 2023'/>
            <DropdownMenuItem name='ЖК Режиссер' address='ул. Вильгельма Пика, вл. 3, Москва, 119421' objectDelivery='4 квартал 2023'/>
            <DropdownMenuItem name='ЖК Сидней' address='ул. Варшавское шоссе, 37А/1, Москва, 119421' objectDelivery='1 квартал 2025'/>
        </div>
    )
}

export default DropdownMenu;