import { Checkbox, RadioIcons, Select, TextInput } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import {
  carBrands,
  carDriveType,
  carsData,
  driverAge,
  drivingExperience,
  engineCapacity,
  engineTypes,
  financingTypes,
  productionYear,
} from '../data/carsData';
import s from './CalculatorForm.module.scss';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export const CalculatorForm = () => {
  const VINInputRef = useRef<HTMLInputElement | null>(null);
  const brandRef = useRef<HTMLSelectElement | null>(null);

  const [errorVIN, setErrorVIN] = useState('');
  const [errorParams, setErrorParams] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.target.classList.remove(s.errorInput);
    setErrorVIN('');
  };

  const handleVINSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      const input = VINInputRef.current;
      if (input) {
        if (!input.checkValidity()) {
          input.classList.add(s.errorInput);

          if (input.validity.valueMissing) {
            setErrorVIN('Введите VIN-код');
          }

          if (input.validity.patternMismatch) {
            setErrorVIN(
              'Введите код в формате - 17 символов (латинских букв и цифр, кроме букв I, O, Q)'
            );
          }
        }
      }
    } else {
      const data = new FormData(e.currentTarget);
      console.log(Object.fromEntries(data));

      console.log('VIN sent successfully');
    }
  };

  const handleParamsSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      const select = brandRef.current;
      if (select) {
        if (!select.checkValidity()) {
          select.classList.add(s.errorInput);

          if (select.validity.valueMissing) {
            setErrorParams('Выберите марку автомобиля');
          }
        }
      }
    } else {
      const data = new FormData(e.currentTarget);
      console.log(Object.fromEntries(data));

      console.log('Car params sent successfully');
    }
  };

  return (
    <div className={s.block}>
      <div>
        <h3>Калькулятор</h3>
        <p className="secondary-text">Введите VIN-код</p>
      </div>
      <form noValidate onSubmit={handleVINSubmit}>
        <div className={s.onelineForm}>
          <TextInput
            name="VIN"
            reference={VINInputRef}
            placeholder="VIN-код автомобиля"
            pattern="[a-hj-npr-zA-HJ-NPR-Z0-9]{17}"
            required
            onChange={handleChange}
          />
          <Button type="submit" className={s.button}>
            Проверить VIN
          </Button>
        </div>
        <p className={s.error}>{errorVIN}</p>
      </form>

      <p className="secondary-text">или заполните данные автомобиля</p>
      <form
        noValidate
        onSubmit={handleParamsSubmit}
        className={s.multilineForm}
      >
        <RadioIcons carsData={carsData} name="Бренд" />
        <div>
          <Checkbox name="Такси" value="Такси">
            Автомобиль такси
          </Checkbox>
          <div className={s.selectGroup}>
            <Select
              name="Марка"
              options={carBrands}
              reference={brandRef}
              onChange={handleChange}
            />
            <Select name="Тип двигателя" options={engineTypes} />
            <Select name="Вид финансирования" options={financingTypes} />
            <Select name="Объем двигателя" options={engineCapacity} />
            <Select name="Водительский стаж" options={drivingExperience} />
            <Select name="Год" options={productionYear} />
            <Select name="Привод" options={carDriveType} />
            <Select name="Возраст" options={driverAge} />
          </div>
        </div>
        <Button type="submit" className={s.button}>
          Сравнить стоимость
        </Button>
        <p className={s.error}>{errorParams}</p>
      </form>
    </div>
  );
};
