import React from 'react';
import s from './main.module.scss'
import {Gifts} from "components/Main/Gifts/Gifts";

export const Main = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.welbex}>
        <span>Зарабатывайте больше</span>
        <span><b>с WELBEX</b></span>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <Gifts/>
    </div>
  );
};

