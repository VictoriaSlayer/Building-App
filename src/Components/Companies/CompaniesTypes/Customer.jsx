import React from 'react';
import styles from "./Customer.module.css";

class Customer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.companiesHeader}>
                Заказчик
            </div>
        )
    }
}

export default Customer;