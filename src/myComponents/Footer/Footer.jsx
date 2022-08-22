import React from 'react';
import {Routes, Route, Link} from "react-router-dom";

import style from "./Footer.module.css";

// Import svg icons, cause, there are only 6 of them
import {ReactComponent as Organization} from './../../Images/Icons/organization.svg';
import {ReactComponent as Worker} from './../../Images/Icons/worker.svg';
import {ReactComponent as Photo} from './../../Images/Icons/photo.svg';
import {ReactComponent as Message} from './../../Images/Icons/message.svg';
import {ReactComponent as Calc} from './../../Images/Icons/calc.svg';
import {ReactComponent as Graph} from './../../Images/Icons/graph.svg';

const iconsArray = [[Organization, "Подрядчики"], [Worker, "Рабочие"], [Photo, "Фото-ОСК"], [Message, "Прорабы"], [Calc, "Кальк-р"], [Graph, "ПТО"]];


function Footer(props) {
    return(
            <nav className={`${style.footer__nav}`}>
                {iconsArray.map(Item => {
                    const Svg = Item[0];
                    const navText = <span>{Item[1]}</span>;
                    return <Link to="/arhitector"><Svg/>{navText}</Link>
                })}
            </nav>
    )
}

export default Footer;