import React from 'react';
import styles from './WorkSection.module.css';
import {Link, Outlet} from 'react-router-dom';

function WorkSection(){
    const typeOfWork = [
        ["Общестрой", "generalWork"],
        ["Кладка", "masonry"],
        ["ОВиК", "ovik"],
        ["ВК", "vk"],
        ["ЭОМ", "eom"],
        ["СС", "ss"],
    ];


    return(
        <>
            {typeOfWork.map(item => (
                <Link className={styles.jobLink} to={`${item[1]}`}>{`${item[0]}`}</Link>
            ))}
            <Outlet/>
        </>
    )
}

export default WorkSection;