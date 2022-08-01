import React from 'react';
import styles from './GalleryComments.module.css'


class GalleryComments extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <p className={styles.comment}>Имеются замечания по кладке газоблока. Коммуникации по холодоснабжению, отоплению смонтированны не под 90 градусов. Коммуникации по вентиляции, ЭОМ пересекаются друг с другом, необходимо пересогласовывать проект.</p>
    )
  }
}


export default GalleryComments;