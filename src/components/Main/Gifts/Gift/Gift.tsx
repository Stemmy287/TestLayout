import React, {FC} from 'react';
import s from "./gift.module.scss";

type Props = {
  title: string
  description: string
}

export const Gift:FC<Props> = ({title, description}) => {
  return (
    <div className={s.giftContainer}>
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};

