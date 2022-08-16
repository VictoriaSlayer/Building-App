import React from 'react';
import styles from './MainCompany.module.css';

class MainCompany extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: false,
        }
    }

    dropdownClick = () => {
        this.setState(state => ({
            display: !this.state.display
        }))
    }

    render(){

        let tasks = [];
        if(this.props.tasks.length != 0){
            this.props.tasks.map(item => tasks.push(<p>{item}</p>));
        }

        return(
            <div className={styles.companyContainer}>
                <div className={styles.logo}>
                    {/* Изображения заглушки, по дефолту все ФСК, и одна МСУ для разнообразия */}
                    {this.props.companyName === "АО МСУ-1" ? <img src="./Companies Logo/MSU.png"/> : <img src="./Companies Logo/FSK1.png"/>}
                </div>
                <div className={styles.companyInfo}>
                    <p className={styles.companyType}>{this.props.companyType}</p>
                    <p className={styles.companyName}>{this.props.companyName}</p>
                    <p className={styles.companyContacts}>{this.props.contacts}</p>
                </div>
                <div className = {styles.companyTasks}>
                    {tasks}
                </div>
                {/* тут */}
                <div onClick = {this.dropdownClick}>Финансы
                    <div className={`${styles.contracts} ${this.state.display ? styles.active: styles.hidden}`}>Контракты:</div>
                </div>
            </div>
        )
    }
}
export default MainCompany;