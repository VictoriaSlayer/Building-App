import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import CompaniesHeader from './CompaniesHeader';
import MainCompany from './MainCompany';
import styles from "./Companies.module.css";

function Test(){
    return(
        <div>123123</div>
    )
}
class Companies extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let linksArray = this.props.companiesData.map(item =>
            <Link to={item.link} className={styles.link}>
                <MainCompany
                    companyType={item.companyType}
                    companyName={item.companyName}
                    contacts={item.contacts}
                    tasks={item.tasks}
                    />
            </Link>
        );

        let routesArray = this.props.companiesData.map(item => <Route path={item.link} element={<Test/>}></Route>);

            return(
            <>
                <CompaniesHeader/>
                <div className={styles.companiesBody}>
                    {linksArray}
                </div>
                <Test/>
                <Routes>
                    {routesArray}
                </Routes>
            </>
        )
    }
}
export default Companies;