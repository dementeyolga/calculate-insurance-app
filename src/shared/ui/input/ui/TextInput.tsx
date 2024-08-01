import { FC } from 'react';
import s from './Input.module.scss';

interface InputProps {
  placeholder: string;
  pattern?: string;
  required?: true;
}

export const TextInput: FC<InputProps> = ({
  placeholder,
  pattern,
  required,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      pattern={pattern ?? ''}
      required={Boolean(required)}
      className={s.input}
    ></input>
  );
};
