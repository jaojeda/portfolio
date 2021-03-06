import React, { useRef, useState, useEffect } from 'react';
import styles from './Banner.css';
import { useSpring, animated, useChain, useTransition } from 'react-spring';
import geo1 from '../../../assets/geo1.png';
import geo2 from '../../../assets/geo2.png';

const Banner = () => {
  const transitionRef = useRef();
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    ref: transitionRef
  });

  useEffect(() => {
    setTimeout(() => set(true), 3000);
  }, []);

  const springRef = useRef();
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: springRef });

  const springRef0 = useRef();
  const props0 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: springRef0 });

  const springRef1 = useRef();
  const props1 = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 }, ref: springRef1 });
  
  
  useChain([springRef, springRef0, springRef1, transitionRef], [0, 0.5, 1, 1.5]);

  return (
    <div className={styles.Banner}>
      <animated.img style={props} className={styles.dots} src={geo1}/>
      <animated.img style={props0} className={styles.lines} src={geo2}/>
      <animated.div style={props1} className={styles.para}></animated.div>
      {transitions.map(({ item, key, props }) => 
        item
          ? <animated.div key={key} style={props}>
            <h2>JOSE OJEDA </h2>
            <h3>{'// FULL STACK DEVELOPER'}</h3>
          </animated.div>
          
          : <animated.div key={key} style={props}>
            <h2>WELCOME</h2>
          </animated.div>
      )}
    </div>
  );

};

export default Banner;
