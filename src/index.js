import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import styles from './components/App.css';
render(
  <App classStyles={styles.App} />,
  document.getElementById('root')
);
