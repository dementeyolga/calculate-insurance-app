import { Button } from '@/shared/ui/button';
import s from './Promo.module.scss';
import { Modal } from '@/widgets/modal';
import { useState } from 'react';

export const Promo = () => {
  const [isModalActive, setModalActive] = useState(false);

  return (
    <div className={s.promo}>
      <Modal isActive={isModalActive} setActive={setModalActive} />
      <div className="wrapper">
        <h2>Онлайн калькулятор КАСКО</h2>
        <p className="secondary-text tac">
          Подберите выгодную страховку за пару кликов
        </p>
      </div>
      <Button primary className="wrapper" onClick={() => setModalActive(true)}>
        Рассчитать КАСКО
      </Button>
      <div className={s.promo__image}></div>
    </div>
  );
};
