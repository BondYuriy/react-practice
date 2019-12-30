import React from 'react';
import WithLocalization from './hoc/withLocalization';
import styles from './localeSelector.module.css';

const LocaleSelector = ({ localization }) => {
  const { currentLocale, locales, changeLocale } = localization;

  return (
    <div>
      {locales.map(locale => (
        <button
          className={locale === currentLocale ? styles.active : styles.btn}
          type="button"
          key={locale}
          onClick={() => changeLocale(locale)}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

export default WithLocalization(LocaleSelector);
