import React from 'react';
import ReactDOM from "react-dom";
import styles from './CompletedWork.module.css';
import {Link as div} from 'react-router-dom';

class CompletedWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenEmployee: "master",
        }
    }

    selectEmployee = () =>{
        let rootNode = ReactDOM.findDOMNode(this);
        let selected = rootNode.getElementsByClassName(styles.chosen__employee)[0].value;
        this.setState(state => ({
            chosenEmployee: selected,
        }));
    }

    render(){
        const workTypes = [
            ["Оштукатурил К3, 12 этаж, 29.08.22"],
            ["Оштукатурил К2, 14 этаж, 13.08.22"],
            ["К2, проложил кабель по АПС техэтаж +5,480"],
            ["К1, С2, выполнил кладку в МОПе с 9 по 17 этаж"],
            ["К3, С1, С2, этаж 12, 13, осуществил монтаж вентиляции"],
            ["К3, С1-3, этаж 5-9, проложил кабель по всем ЭОМ/СС в МОПе"],
            ["Оштукатурил К3, 21 типовой этаж"],
            ["К1, -1 этаж, закончил монтаж контура заземления"],
        ];
        const coloredWork = {
            master: ["#8dbe8d", "#8dbe8d", "#8dbe8d", "#e8e8a7" ,"#ff7575", "#8dbe8d", "#e8e8a7", "#8dbe8d"],
            osk: ["#8dbe8d", "#e8e8a7", "#e8e8a7", "#e8e8a7" ,"#ff7575", "#8dbe8d", "#e8e8a7", "#8dbe8d"],
            pto: ["#8dbe8d", "#8dbe8d", "#8dbe8d", "#e8e8a7" ,"#8dbe8d", "#8dbe8d", "#ff7575", "#ff7575"],
            tehnadzor: ["#ff7575", "#ff7575", "#8dbe8d", "#e8e8a7" ,"#ff7575", "#8dbe8d", "#ff7575", "#ff7575"],
        }

        return(
            <div className={styles.completedWork__container}>
            <div className={`${styles.controllers}`}>
                <select id="subtracted__select" className={styles.chosen__employee} onChange={this.selectEmployee}>
                    <option value="master">Прораб</option>
                    <option value="osk">ОСК</option>
                    <option value="pto">ПТО</option>
                    <option value="tehnadzor">Технадзор</option>
                </select>
            </div>
            {workTypes.map((item, index) => (
                <div style={{backgroundColor:coloredWork[this.state.chosenEmployee][index]}} className={`${styles.finished__work}`}>{item}</div>
            ))}
            <div className={styles.note}>Пояснение</div>
            <div className={`${styles.green} ${styles.example}`}>Работа готова</div>
            <div className={`${styles.yellow} ${styles.example}`}>Необходимы исправления</div>
            <div className={`${styles.red} ${styles.example}`}>Необходимо переделывать</div>
        </div>
        )
    }
}

export default CompletedWork;