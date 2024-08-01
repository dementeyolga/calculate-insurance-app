import { CalculatorForm } from '@/features/calculator-form';
import s from './Calculator.module.scss';
import clsx from 'clsx';

export const Calculator = () => {
  return (
    <div className={clsx(s.calculator, 'wrapper')}>
      <CalculatorForm />
    </div>
  );
};
