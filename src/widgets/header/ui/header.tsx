import { FC } from 'react';
import { NavLink } from '@/shared/ui/nav-link';
import { Logo } from '@/shared/ui/logo';
import s from './Header.module.scss';
import compareImg from '@images/compare-icon.svg';
import accountImg from '@images/account-icon.svg';
import clsx from 'clsx';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={clsx(s.header__wrapper, 'wrapper')}>
        <nav className={s.nav}>
          <Logo />
          <NavLink href="#calculator">Онлайн-калькулятор</NavLink>
          <NavLink href="#insurance-companies">Страховые компании</NavLink>
          <NavLink href="#insurance-case">Страховой случай</NavLink>
          <NavLink href="#faq">FaQ</NavLink>
          <NavLink href="#about">О компании</NavLink>
          <NavLink href="#contact">Контакты</NavLink>
        </nav>
        <div className={s.nav}>
          <NavLink img={compareImg} href=""></NavLink>
          <NavLink img={accountImg} href="">
            Мой кабинет
          </NavLink>
        </div>
      </div>
    </header>
  );
};
