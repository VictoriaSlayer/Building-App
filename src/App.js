import React from 'react';
import Header from './myComponents/Header/Header';
import Footer from './myComponents/Footer/Footer';
import classes from './App.module.css';

function App(props) {
  return (
    <div className={classes.main__container}>
      <Header data={props.data}/>
      <Footer data={props.data}/>
    </div>
  );
}

export default App;
