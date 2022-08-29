import React from 'react';
import styles from './Master.module.css';
import {Link, Outlet} from 'react-router-dom';

class Master extends React.Component {
    render(){
        return(
            <div className={styles.master__container}>
                <Link className={styles.master__links} to={`completedWork`}>Выполненная работа</Link>
                <Link className={styles.master__links} to={`allmaterial`}>Материал</Link>
                <Outlet/>
            </div>
        )
    }
}

export default Master;