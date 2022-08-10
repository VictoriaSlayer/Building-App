import React from 'react';
import styles from './Gallery.module.css'
import {Link} from "react-router-dom";
import GalleryComments from './GalleryComments'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(){

  }

  render(){
    const numbers = [];

    for(let i = 0; i < 10; i++) {
      numbers.push(i);
    }

    return(
        <div className={styles.galleryContainer}>
          <div className={styles.gallery}>
            {numbers.map(number =>
              <Link to={`/gallery/${number}`}>
                  <img onClick={this.handleClick} className={styles.image} src={`/Photos/${number}.jpg`} alt={`фото ${number}`}/>
              </Link>
            )}
          </div>
          <GalleryComments className={styles.galleryComments}/>
        </div>
    )
  }
}


export default Gallery;