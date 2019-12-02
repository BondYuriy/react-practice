import React from 'react';
import s from './tadContetnt.module.css';

const TadContetnt = ({ title, text }) => (
  <div className={s.content}>
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
);

export default TadContetnt;
