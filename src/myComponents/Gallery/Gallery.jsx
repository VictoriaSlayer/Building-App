import React from 'react';
import styles from './Gallery.module.css'
import GalleryComments from './GalleryComments'
import {Link} from "react-router-dom";

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(){

  }

  render(){
    const numbers = [];

    for(let i = 1; i < 11; i++) {
      numbers.push(i);
    }

    return(
        <div className={styles.galleryContainer}>
          <div className={styles.gallery}>
            {numbers.map(number =>
              <Link to={`/gallery/${number}`}>
                  <img onClick={this.handleClick} className={styles.image} src={`/Photos/${number}.jpg`} alt={`каменная кладка {i}`}/>
              </Link>
            )}
          </div>
          <GalleryComments className={styles.galleryComments}/>
        </div>
    )
  }
}


export default Gallery;