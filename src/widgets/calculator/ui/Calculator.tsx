import { CalculatorForm } from '@/features/calculator-form';
import clsx from 'clsx';

export const Calculator = () => {
  return (
    <div className={clsx('wrapper')}>
      <CalculatorForm />
    </div>
  );
};
