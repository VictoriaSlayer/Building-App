import React from 'react';
import styles from './WorkSectionMenu.module.css';
import {Link, Outlet} from 'react-router-dom';

function WorkSectionMenu(){
    const workTypes = [
        ["Общестрой", "generalWork"],
        ["Кладка", "masonry"],
        ["ОВиК", "ovik"],
        ["ВК", "vk"],
        ["ЭОМ", "eom"],
        ["СС", "ss"],
    ];

    return(
        <div className={styles.workSection__container}>
            {workTypes.map(item => (
                <Link className={styles.jobLink} to={`${item[1]}`}>{`${item[0]}`}</Link>
            ))}
            <Outlet/>
        </div>
    )
}

export default WorkSectionMenu;