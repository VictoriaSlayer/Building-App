import React from 'react';
import style from "./Footer.module.css";
import FooterItem from "./FooterItem.jsx";
function Footer(props) {
    return(
        <footer className={style.footer}>
            <FooterItem/>
        </footer>
    )
}

export default Footer;