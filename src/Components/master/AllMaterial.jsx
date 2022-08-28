import React from 'react';
import styles from './AllMaterial.module.css';
import {Link, Outlet} from 'react-router-dom';

function AllMaterial(){
    const typeOfWork = [
        ["Общестрой", "generalWork"],
        ["Кладка", "masonry"],
        ["ОВиК", "ovik"],
        ["ВК", "vk"],
        ["ЭОМ", "eom"],
        ["СС", "ss"],
    ];

    const materialQuantity = [
        ["ППГнг(А)-FRHF-660 3х1,5 мм2", "22000", "3200", ],
        ["ППГнг(А)-HF-660 3х10 мм2", "43000", "13200", ],
        ["ППГнг(А)-HF-660 3х10 мм2", "12000", "6000", ],
        ["ППГнг(А)-HF-660 5х10 мм2", "32000", "15200", ],
        ["ППГнг(А)-FRHF-660 3х2,5 мм2", "43000", "21759", ],
        ["Гофра 16Д EKF. Кабель UTP 5eZHнг(А)HF 4×2×0.52", "22000", "3200", ],
        ["Скоба металлическая однолапковая СМО 19-20", "1700", "143", ],
        ["Держатель оцинкованный односторонний D=25-26 ", "2300", "413", ],
        ["Держатель оцинкованный односторонний D=25-26 ", "2300", "413", ],
        ["Труба гофрированная ПВХ  91920 ", "62000", "12300", ],
    ];


    return(
        <div clasName={styles.workerTable}>

            {materialQuantity.map(item => (
                    <>
                        <div className={styles.material__name}>{`${item[0]}`}</div>
                        <div className={styles.material__quantity}>{`${item[1]}`}</div>
                        <div className={styles.material__realised}>{`${item[2]}`}</div>
                        <div className={styles.material__balance}>{item[1] - item[2]}</div>
                    </>
                )
            )}
        </div>
    )
}

export default AllMaterial;