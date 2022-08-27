import React from 'react';
import ReactDOM from "react-dom";
import styles from "./Calc.module.css";

// TODO: ОТРЕФАКТОРИТЬ ВСЕ НАХРЕН

class Calc extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            area: 0,
            substructedCount: 3,
        }
    }

    calcArea = () => {
        let calc = ReactDOM.findDOMNode(this);
        let perimeter = calc.getElementsByClassName(styles.perimeter)[0].value;
        let area = perimeter * 3.5;
        let blockNumber = calc.getElementsByClassName(styles.blockNumber)[0].value;
        let substructedAreas = calc.getElementsByClassName(styles.subtracted__select);
        let substructedQuantity = calc.getElementsByClassName(styles.subtracted__selectQuantity);
        let substructedSum = 0;
        for(let i = 0; i < substructedAreas.length; i++) {
            substructedSum += substructedAreas[i].value * substructedQuantity[i].value;
        }
        this.setState(state => ({
            area: (area - substructedSum) * blockNumber,
        }));
    }

    addSubArea = () => {
        this.setState(state => ({
            substructedCount: state.substructedCount + 1,
        }));
    }

    render(){
        return (
           <div className={styles.calcBody}>

                <h1>Калькулятор расчета площади</h1>
                <div className={styles.choose__object}>
                    <div className={styles.text}>Выберите корпус</div>
                    <div className={styles.choose__address}>
                        <select name="" id="address" className={styles.address}>
                            <option value="Corp1">Корпус 1</option>
                            <option value="Corp2">Корпус 2</option>
                            <option value="Corp3">Корпус 3</option>
                        </select>
                    </div>
                </div>

                <div className={styles.finishing__type}>
                    <h2>Тип отделки</h2>
                    <div className={styles.choose__finishing}>
                        <select className={`${styles.finishing__type__select} block`}>
                            <option value="plastering">Оштукатуривание</option>
                            <option value="facing">Облицовка</option>
                            <option value="warming">Утепление</option>
                        </select>
                    </div>
                    <div className={styles.perimeterHeader}>Периметр</div>
                    <div className={styles.input__meters}>
                        <input className={styles.perimeter} type="number" onChange={this.calcArea}/>
                    </div>
                    <div className={styles.number__of__floors}>
                        <div className={styles.floors }>Этажи</div>
                        <div className={styles.input__floors}>
                            <input className={styles.blockNumber} type="number" onChange={this.calcArea}/>
                        </div>
                    </div>
                </div>

            {/* <!-- Subtracted square --> */}

                <div className={styles.subtracted__area}>
                    <h2>Вычитаемая площадь</h2>
                    {Array(this.state.substructedCount).fill(0).map(item => (
                        <div className={styles.substructed__container}>
                            <div className={styles.subtracted__opening}>
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
                            <div className={styles.subtracted__input}>
                                <input type="number" className={styles.subtracted__selectQuantity} onChange={this.calcArea}/>
                            </div>
                        </div>
                    ))}
                    <button className={styles.add__Substructed} onClick={this.addSubArea}>Вычесть еще</button>
                    <div className={styles.result}>Итоговая площадь составила <span>{this.state.area}</span>м2</div>
                </div>
           </div>
        )
    }
}

export default Calc;