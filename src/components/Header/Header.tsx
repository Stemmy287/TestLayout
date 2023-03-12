import React from 'react';
import s from './header.module.scss'
import {ReactComponent as Logo} from "common/icons/logo.svg";
import {ReactComponent as TextLogo} from "common/icons/textLogo.svg";
import {SocialLogos} from "common/components/SocialLogos/SocialLogos";

export const Header = () => {
  return (
    <header className={s.headerContainer}>
      <div className={s.leftBlock}>
        <div className={s.company}>
          <a href="/#" className={s.logo}>
            <Logo/>
            <TextLogo/>
          </a>
          <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
        <div className={s.navigate}>
          <a href="/#">Услуги</a>
          <a href="/#">Виджеты</a>
          <a href="/#">Интеграции</a>
          <a href="/#">Кейсы</a>
          <a href="/#" className={s.certificates}>Сертификаты</a>
        </div>
      </div>
      <div className={s.contacts}>
        <span className={s.number}>+7 555 555-55-55</span>
        <SocialLogos bigGap/>
      </div>
    </header>
  );
};

