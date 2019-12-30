import React from 'react';
import LocalizationContext from '../context/localization';
import LocaleSelector from './localeSelector';
import Article from './article';
import styles from './app.module.css';

const App = () => (
  <LocalizationContext>
    <div className={styles.selector}>
      <LocaleSelector />
      <Article />
    </div>
  </LocalizationContext>
);

export default App;
