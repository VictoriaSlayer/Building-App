import React from 'react';
import styles from "./Contractor.module.css";

class Contractor extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.companiesHeader}>
                Субподрядчик
            </div>
        )
    }
}

export default Contractor;