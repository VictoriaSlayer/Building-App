import React from 'react';
import Header from './myComponents/Header/Header';
import Footer from './myComponents/Footer/Footer';
import styles from './App.module.css';
import Companies from './myComponents/Companies/Companies';
import {Routes, Route, Link} from "react-router-dom";

import MyCalendar from './myComponents/Calendar/MyCalendar';
import WorkersCounterTable from './myComponents/WorkersCounter/WorkersCounterTable';
import SwiperSlider from './myComponents/Slider/SwiperSlider';
import Gallery from './myComponents/Gallery/Gallery';

function App(props) {
  return (
      <div className={styles.body__container}>
        <Header data={props.data}/>
          <div className={styles.main__container}>
            <Routes>
              {props.data.map(item =>
                <Route path={item.dropdownmenu.links.dropdown} element={<Companies links={item.dropdownmenu.links} companiesData={item.companies.mainCompanies}/>}/>
              )}
              <Route path={`gallery/:id`} element={<SwiperSlider />}></Route>
            </Routes>
            {/* <MyCalendar/> */}
            {/* <WorkersCounterTable/> */}
            {/* <SwiperSlider/> */}
            {/* <Gallery/> */}
            {/* <Companies/> */}
          </div>
        <Footer data={props.data}/>
      </div>
  );
}

export default App;
