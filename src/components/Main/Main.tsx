import React from 'react';
import s from './main.module.scss'
import {Gifts} from "components/Main/Gifts/Gifts";
import noise from 'common/image/noise.png'

export const Main = () => {
  return (
    <div className={s.mainContainer}>
      <img src={noise} alt="noise"/>
      <div className={s.welbex}>
        <span>Зарабатывайте больше</span>
        <span><b>с WELBEX</b></span>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <Gifts/>
    </div>
  );
};

