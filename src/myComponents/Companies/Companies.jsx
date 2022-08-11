import React from 'react';
import CompaniesHeader from './CompaniesHeader';
import MainCompany from './MainCompany';
import styles from "./Companies.module.css";
class Companies extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let companiesArray = this.props.companiesData.map(item =>
            <MainCompany
                companyType={item.companyType}
                companyName={item.companyName}
                contacts={item.contacts}
                tasks={item.tasks}
            />
            );
        // console.log(mass);
        return(
            <>
                <CompaniesHeader/>
                <div className={styles.companiesBody}>
                    {companiesArray}
                </div>
                {/* <MainCompany/> */}
            </>
        )
    }
}
export default Companies;