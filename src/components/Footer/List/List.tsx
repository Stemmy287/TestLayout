import React, {FC} from 'react';
import s from './list.module.scss'

type Props = {
  header: string
  arrLi: React.ReactNode[]
  contacts?: boolean
}

export const List: FC<Props> = ({header, arrLi, contacts}) => {
  return (
    <ul className={contacts ? `${s.list} ${s.contacts}` : s.list}>
      <li className={s.header}>{header}</li>
      {arrLi.map(el => <li><a href="/#">{el}</a></li>)}
    </ul>
  );
};

