import React from 'react';
import style from "./FooterItem.module.css";
import {ReactComponent as Svg} from './../../Images/Icons/organization.svg';

function FooterItem(props) {
    return(
        <figure className={style.footer__Item}>
            {/* <img src="./../../../New template/Icons png/Geoposition.png"/> */}
            <Svg className={style.svgColor}/>
            <figcaption>Объекты</figcaption>
        </figure>
    )
}

export default FooterItem;