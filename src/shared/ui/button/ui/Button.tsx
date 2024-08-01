import { FC } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  primary?: true;
  children: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  primary,
  className,
}) => {
  return (
    <button
      type={type || 'button'}
      className={clsx(s.button, primary && s.primary, className)}
    >
      {children}
    </button>
  );
};
