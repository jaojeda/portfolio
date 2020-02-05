import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <Home />
        <About />
        <Projects />
      </section>
    </div>
  );
}
