import React from 'react';
import s from './main.module.scss'
import {Button} from "common/components/Button";

export const Main = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.welbex}>
        <span>Зарабатывайте больше</span>
        <span><b>с WELBEX</b></span>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={s.gifts}>
        <span className={s.title}>Вместе с <b>бесплатной консультацией</b> мы дарим:</span>
        <div className={s.giftsList}>
          <div className={s.gift}>
            <h3>
              Виджеты
            </h3>
            <span>
              30 готовых решений
            </span>
          </div>
          <div className={s.gift}>
            <h3>
              Dashboard
            </h3>
            <span>
              с показателями вашего бизнеса
            </span>
          </div>
          <div className={s.gift}>
            <h3>
              Skype Аудит
            </h3>
            <span>
              отдела продаж и CRM системы
            </span>
          </div>
          <div className={s.gift}>
            <h3>
              35 дней
            </h3>
            <span>
              использования CRM
            </span>
          </div>
        </div>
          <Button/>
      </div>
    </div>
  );
};

