import { FC } from 'react';
import s from './RadioIcons.module.scss';

type CarData = {
  img: string;
  carName: string;
};

interface RadioProps {
  carsData: CarData[];
  name: string;
}

export const RadioIcons: FC<RadioProps> = ({ carsData, name }) => {
  return (
    <div className={s.container}>
      {carsData.map(({ img, carName }) => (
        <label className={s.label}>
          <input type="radio" name={name} value={carName} />
          <img src={img} alt={carName} />
        </label>
      ))}
    </div>
  );
};
