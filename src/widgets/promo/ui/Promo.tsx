import { Button } from '@/shared/ui/button';
import s from './Promo.module.scss';

export const Promo = () => {
  return (
    <div className={s.promo}>
      <div className="wrapper">
        <h2>Онлайн калькулятор КАСКО</h2>
        <p className="secondary-text tac">
          Подберите выгодную страховку за пару кликов
        </p>
      </div>
      <Button primary className="wrapper">
        Рассчитать КАСКО
      </Button>
      <div className={s.promo__image}></div>
    </div>
  );
};
