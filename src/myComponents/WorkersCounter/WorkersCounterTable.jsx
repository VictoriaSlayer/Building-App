import React from 'react';
import './WorkersCounterTable.css';

function WorkersCounterTable(){

  return (
    <table className="workersTable">
      <thead className="workersTable__head">
        <tr className="workersTable__headStroke">
          <th className="workersTable__cell table__cell">Специальность</th><th className="workersTable__cell8 table__cell">Факт</th><th className="workersTable__cell13 table__cell">Факт 13:00</th><th className="workersTable__cellPlan table__cell">План</th><th className="workersTable__cellDeficit table__cell">Дефицит</th>
        </tr>
      </thead>
      <tbody className="workersTable__body">
        <tr className="workersTable__stroke ITR__stroke">
          <td className="workersTable__cell table__cell">Итого ИТР</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke workers__stroke">
          <td className="workersTable__cell table__cell">Итого рабочих</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke handymen__stroke">
          <td className="workersTable__cell table__cell">Разнорабочие</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke concrete__stroke">
          <td className="workersTable__cell table__cell">Стяжка</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke tiler__stroke">
          <td className="workersTable__cell table__cell">Плиточники</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke ventilation__stroke">
          <td className="workersTable__cell table__cell">Вент-ки</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke bricklayer__stroke">
          <td className="workersTable__cell table__cell">Каменщики</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke plumber__stroke">
          <td className="workersTable__cell table__cell">Сантехники</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke welder__stroke">
          <td className="workersTable__cell table__cell">Сварщики</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke plasterers__stroke">
          <td className="workersTable__cell table__cell">Штукатуры</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
        <tr className="workersTable__stroke electric__stroke">
          <td className="workersTable__cell table__cell">Электрики</td><td className="workersTable__cell8 table__cell">25</td><td className="workersTable__cell13 table__cell">25</td><td className="workersTable__cellPlan table__cell">25</td><td className="workersTable__cellDeficit table__cell">25</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WorkersCounterTable;