import { FC } from 'react';
import s from './Checkbox.module.scss';

interface CheckboxProps {
  name: string;
  value: string;
  children: string;
}

export const Checkbox: FC<CheckboxProps> = ({ children, name, value }) => {
  return (
    <label className={s.container}>
      {children}
      <input type="checkbox" value={value} name={name} />
      <span className={s.checkmark}></span>
    </label>
  );
};
