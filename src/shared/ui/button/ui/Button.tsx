import { FC } from 'react';
import s from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps {
  type?: 'submit' | 'button';
  className?: string;
  primary?: true;
  children: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  primary,
  className,
  onClick,
}) => {
  return (
    <button
      type={type || 'button'}
      className={clsx(s.button, primary && s.primary, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
