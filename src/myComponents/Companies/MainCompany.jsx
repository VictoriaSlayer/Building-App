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
        let givenSumWidth = `${this.props.givenSum/this.props.allSum*100}%`;
        console.log(typeof(givenSumWidth));
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
                <div className={styles.money} onClick = {this.dropdownClick}>Финансы <span className={styles.bracket}>{`>`}</span>
                    <div className={`${styles.moneyContracts} ${this.state.display ? styles.active: styles.hidden}`}>

                        <div className={styles.moneyHeader}>Контракт:</div>
                        <div className={`${styles.allMoney} ${styles.sum}`}>
                            <span>Всего {this.props.allSum}р.</span>
                            <span>100%</span>
                        </div>
                        <div className={`${styles.giveny} ${styles.sum}`}>
                            <span>Всего {this.props.givenSum}р.</span>
                            <span>{this.props.givenSum/this.props.allSum*100}%</span>
                            <div style={{position: 'absolute', width: `${givenSumWidth}`, height:'100%', top:"0px", left:"0px", content:"qwertyyy", backgroundColor:"#3b82f6", zIndex:"-1"}} >
                            </div>
                        </div>
                        <div className={styles.moneyFeedback}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MainCompany;