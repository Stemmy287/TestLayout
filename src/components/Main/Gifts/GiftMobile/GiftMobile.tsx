import React, {FC} from 'react';
import s from './GiftMobile.module.scss'
import {ReactComponent as Dash} from "common/icons/dash.svg";

type Props = {
  text: string
}

export const GiftMobile:FC<Props> = ({text}) => {
  return (
    <div className={s.giftMobileContainer}>
      <Dash/>
      <span>{text}</span>
    </div>
  );
};

