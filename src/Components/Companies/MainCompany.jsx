import React from 'react';
import styles from './MainCompany.module.css';

class MainCompany extends React.Component {
    constructor(props) {
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

    formatNumber(number) {
        if (number === undefined) {
            return null;
        }

        let string = number.toString();
        string = [...string].reverse();

        let result = [];
        string.map((item, index, array) => {
            if ((index % 3 === 0) && (index !== array.length) && (index !== 0)) {
                result.push(" ");
                result.push(item);
            } else {
                result.push(item);
            }
        });

        return result.reverse().join("");
    }

    render() {
        let allSum = this.formatNumber(this.props.allSum);
        let givenSum = this.formatNumber(this.props.givenSum);
        let givenSumWidth = this.props.givenSum / this.props.allSum * 100;
        let givenSumDiff = this.formatNumber(this.props.allSum - this.props.givenSum);
        let givenSumDiffPerMonth = this.formatNumber(Math.floor((this.props.allSum - this.props.givenSum) / 12));
        let percentageOpened = (100 - givenSumWidth).toFixed(2);
        let percentageClosed = (100 - percentageOpened).toFixed(2);
        let percentagePerMonth = (percentageOpened / 12).toFixed(2);


        // -----------------------------------------------
        let givenSum2 = this.formatNumber(this.props.givenSum - this.props.closedSum);
        let givenSumWidth2 = this.props.closedSum / this.props.givenSum * 100;

        return (
            <div className={styles.companyContainer}>
                <div className={styles.logo}>
                    {/* Изображения заглушки, по дефолту все ФСК, и одна МСУ для разнообразия */}
                    {this.props.companyName === "АО МСУ-1" ? <img src="/Companies Logo/MSU.png"/> :
                        <img src="/Companies Logo/FSK1.png"/>}
                </div>
                <div className={styles.companyInfo}>
                    <p className={styles.companyType}>{this.props.companyType}</p>
                    <p className={styles.companyName}>{this.props.companyName}</p>
                    <p className={styles.companyContacts}>{this.props.contacts}</p>
                </div>
                <div className={styles.companyTasks}>
                    {this.props.tasks && this.props.tasks.map(item => <p>{item}</p>)}
                </div>
                {/* тут */}
                <div className={styles.money} onClick={this.dropdownClick}>Финансы <span
                    className={styles.bracket}>{`>`}</span>
                    <div className={`${styles.moneyContracts} ${this.state.display ? styles.active : styles.hidden}`}>

                        <div className={styles.moneyHeader}>Контракт:</div>
                        <div className={`${styles.allMoney} ${styles.sum}`}>
                            <span>Всего {allSum}р.</span>
                            <span>100%</span>
                        </div>
                        <div className={`${styles.givenMoney} ${styles.sum}`}>
                            <span>Всего {givenSum}р.</span>
                            <span>{percentageClosed}%</span>
                            <div style={{
                                position: 'absolute',
                                width: `${givenSumWidth}%`,
                                height: '100%',
                                top: "0px",
                                left: "0px",
                                content: "qwertyyy",
                                backgroundColor: "#3b82f6",
                                zIndex: "-1"
                            }}>
                            </div>
                        </div>
                        <div className={styles.moneyFeedback}>До окончания строительства необходимо
                            выдать {`${percentageOpened}%`} или {`${givenSumDiff}р.`} и осмечивать
                            по {`${percentagePerMonth}%.`} или {`${givenSumDiffPerMonth}р.`}</div>
                    </div>

                    {/* ------------------------- */}
                    <div className={`${styles.moneyContracts} ${this.state.display ? styles.active : styles.hidden}`}>
                        <div className={styles.moneyHeader}>Осмечено:</div>
                        <div className={`${styles.allMoney} ${styles.sum}`}>
                            <span>Всего {givenSum}р.</span>
                            <span>100%</span>
                        </div>
                        <div className={`${styles.givenMoney} ${styles.sum}`}>
                            <span>Всего {this.formatNumber(this.props.closedSum)}р.</span>
                            <span>{givenSumWidth2.toFixed(2)}%</span>
                            <div style={{
                                position: 'absolute',
                                width: `${givenSumWidth2}%`,
                                height: '100%',
                                top: "0px",
                                left: "0px",
                                content: "qwertyyy",
                                backgroundColor: "#3b82f6",
                                zIndex: "-1"
                            }}>
                            </div>
                        </div>
                        <div className={styles.moneyFeedback}>До окончания строительства необходимо
                            выдать {`${100 - givenSumWidth2.toFixed(2)}%`} или {`${givenSum2}р.`} и осмечивать
                            по {`${((100 - givenSumWidth2) / 12).toFixed(2)}%.`} или {`148 506 921р.`}</div>
                    </div>
                    <div>Руководство <span className={styles.bracket}>{`>`}</span></div>
                </div>

            </div>
        )
    }
}

export default MainCompany;