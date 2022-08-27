import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";

import style from "./Footer.module.css";

// Import svg icons, cause, there are only 6 of them
import {ReactComponent as Organization} from './../../Images/Icons/organization.svg';
import {ReactComponent as Worker} from './../../Images/Icons/worker.svg';
import {ReactComponent as Photo} from './../../Images/Icons/photo.svg';
import {ReactComponent as Message} from './../../Images/Icons/message.svg';
import {ReactComponent as Calc} from './../../Images/Icons/calc.svg';
import {ReactComponent as Graph} from './../../Images/Icons/graph.svg';

const icons = [[Organization, "Подрядчики", 'contractors'], [Worker, "Рабочие", 'workers'], [Photo, "Фото-ОСК", 'gallery'], [Message, "Прорабы"], [Calc, "Кальк-р"], [Graph, "ПТО"]];

function Footer(props) {
    const location = useLocation();
    useEffect(() => {}, [location]);

    return (
        <nav className={`${style.footer__nav}`}>
            {icons.map(item => {
                const Svg = item[0];
                return <Link to={`${item[2]}/${getTopMenuItem()}`}> <Svg/><span>{item[1]}</span> </Link>
            })}
        </nav>
    )
}

function getTopMenuItem() {
    return window.location.pathname.split('/')[2];
}

export default Footer;