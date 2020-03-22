import React, { useRef } from 'react';
import styles from './Banner.css';
import { useSpring, animated, useChain } from 'react-spring';

const Banner = () => {
  const springRef = useRef();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: springRef });

  const transitionRef0 = useRef();
  const transitions0 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: transitionRef0 });

  const transitionRef1 = useRef();
  const transitions1 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: transitionRef1 });
  
  
  useChain([springRef, transitionRef0, transitionRef1], [0, 0.5, 1]);

  return (
    <div className={styles.Banner}>
      <animated.img style={props} className={styles.dots} src='../../../assets/geo1.png'/>
      <animated.img style={transitions0} className={styles.lines} src='../../../assets/geo2.png'/>
      <animated.div style={transitions1}></animated.div>
    </div>
  );

};

export default Banner;
