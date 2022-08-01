import React from 'react';
import styles from './Gallery.module.css'
import GalleryComments from './GalleryComments'

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
            <div className={styles.imageGallery}>
              <img onClick={this.handleClick} className={styles.image} src={`/Photos/${number}.jpg`} alt={`каменная кладка {i}`}/>
            </div>
            )}
          </div>
          <GalleryComments className={styles.galleryComments}/>
        </div>
    )
  }
}


export default Gallery;