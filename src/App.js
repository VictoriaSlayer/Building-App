import React from 'react';
import Header from './myComponents/Header/Header';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.main__container}>
      <Header/>
    </div>
  );
}

export default App;
