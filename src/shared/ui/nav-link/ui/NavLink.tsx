import { FC } from 'react';
import s from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a href={href} className={s.link}>
      {children}
    </a>
  );
};
