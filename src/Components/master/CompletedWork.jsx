import React from 'react';
import ReactDOM from "react-dom";
import styles from './CompletedWork.module.css';
import {Link as div, Outlet} from 'react-router-dom';

class CompletedWork extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenEmployer: "master",
        }
    }
    selectedEmployer = () =>{
        let rootNode = ReactDOM.findDOMNode(this);
        let selected = rootNode.getElementsByClassName(styles.chosen__employer)[0].value;
        this.setState(state => ({
            chosenEmployer: selected,
        }));
    }
    render(){
        const typeOfWork = [
            ["Оштукатурил К3, 12 этаж, с "],
            ["Оштукатурил К3, 14 этаж, с "],
            ["Оштукатурил К3, 16 этаж, с "],
            ["Оштукатурил К3, 18 этаж, с "],
            ["Оштукатурил К3, 20 этаж, с "],
            ["Оштукатурил К3, 20 этаж, с "],
            ["Оштукатурил К3, 20 этаж, с "],
            ["Оштукатурил К3, 20 этаж, с "],
        ];
        const coloredWork = {
            master: ["green", "green", "green", "yellow" ,"red", "green", "yellow", "green"],
            osk: ["green", "yellow", "yellow", "yellow" ,"red", "green", "yellow", "green"],
            pto: ["green", "green", "green", "yellow" ,"green", "green", "red", "red"],
            tehnadzor: ["red", "red", "green", "yellow" ,"red", "green", "red", "red"],
        }
        return(
            <>
            <div className={`${styles.controllers}`}>
                <select id="subtracted__select" className={styles.chosen__employer} onChange={this.selectedEmployer}>
                    <option value="master">Прораб</option>
                    <option value="osk">ОСК</option>
                    <option value="pto">ПТО</option>
                    <option value="tehnadzor">Технадзор</option>
                </select>
            </div>
            {typeOfWork.map((item, index) => (
                <div style={{backgroundColor:coloredWork[this.state.chosenEmployer][index]}} className={`${styles.finished__work} ${styles.bgc}`}>{item}</div>
            ))}
            <Outlet/>
        </>
        )
    }
}

export default CompletedWork;