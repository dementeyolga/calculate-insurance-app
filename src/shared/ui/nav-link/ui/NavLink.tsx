import { FC } from 'react';
import s from './NavLink.module.scss';

interface NavLinkProps {
  href: string;
  children?: string;
  img?: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children, img }) => {
  return (
    <a href={href} className={s.link}>
      {Boolean(img) && <img src={img} alt={children} />}
      {children}
    </a>
  );
};
