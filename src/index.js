import React from 'react';
import ReactDOM from 'react-dom/client';
import './normolize.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let DropdownMenyArray = [
  {
      name:'ЖК Архитектор',
      address: 'ул. Академика Волгина, 2А, Москва, 119421',
      objectDelivery: '4 квартал 2023'
  },
  {
      name:'ЖК Сидней',
      address: 'ул. Шеногина, вл. 2, Москва, 119421',
      objectDelivery: '1 квартал 2023'
  },
  {
      name:'ЖК Режиссер',
      address: 'ул. Вильгельма Пика, вл. 3, Москва, 119421',
      objectDelivery: '4 квартал 2023'
  },
  {
      name:'ЖК Роттердам',
      address: 'ул. Варшавское шоссе, 37А/1, Москва, 119421',
      objectDelivery: '1 квартал 2025'
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dropdown={DropdownMenyArray}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
