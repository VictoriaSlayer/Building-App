import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import style from "./Footer.module.css";
import FooterItem from "./FooterItem.jsx";

import {ReactComponent as Organization} from './../../Images/Icons/organization.svg';
import {ReactComponent as Worker} from './../../Images/Icons/worker.svg';
import {ReactComponent as Photo} from './../../Images/Icons/photo.svg';
import {ReactComponent as Message} from './../../Images/Icons/message.svg';
import {ReactComponent as Calc} from './../../Images/Icons/calc.svg';
import {ReactComponent as Graph} from './../../Images/Icons/graph.svg';

const iconsArray = ["Organization", "Worker", "Photo", "Message", "Calc", "Graph"];

function Footer(props) {
    return(
        <BrowserRouter>
            {/* <div className={style.footer}>
                <FooterItem/>
                <Graph/>
            </div> */}
            {iconsArray.map(item => {
                // console.log(`${item}`);
                 return `<Link><${item}/></Link>`
            })}
            <Graph/>
        </BrowserRouter>
    )
}

export default Footer;