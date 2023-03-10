import React from 'react';
import s from './header.module.scss'
import {ReactComponent as Logo} from "common/icons/logo.svg";
import {ReactComponent as TextLogo} from "common/icons/textLogo.svg";
import {ReactComponent as Telegram} from "common/icons/telegram.svg";
import {ReactComponent as Viber} from "common/icons/phone.svg";
import {ReactComponent as Whatsapp} from "common/icons/whatsapp.svg";

export const Header = () => {
  return (
    <header className={s.headerContainer}>
      <div className={s.company}>
        <div className={s.logo}>
          <Logo/>
          <TextLogo/>
        </div>
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <div className={s.navigate}>
        <a href="/#">Услуги</a>
        <a href="/#">Виджеты</a>
        <a href="/#">Интеграции</a>
        <a href="/#">Кейсы</a>
        <a href="/#">Сертификаты</a>
      </div>
      <div className={s.contacts}>
        <span className={s.number}>+7 555 555-55-55</span>
        <div className={s.socialLogos}>
          <Telegram/>
          <Viber/>
          <Whatsapp/>
        </div>
      </div>
    </header>
  );
};

