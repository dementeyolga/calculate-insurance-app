import { FC } from 'react';
import inputStyle from './Input.module.scss';
import s from './Select.module.scss';
import clsx from 'clsx';

interface SelectProps {
  name: string;
  options: string[];
}

export const Select: FC<SelectProps> = ({ name, options }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{name}</div>
      <select className={clsx(inputStyle.input, s.select)} name={name}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};
