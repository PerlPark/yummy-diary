import { LogType } from '@/constants/types';
import { atom } from 'recoil';

export interface Data {
  date: string;
  morning: LogType[];
  morningSnack: LogType[];
  lunch: LogType[];
  afternoonSnack: LogType[];
  midMeal: LogType[];
  dinner: LogType[];
  midnightSnack: LogType[];
}

export const dataState = atom<Data[]>({
  key: 'dataState',
  default: [],
});
