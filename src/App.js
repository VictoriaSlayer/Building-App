import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './App.module.css';
import Companies from './Components/Companies/Companies';
import MyCalendar from './Components/Calendar/MyCalendar';
import {Routes, Route, Navigate} from "react-router-dom";

import WorkersCounterTable from './Components/WorkersCounter/WorkersCounterTable';
import Gallery from './Components/Gallery/Gallery';
import SwiperSlider from "./Components/Slider/SwiperSlider";

function App(props) {
    const {pages, topMenu} = props.data;
    return (
        <div className={styles.body__container}>
            <Header data={topMenu}/>
            {/* <MyCalendar/> */}
            <div className={styles.main__container}>
                <Routes>
                    <Route path='/' element={<Navigate to="/contractors/arhitector" replace/>}/>
                    <Route path={`/contractors/:complex`} element={<Companies data={pages[0].complexes}/>}/>
                    <Route path={`/workers/:complex`} element={<WorkersCounterTable data={pages[0].complexes}/>}/>
                    <Route path={`/gallery/:complex`} element={<Gallery data={pages[0].complexes}/>}/>
                    <Route path={`gallery/:complex/:id`} element={<SwiperSlider />}></Route>
                </Routes>
            </div>
            <Footer data={null}/>
        </div>
    );
}

export default App;