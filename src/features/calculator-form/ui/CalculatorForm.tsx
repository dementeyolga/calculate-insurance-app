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

export const CalculatorForm = () => {
  return (
    <div className={s.block}>
      <div>
        <h3>Калькулятор</h3>
        <p className="secondary-text">Введите VIN-код</p>
      </div>
      <form className={s.onelineForm}>
        <TextInput
          placeholder="VIN-код автомобиля"
          pattern="[a-hj-npr-zA-HJ-NPR-Z0-9]{17}"
          required
        />
        <Button type="submit" className={s.button}>
          Проверить VIN
        </Button>
      </form>
      <p className="secondary-text">или заполните данные автомобиля</p>
      <form className={s.multilineForm}>
        <RadioIcons carsData={carsData} name="carBrand" />
        <div>
          <Checkbox name="isTaxi">Автомобиль такси</Checkbox>
          <div className={s.selectGroup}>
            <Select name="Марка" options={carBrands} />
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
      </form>
    </div>
  );
};
