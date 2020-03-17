import React from 'react';
import styles from './Banner.css';

const Banner = () => {

  return (
    <div className={styles.Banner}>
      <img className={styles.dots} src='../../../assets/geo1.png'/>
      <img className={styles.lines} src='../../../assets/geo2.png'/>
      <div></div>
    </div>
  );

};

export default Banner;
