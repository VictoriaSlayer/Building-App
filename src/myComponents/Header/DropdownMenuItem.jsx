import React from 'react';
import style from './DropdownMenuItem.module.css';

function DropdownMenuItem(props){
    return (
        <div className={style.DropdownMenuItem}>
            <div className={`${style.active__Object} ${style.active__ObjectName}`} >
                {props.name} <span className={`${style.active__Objec} ${style.active__ObjectArrow}`}>{`>`}</span>
            </div>
            <div className={`${style.active__Object} ${style.active__ObjectAddress}`}>
                {props.address}
            </div>
            <div className={`${style.active__Object} ${style.active__ObjectDelivery}`}>
                планируемая сдача: {props.objectDelivery}
            </div>
        </div>
    )
}

export default DropdownMenuItem;