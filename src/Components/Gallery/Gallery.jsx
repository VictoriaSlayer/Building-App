import React from 'react';
import styles from './Gallery.module.css'
import {Link} from "react-router-dom";
import GalleryComments from './GalleryComments'

class Gallery extends React.Component {
    render() {
        return (
            <div className={styles.galleryContainer}>
                <div className={styles.gallery}>
                    {[...Array(10).keys()].map(number =>
                        <Link to={`/gallery/${number}`}>
                            <img className={styles.image} src={`/Photos/${number}.jpg`} alt={`фото ${number}`}/>
                        </Link>
                    )}
                </div>
                <GalleryComments className={styles.galleryComments}/>
            </div>
        )
    }
}


export default Gallery;