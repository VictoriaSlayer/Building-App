import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import styles from "./CompaniesHeader.module.css";
import Customer from './CompaniesTypes/Customer';
import Designer from './CompaniesTypes/Designer';
import Contractor from './CompaniesTypes/Contractor';


class CompaniesHeader extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.companiesHeader}>
                <Link className={styles.companiesTypes} to="customer">Заказчик</Link>
                <Link className={styles.companiesTypes} to="designer">Проектанты</Link>
                <Link className={styles.companiesTypes} to="contractor">Подрядчики</Link>
                <Routes>
                    <Route path="customer" element={<Customer/>}/>
                    <Route path="customer" element={<Designer/>}/>
                    <Route path="customer" element={<Contractor/>}/>
                </Routes>
            </div>
        )
    }
}

export default CompaniesHeader;