import React from 'react';
import s from './footer.module.scss'
import {List} from "components/Footer/List/List";
import {SocialLogos} from "common/components/SocialLogos/SocialLogos";

export const Footer = () => {

  const aboutCompany = ['Партнёрская программа', 'Вакансии']
  const menuFirstColumn = ['Расчёт стоимости', 'Услуги', 'Виджеты', 'Интеграции', 'Наши клиенты']
  const menuSecondColumn = ['Кейсы', 'Благодарственные письма', 'Сертификаты', 'Блог на Youtube', 'Вопрос / Ответ']
  const contacts = ['+7 555 555-55-55', <SocialLogos/>, 'Москва, Путевой проезд 3с1, к 902']

  return (
    <footer className={s.footerContainer}>
      <div className={s.footerContent}>
        <div className={s.aboutCompany}>
          <List header="О компании" arrLi={aboutCompany}/>
          <div className={s.menu}>
            <List header="Меню" arrLi={menuFirstColumn}/>
            <List header={''} arrLi={menuSecondColumn}/>
          </div>
        </div>
        <div>
          <List contacts header="Контакты" arrLi={contacts}/>
        </div>
      </div>
      <div className={s.confidential}>
        <span>©WELBEX 2022. Все права защищены.</span>
        <a href="#/">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

