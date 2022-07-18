import React from 'react';
import Header from './myComponents/Header/Header';
import Footer from './myComponents/Footer/Footer';
import classes from './App.module.css';
import Companies from './myComponents/Companies/Companies';
import {Routes, Route, Link} from "react-router-dom";

function App(props) {
  return (
    <div className={classes.main__container}>
        <Header data={props.data}/>
        <Routes>
          {props.data.map(item =>
            <Route path={item.dropdownmenu.links.dropdown} element={<Companies links={item.dropdownmenu.links}/>}/>
          )}
        </Routes>
        <Footer data={props.data}/>
    </div>
  );
}

export default App;
