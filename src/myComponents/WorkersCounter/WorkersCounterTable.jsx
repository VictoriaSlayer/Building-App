import React from 'react';
import './WorkersCounterTable.module.css';

function WorkersCounterTable(){

  return (
    <table classname="workersTable">
      <thead classname="workersTable__head">
        <tr classname="workersTable__headStroke"><th classname="main__table__cell table__cell">Специальность</th><th classname="main__counter__8 table__cell">Факт</th><th classname="main__counter__13 table__cell">Факт 13:00</th><th classname="main__plan table__cell">План</th><th classname="main__deficit table__cell">Дефицит</th></tr>
      </thead>
      <tbody>
        <tr classname="ITR__stroke stroke">
          <td classname="main__table__cell table__cell">Итого ИТР</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="workers__stroke stroke">
          <td classname="main__table__cell table__cell">Итого рабочих</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="handymen__stroke stroke">
          <td classname="main__table__cell table__cell">Разнорабочие</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="concrete__stroke stroke">
          <td classname="main__table__cell table__cell">Стяжка</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="tiler__stroke stroke">
          <td classname="main__table__cell table__cell">Плиточники</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="ventilation__stroke stroke">
          <td classname="main__table__cell table__cell">Вентиляционщики</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="bricklayer__stroke stroke">
          <td classname="main__table__cell table__cell">Каменщики</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="plumber__stroke stroke">
          <td classname="main__table__cell table__cell">Сантехники</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="welder__stroke stroke">
          <td classname="main__table__cell table__cell">Сварщики</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="plasterers__stroke stroke">
          <td classname="main__table__cell table__cell">Штукатуры</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
        <tr classname="electric__stroke stroke">
          <td classname="main__table__cell table__cell">Электромонтажники</td><td classname="main__counter__8 table__cell">25</td><td classname="main__counter__13 table__cell">25</td><td classname="main__plan table__cell">25</td><td classname="main__deficit table__cell">25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WorkersCounterTable;