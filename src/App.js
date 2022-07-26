import React from 'react';
import Header from './myComponents/Header/Header';
import Footer from './myComponents/Footer/Footer';
import styles from './App.module.css';
import Companies from './myComponents/Companies/Companies';
import {Routes, Route, Link} from "react-router-dom";

import MyCalendar from './myComponents/Calendar/MyCalendar';
import WorkersCounterTable from './myComponents/WorkersCounter/WorkersCounterTable';

function App(props) {
  return (
      <div className={styles.body__container}>
        <Header data={props.data}/>
          <div className={styles.main__container}>
            <Routes>
              {props.data.map(item =>
                <Route path={item.dropdownmenu.links.dropdown} element={<Companies links={item.dropdownmenu.links}/>}/>
                )}
            </Routes>
            {/* <MyCalendar/> */}
            <WorkersCounterTable/>
          </div>
        <Footer data={props.data}/>
      </div>
  );
}

export default App;
