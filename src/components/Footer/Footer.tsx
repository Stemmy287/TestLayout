import React from 'react';
import s from './footer.module.scss'
import {ReactComponent as Telegram} from "common/icons/telegram.svg";
import {ReactComponent as Viber} from "common/icons/phone.svg";
import {ReactComponent as Whatsapp} from "common/icons/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <div className={s.footerContent}>
        <div className={s.lists}>
          <ul>
            <li className={s.header}>О компании</li>
            <li>Партнёрская программа</li>
            <li>Вакансии</li>
          </ul>
          <div className={s.menu}>
            <ul>
              <li className={s.header}>Меню</li>
              <li>Расчёт стоимости</li>
              <li>Услуги</li>
              <li>Виджеты</li>
              <li>Интеграции</li>
              <li>Наши клиенты</li>
            </ul>
            <ul>
              <li className={s.header}></li>
              <li>Кейсы</li>
              <li>Благодарственные письма</li>
              <li>Сертификаты</li>
              <li>Блог на Youtube</li>
              <li>Вопрос / Ответ</li>
            </ul>
          </div>
        </div>
        <div className={s.contacts}>
          <ul>
            <li className={s.header}>Контакты</li>
            <li>+7 555 555-55-55</li>
            <li>
              <div className={s.socialLogos}>
                <Telegram/>
                <Viber/>
                <Whatsapp/>
              </div>
            </li>
            <li>Москва, Путевой проезд 3с1, к 902</li>
          </ul>
        </div>
      </div>
      <div className={s.confidential}>
        <span>©WELBEX 2022. Все права защищены.</span>
        <a href={'#/'}>Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

