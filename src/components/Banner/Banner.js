import React from 'react';
import styles from './Banner.css';
import { useSpring, animated } from 'react-spring';

const Banner = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });

  return (
    <div className={styles.Banner}>
      <animated.img style={props} className={styles.dots} src='../../../assets/geo1.png'/>
      <animated.img style={props} className={styles.lines} src='../../../assets/geo2.png'/>
      <animated.div style={props}></animated.div>
    </div>
  );

};

export default Banner;
