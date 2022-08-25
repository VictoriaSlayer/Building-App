import React from 'react';
import styles from "./Designer.module.css";

class Designer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.companiesHeader}>
                Проектировщик
            </div>
        )
    }
}

export default Designer;