import React from 'react';
import Header from './myComponents/Header/Header';
import Footer from './myComponents/Footer/Footer';
import styles from './App.module.css';
import Companies from './myComponents/Companies/Companies';
import {Routes, Route, Navigate} from "react-router-dom";

import WorkersCounterTable from './myComponents/WorkersCounter/WorkersCounterTable';
import Gallery from './myComponents/Gallery/Gallery';

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
                    <Route path={`/photos/:complex`} element={<Gallery data={pages[0].complexes}/>}/>
                </Routes>
            </div>
            <Footer data={null}/>
        </div>
    );
}

export default App;