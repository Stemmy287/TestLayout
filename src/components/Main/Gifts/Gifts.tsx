import React from 'react';
import s from 'components/Main/Gifts/gifts.module.scss'
import {Button} from "common/components/Button/Button";
import {Gift} from "components/Main/Gifts/Gift/Gift";

export const Gifts = () => {

  const giftArray = [
    {
      title: 'Виджеты',
      desc: '30 готовых решений'
    },
    {
      title: 'Dashboard',
      desc: 'с показателями вашего бизнеса'
    },
    {
      title: 'Skype Аудит',
      desc: 'отдела продаж и CRM системы'
    },
    {
      title: '35 дней',
      desc: 'использования CRM'
    },
  ]

  return (
    <div className={s.giftsContainer}>
      <span className={s.title}>Вместе с <b>бесплатной консультацией</b> мы дарим:</span>
      <div className={s.giftsList}>
        {giftArray.map(gf => <Gift key={gf.title} title={gf.title} description={gf.desc}/>)}
      </div>
      <Button/>
    </div>
  );
};

