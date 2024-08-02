import { ChangeEvent, FC } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

interface InputProps {
  name: string;
  placeholder: string;
  pattern?: string;
  required?: true;
  reference?: React.MutableRefObject<HTMLInputElement | null>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  withVisiblePlaceholder?: true;
}

export const TextInput: FC<InputProps> = ({
  name,
  placeholder,
  pattern,
  required,
  reference,
  onChange,
  withVisiblePlaceholder,
}) => {
  return (
    <div className={s.wrapper}>
      <input
        name={name}
        ref={reference}
        type="text"
        placeholder={withVisiblePlaceholder ? '' : placeholder}
        pattern={pattern ?? '/[^A-Za-z0-9 -()_]/'}
        required={Boolean(required)}
        className={clsx(
          s.input,
          withVisiblePlaceholder && s.withVisiblePlaceholder
        )}
        onChange={onChange}
      ></input>
      <span className={s.title}>
        {withVisiblePlaceholder ? placeholder : ''}
      </span>
    </div>
  );
};
