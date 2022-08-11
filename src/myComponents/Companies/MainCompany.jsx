import React from 'react';
import styles from './MainCompany.module.css';

class MainCompany extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return(
            <div className={styles.container}>
                <div className={styles.logo}>
                    {/* Изображения заглушки, по дефолту все ФСК, и одна МСУ для разнообразия */}
                    {this.props.companyName === "АО МСУ-1" ? <img src="./Companies Logo/MSU.png"/> : <img src="./Companies Logo/FSK1.png"/>}
                </div>
                    <p className={styles.companyType}>{this.props.companyType}</p>
                    <p className={styles.companyName}>{this.props.companyName}</p>
                    <p className={styles.companyContacts}>{this.props.contacts}</p>
                    <p className={styles.companyTasks}>{this.props.tasks}</p>

            </div>
        )
    }
}
export default MainCompany;