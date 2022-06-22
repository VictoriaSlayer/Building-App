import React from 'react';
import Header from './myComponents/Header/Header';
import classes from './App.module.css';

function App(props) {
  return (
    <div className={classes.main__container}>
      <Header dropdown={props.dropdown}/>
    </div>
  );
}

export default App;
