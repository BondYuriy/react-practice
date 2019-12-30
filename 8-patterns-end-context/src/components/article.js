import React from 'react';
import WithLocalization from './hoc/withLocalization';
import styles from './article.module.css';

const Article = ({ localization }) => {
  const { title, text, linkLabel, features } = localization.localizedContent;

  return (
    <article>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <ul className={styles.list}>
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a
        className={styles.link}
        href="https://reactjs.org/"
        target="_blank"
        rel="noreferrer noopener"
      >
        {linkLabel}
      </a>
    </article>
  );
};

export default WithLocalization(Article);
