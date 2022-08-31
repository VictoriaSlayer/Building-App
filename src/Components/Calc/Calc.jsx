import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Calc.module.css";

// TODO: ОТРЕФАКТОРИТЬ ВСЕ НАХРЕН

class Calc extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            area: 0,
            subtractedCount: 3,
        }
    }

    calcArea = () => {
        let calc = ReactDOM.findDOMNode(this);
        let perimeter = calc.getElementsByClassName(styles.perimeter)[0].value;
        let area = perimeter * 3.5;
        let floorNumber = calc.getElementsByClassName(styles.floorNumber)[0].value;
        let subtractedAreas = calc.getElementsByClassName(styles.subtracted__select);
        let subtractedQuantity = calc.getElementsByClassName(styles.subtracted__selectQuantity);
        let subtractedSum = 0;
        for(let i = 0; i < subtractedAreas.length; i++) {
            subtractedSum += subtractedAreas[i].value * subtractedQuantity[i].value;
        }
        this.setState(state => ({
            area: (area - subtractedSum) * floorNumber,
        }));
    }

    addSubArea = () => {
        this.setState(state => ({
            subtractedCount: state.subtractedCount + 1,
        }));
    }

    render(){
        return (
           <div className={styles.calc__body}>

                <h1 className={styles.calc__header}>Калькулятор расчета площади</h1>
                <div className={styles.calc__chooseBlock}>
                    <div className={`${styles.text} ${styles.leftBlock}`}>Выберите корпус</div>
                    <div className={`${styles.choose__address} ${styles.rightBlock}` }>
                        <select name="" id="address" className={`${styles.address}`}>
                            <option value="Corp1">Корпус 1</option>
                            <option value="Corp2">Корпус 2</option>
                            <option value="Corp3">Корпус 3</option>
                        </select>
                    </div>
                </div>

                <div className={styles.calc__finishingType}>
                    <h2 className={`${styles.calc__finishingHeader} ${styles.leftBlock}`}>Тип отделки</h2>
                    <div className={styles.choose__finishing}>
                        <select className={`${styles.finishing__type__select} ${styles.leftBlock}`}>
                            <option value="plastering">Оштукатуривание</option>
                            <option value="facing">Облицовка</option>
                            <option value="warming">Утепление</option>
                        </select>
                    </div>
                    <div className={styles.input__container}>
                        <div className={`${styles.perimeterHeader} ${styles.leftBlock}`}>Периметр</div>
                        <div className={`${styles.input__meters} ${styles.rightBlock}`}>
                            <input className={styles.perimeter} type="number" onChange={this.calcArea}/>
                        </div>
                    </div>
                    <div className={styles.input__container}>
                        <div className={`${styles.floors} ${styles.leftBlock}`}>Этажи</div>
                        <div className={`${styles.input__floors} ${styles.rightBlock}`}>
                            <input className={styles.floorNumber} type="number" onChange={this.calcArea}/>
                        </div>
                    </div>

                </div>

            {/* <!-- Subtracted area --> */}

                <div className={styles.subtracted__area}>
                    <h2 className={styles.subtracted__header}>Вычитаемая площадь</h2>
                    {Array(this.state.subtractedCount).fill(0).map(item => (
                        <div className={styles.subtracted__container}>
                            <div className={`${styles.subtracted__opening} ${styles.leftBlock}`}>
                                <select id="subtracted__select" className={styles.subtracted__select} onChange={this.calcArea}>
                                    <option value="3.3108">OП-201(1,78x1,86)</option>
                                    <option value="2.2428">OП-214(1,78x1,26)</option>
                                    <option value="2.475">ДСВ-2(2,25x1,1)</option>
                                    <option value="2.4725">ДСВ-3(2,15x1,15)</option>
                                    <option value="2.322">ДСВ-4(2,15х0,8)</option>
                                    <option value="2.25">ДСВ-6(2,25х1)</option>
                                    <option value="4.165">БП-201(2,45х1,7)</option>
                                    <option value="3.43">БП-202(2,45х1,4)</option>
                                    <option value="1.9125">Д-2(2,25х0,85)</option>
                                    <option value="2.1375">Д-3(2,25х0,95)</option>
                                </select>
                            </div>
                            <div className={`${styles.subtracted__input} ${styles.rightBlock}`}>
                                <input type="number" className={styles.subtracted__selectQuantity} onChange={this.calcArea}/>
                            </div>
                        </div>
                    ))}
                    <button className={`${styles.add__subtracted} ${styles.leftBlock}`} onClick={this.addSubArea}>Вычесть еще</button>
                    <div className={styles.result}>Итоговая площадь составила <span>{this.state.area.toFixed(2)}</span>м<sup>2</sup></div>
                </div>
           </div>
        )
    }
}

export default Calc;