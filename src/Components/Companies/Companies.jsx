import React from 'react';
import {useParams} from "react-router-dom";
import CompaniesHeader from './CompaniesHeader';
import MainCompany from './MainCompany';
import styles from "./Companies.module.css";

function Companies(props) {
    let {complex} = useParams();
    return (<>
            <CompaniesHeader/>
            <div className={styles.companiesBody}>
                {props.data[complex].mainCompanies.map(item =>
                    <MainCompany
                        companyType={item.companyType}
                        companyName={item.companyName}
                        contacts={item.contacts}
                        tasks={item.tasks}
                        allSum={item.allSum}
                        givenSum={item.givenSum}
                        closedSum={item.closedSum}
                        management={item.management}
                    />
                )}
            </div>
        </>)
}

export default Companies;