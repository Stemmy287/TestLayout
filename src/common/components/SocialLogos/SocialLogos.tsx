import React, {FC} from 'react';
import s from './socilaLogos.module.scss'
import {ReactComponent as Telegram} from "common/icons/telegram.svg";
import {ReactComponent as Viber} from "common/icons/phone.svg";
import {ReactComponent as Whatsapp} from "common/icons/whatsapp.svg";

type Props = {
  bigGap?: boolean
}

export const SocialLogos:FC<Props> = ({bigGap}) => {
  return (
    <div className={bigGap ?`${s.socialLogos} ${s.bigGap}` : s.socialLogos}>
      <a href="/#"><Telegram/></a>
      <a href="/#"><Viber/></a>
      <a href="/#"><Whatsapp/></a>
    </div>
  );
};

