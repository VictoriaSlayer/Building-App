import React from 'react';
import WorkersComments from './WorkersComments';
import './WorkersCounterTable.css';
class WorkersCounterTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }

  leftArrowClicked = () =>{
    this.setState(state => {
      const yesterday = new Date(state.date);
      yesterday.setDate(state.date.getDate() - 1);
      return {
        date: yesterday
      };
    })
  }

  rightArrowClicked = () =>{
    this.setState(state => {
      const tomorrow = new Date(state.date);
      tomorrow.setDate(state.date.getDate() + 1);
      return {
        date: tomorrow
      };
    })
  }

  render(){
    return (
      <>
        <div className="date">
          <span className="arrowButton" onClick={this.leftArrowClicked}>{`❰`}</span>
          {this.state.date.toLocaleDateString("ru-RU")}
          <span className="arrowButton" onClick={this.rightArrowClicked}>{`❱`}</span>
        </div>
        <div className="workersTableContainer">
          <table className="workersTable">
            <thead className="workersTable__head">
              <tr className="workersTable__headStroke">
                <th className="workersTable__cell table__cell">Специальность</th><th className="workersTable__cell8 table__cell">Факт</th><th className="workersTable__cell13 table__cell">Факт 13:00</th><th className="workersTable__cellPlan table__cell">План</th><th className="workersTable__cellDeficit table__cell">Дефицит</th>
              </tr>
            </thead>
            <tbody className="workersTable__body">
              <tr className="workersTable__stroke ITR__stroke">
                <td className="workersTable__cell table__cell">Итого ИТР</td><td className="workersTable__cell8 table__cell">18</td><td className="workersTable__cell13 table__cell">18</td><td className="workersTable__cellPlan table__cell">27</td><td className="workersTable__cellDeficit table__cell">-9</td>
              </tr>
              <tr className="workersTable__stroke workers__stroke">
                <td className="workersTable__cell table__cell">Итого рабочих</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
              </tr>
              <tr className="workersTable__stroke handymen__stroke">
                <td className="workersTable__cell table__cell">Разнорабочие</td><td className="workersTable__cell8 table__cell">14</td><td className="workersTable__cell13 table__cell">48</td><td className="workersTable__cellPlan table__cell">51</td><td className="workersTable__cellDeficit table__cell">-3</td>
              </tr>
              <tr className="workersTable__stroke concrete__stroke">
                <td className="workersTable__cell table__cell">Стяжка</td><td className="workersTable__cell8 table__cell">1</td><td className="workersTable__cell13 table__cell">8</td><td className="workersTable__cellPlan table__cell">17</td><td className="workersTable__cellDeficit table__cell">-9</td>
              </tr>
              <tr className="workersTable__stroke tiler__stroke">
                <td className="workersTable__cell table__cell">Плиточники</td><td className="workersTable__cell8 table__cell">0</td><td className="workersTable__cell13 table__cell">0</td><td className="workersTable__cellPlan table__cell">0</td><td className="workersTable__cellDeficit table__cell">0</td>
              </tr>
              <tr className="workersTable__stroke ventilation__stroke">
                <td className="workersTable__cell table__cell">Вент-ки</td><td className="workersTable__cell8 table__cell">0</td><td className="workersTable__cell13 table__cell">10</td><td className="workersTable__cellPlan table__cell">16</td><td className="workersTable__cellDeficit table__cell">-6</td>
              </tr>
              <tr className="workersTable__stroke bricklayer__stroke">
                <td className="workersTable__cell table__cell">Каменщики</td><td className="workersTable__cell8 table__cell">7</td><td className="workersTable__cell13 table__cell">17</td><td className="workersTable__cellPlan table__cell">40</td><td className="workersTable__cellDeficit table__cell">-23</td>
              </tr>
              <tr className="workersTable__stroke plumber__stroke">
                <td className="workersTable__cell table__cell">Сантехники</td><td className="workersTable__cell8 table__cell">7</td><td className="workersTable__cell13 table__cell">7</td><td className="workersTable__cellPlan table__cell">7</td><td className="workersTable__cellDeficit table__cell">7</td>
              </tr>
              <tr className="workersTable__stroke welder__stroke">
                <td className="workersTable__cell table__cell">Сварщики</td><td className="workersTable__cell8 table__cell">1</td><td className="workersTable__cell13 table__cell">1</td><td className="workersTable__cellPlan table__cell">1</td><td className="workersTable__cellDeficit table__cell">1</td>
              </tr>
              <tr className="workersTable__stroke plasterers__stroke">
                <td className="workersTable__cell table__cell">Штукатуры</td><td className="workersTable__cell8 table__cell">0</td><td className="workersTable__cell13 table__cell">0</td><td className="workersTable__cellPlan table__cell">0</td><td className="workersTable__cellDeficit table__cell">0</td>
              </tr>
              <tr className="workersTable__stroke electric__stroke">
                <td className="workersTable__cell table__cell">Электрики</td><td className="workersTable__cell8 table__cell">3</td><td className="workersTable__cell13 table__cell">11</td><td className="workersTable__cellPlan table__cell">20</td><td className="workersTable__cellDeficit table__cell">-9</td>
              </tr>
            </tbody>
          </table>
          <WorkersComments/>
        </div>
      </>
    );
  }

}

export default WorkersCounterTable;