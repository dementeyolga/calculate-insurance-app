import renaultLogo from '@images/renault-logo.svg';
import dongfengLogo from '@images/dongfeng-logo.svg';
import nissanLogo from '@images/nissan-logo.svg';
import voyahLogo from '@images/voyah-logo.svg';
import mheroLogo from '@images/m-hero-logo.svg';
import mitsubishiLogo from '@images/mitsubishi-logo.svg';
import audiLogo from '@images/audi-logo.svg';
import ladaLogo from '@images/lada-logo.svg';
import bmwLLogo from '@images/bmw-logo.svg';
import geelyLogo from '@images/geely-logo.svg';
import volkswagenLogo from '@images/volkswagen-logo.svg';

export const carBrands = [
  'Renault',
  'Dongfeng',
  'Nissan',
  'VOYAH',
  'M-Hero',
  'Mitsubishi',
  'Audi',
  'Lada',
  'BMW',
  'Geely',
  'Volkswagen',
];

export const engineTypes = [
  'бензиновый',
  'дизельный',
  'газовый',
  'электрический',
];

export const financingTypes = [
  'Собственные средства',
  'Внешнее финансирование',
];

export const engineCapacity = [
  '1.5',
  '1.6',
  '1.7',
  '1.8',
  '1.9',
  '2.0',
  '2.1',
  '2.2',
  '2.3',
  '2.4',
  '2.5',
  '2.6',
  '2.7',
  '2.8',
  '2.9',
];

export const drivingExperience = [
  'до 2-х лет',
  'от 2-х до 5-ти лет',
  'от 5-ти до 10-ти лет',
  'более 10-ти лет',
];

export const productionYear = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

const ages = Array(73).fill(0);
export const driverAge = ages.map((_, index) => String(index + 18));
console.log(driverAge);

export const carDriveType = ['Полный', 'Передний', 'Задний'];

export const carsData = [
  {
    img: renaultLogo,
    carName: 'Renault',
  },
  {
    img: dongfengLogo,
    carName: 'DongFeng',
  },
  {
    img: nissanLogo,
    carName: 'Nissan',
  },
  {
    img: voyahLogo,
    carName: 'Voyah',
  },
  {
    img: mheroLogo,
    carName: 'M-Hero',
  },
  {
    img: mitsubishiLogo,
    carName: 'Mitubishi',
  },
  {
    img: audiLogo,
    carName: 'Audi',
  },
  {
    img: ladaLogo,
    carName: 'Lada',
  },
  {
    img: bmwLLogo,
    carName: 'BMW',
  },
  {
    img: geelyLogo,
    carName: 'Geely',
  },
  {
    img: volkswagenLogo,
    carName: 'Volkswagen',
  },
];
