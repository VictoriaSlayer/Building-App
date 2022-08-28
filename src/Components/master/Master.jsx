import React from 'react';
import styles from './Master.module.css';
import {Link, Outlet} from 'react-router-dom';

class Master extends React.Component {
    render(){
        return(
            <div className={styles.master__container}>
                <Link to={`completedWork`}>Выполненная работа</Link>
                <Link to={`allmaterial`}>Материал</Link>
                <Outlet/>
            </div>
        )
    }
}

export default Master;