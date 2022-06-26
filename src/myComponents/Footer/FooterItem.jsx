import React from 'react';
import style from "./FooterItem.module.css";

function FooterItem(props) {
    return(
        <figure className={style.footer__Item}>
            <img src="./../../../New template/Icons png/Geoposition.png"/>
            <figcaption>Объекты</figcaption>
        </figure>
    )
}

export default FooterItem;