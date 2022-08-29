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
        ["Гофра 16Д EKF", "22000", "3200", ],
        ["Скоба  СМО 19-20", "1700", "143", ],
        ["Держатель D=25-26 ", "2300", "413", ],
        ["Держатель  D=25-26 ", "2300", "413", ],
        ["Труба гофрированная ПВХ 91920", "62000", "12300", ],
        ["UTP Cat5e ZH нг(А)-HF 4x2x0,52", "13750", "657.4", ],
        ["КПСнг(А)-FRHF 2x2x0,75", "12345", "9876", ],
        ["Лоток проволочный 50x300x3000", "1200", "730", ],
    ];

    const materialDivArray = [];


        for (let i = 0; i < materialQuantity.length; i++) {
            if(i === 0){
                    materialDivArray.push(<div className={`${styles.material__name} ${styles.material__cell} ${styles.material__head}`}>Материал</div>);
                    materialDivArray.push(<div className={`${styles.material__quantity} ${styles.material__cell} ${styles.material__head}`}>Кол-во</div>);
                    materialDivArray.push(<div className={`${styles.material__realised} ${styles.material__cell} ${styles.material__head}`}>Сделано</div>);
                    materialDivArray.push(<div className={`${styles.material__balance} ${styles.material__cell} ${styles.material__head}`}>Осталось</div>);


                    materialDivArray.push(<div className={`${styles.material__name} ${styles.material__cell}`}>{materialQuantity[i][0]}</div>);
                    materialDivArray.push(<div className={`${styles.material__quantity} ${styles.material__cell}`}>{materialQuantity[i][1]}</div>);
                    materialDivArray.push(<div className={`${styles.material__realised} ${styles.material__cell}`}>{materialQuantity[i][2]}</div>);
                    materialDivArray.push(<div className={`${styles.material__balance} ${styles.material__cell}`}>{materialQuantity[i][1] - materialQuantity[i][2]}</div>);

                }
                materialDivArray.push(<div className={`${styles.material__name} ${styles.material__cell} ${i%2 === 0 ? styles.material__odd : ""}`}>{materialQuantity[i][0]}</div>);
                materialDivArray.push(<div className={`${styles.material__quantity} ${styles.material__cell} ${i%2 === 0 ? styles.material__odd : ""}`}>{materialQuantity[i][1]}</div>);
                materialDivArray.push(<div className={`${styles.material__realised} ${styles.material__cell} ${i%2 === 0 ? styles.material__odd : ""}`}>{materialQuantity[i][2]}</div>);
                materialDivArray.push(<div className={`${styles.material__balance} ${styles.material__cell} ${i%2 === 0 ? styles.material__odd : ""}`}>{materialQuantity[i][1] - materialQuantity[i][2]}</div>);

        }

    return(
        <>
        <div className={styles.material__table}>
            {materialDivArray}
        </div>
        </>
    )
}

export default AllMaterial;