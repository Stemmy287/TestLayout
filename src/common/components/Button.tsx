import React from 'react';
import s from './button.module.scss'

export const Button = () => {
  return (
    <div className={s.buttonContainer}>
      <button className={s.button}>Получить консультацию</button>
    </div>
  )
};

