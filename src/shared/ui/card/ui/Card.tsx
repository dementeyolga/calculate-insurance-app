import { FC } from 'react';
import s from './Card.module.scss';
import clsx from 'clsx';

interface CardProps {
  large?: true;
  title: string;
  className: string;
  children: string;
}

export const Card: FC<CardProps> = ({ large, title, className, children }) => {
  return (
    <div className={clsx(s.card, large && s.large, className)}>
      <h3>{title}</h3>
      <p className={s.content}>{children}</p>
    </div>
  );
};
