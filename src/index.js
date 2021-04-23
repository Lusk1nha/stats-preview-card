import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import styles from './styles/global.scss'

ReactDOM.render(
  <App className={styles.global}/>,
  document.getElementById('root')
);

