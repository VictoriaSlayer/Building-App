import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import styles from './App.module.css';
import Companies from './Components/Companies/Companies';
import MyCalendar from './Components/Calendar/MyCalendar';
import Calc from './Components/Calc/Calc';
// Components for Masters
import Master from './Components/master/Master';
import WorkSection from './Components/master/WorkSection';
import CompletedWork from './Components/master/CompletedWork';
import AllMaterial from './Components/master/AllMaterial';
// Components for Masters
import {Routes, Route, Navigate} from "react-router-dom";

import WorkersCounterTable from './Components/WorkersCounter/WorkersCounterTable';
import Gallery from './Components/Gallery/Gallery';
import SwiperSlider from "./Components/Slider/SwiperSlider";

function App(props) {
    const {pages, topMenu} = props.data;
    return (
        <div className={styles.body__container}>
            <Header data={topMenu}/>
            <div className={styles.main__container}>
                <Routes>
                    <Route path='/' element={<Navigate to="/contractors/arhitector" replace/>}/>
                    <Route path={`/contractors/:complex`} element={<Companies data={pages[0].complexes}/>}/>
                    <Route path={`/workers/:complex`} element={<WorkersCounterTable data={pages[0].complexes}/>}/>
                    <Route path={`/gallery/:complex`} element={<Gallery data={pages[0].complexes}/>}/>
                    <Route path={`gallery/:complex/:id`} element={<SwiperSlider />}></Route>
                    <Route path={`calc/:complex/`} element={<Calc />}></Route>
                    <Route path={`master/:complex`} element={<Master />}></Route>
                    <Route path={`master/:complex/:worksection`} element={<WorkSection />}></Route>
                    <Route path={`master/:complex/completedwork/:completedwork`} element={<CompletedWork/>}></Route>
                    <Route path={`master/:complex/allmaterial/:allmaterial`} element={<AllMaterial/>}></Route>
                </Routes>
            </div>
            <Footer data={null}/>
        </div>
    );
}

export default App;