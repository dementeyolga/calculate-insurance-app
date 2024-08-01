import clsx from 'clsx';
import s from './Advantages.module.scss';
import { Card } from '@/shared/ui/card';

export const Advantages = () => {
  return (
    <div className={clsx(s.container, 'wrapper')}>
      <h2 className={s.heading}>Преимущества оформления КАСКО на Название</h2>
      <div className={s.grid}>
        <Card className={s.first} large title="Выгода до 33%">
          Имклива Иншуранс – прогрессивная и успешная компания с универсальным
          страховым портфелем. Для оформления онлайн доступны 8 продуктов по
          страхованию жизни и здоровья, недвижимости
        </Card>
        <Card className={s.second} title="Выгода до 33%">
          Имклива Иншуранс – прогрессивная и успешная компания с универсальным
        </Card>
        <Card className={s.third} title="Выгода до 33%">
          Имклива Иншуранс – прогрессивная и успешная компания с универсальным
        </Card>
      </div>
    </div>
  );
};
