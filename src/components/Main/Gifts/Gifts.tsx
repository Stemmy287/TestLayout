import React from 'react';
import s from 'components/Main/Gifts/gifts.module.scss'
import {Button} from "common/components/Button/Button";
import {Gift} from "components/Main/Gifts/Gift/Gift";
import {GiftMobile} from "components/Main/Gifts/GiftMobile/GiftMobile";

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

  const giftMobileArray = ['Skype аудит', '30 виджетов', 'Dashboard', 'Месяц AMOCRM']


  return (
    <div className={s.giftsContainer}>
      <span className={s.title}>Вместе с <b>бесплатной консультацией</b> мы дарим:</span>
      <div className={s.giftsList}>
        {giftArray.map(gf => <Gift key={gf.title} title={gf.title} description={gf.desc}/>)}
      </div>
      <div className={s.giftsListMobile}>
        {giftMobileArray.map(gf => <GiftMobile key={gf} text={gf}/>)}
      </div>
      <Button/>
    </div>
  );
};

