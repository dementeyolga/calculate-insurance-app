import logo from '@images/logo.svg';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <a href="/">
      <img className={s.logo} src={logo} alt="website logo" />
    </a>
  );
};
