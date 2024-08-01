import { FC } from 'react';
import s from './Checkbox.module.scss';

interface CheckboxProps {
  name: string;
  children: string;
}

export const Checkbox: FC<CheckboxProps> = ({ children, name }) => {
  return (
    <label className={s.container}>
      {children}
      <input type="checkbox" name={name} />
      <span className={s.checkmark}></span>
    </label>
  );
};
