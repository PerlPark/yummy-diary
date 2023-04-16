import { atom } from 'recoil';

export interface ItemType {
  isHeadline: false;
  image?: string;
  name: string;
  brand?: string;
  g?: number;
  nutrition: {
    kcal?: number;
    carbohydrate?: number;
    protein?: number;
    fat?: number;
  };
}

interface Data {
  date: string;
  morning: ItemType[];
  morningSnack: ItemType[];
  lunch: ItemType[];
  afternoonSnack: ItemType[];
  midMeal: ItemType[];
  dinner: ItemType[];
  midnightSnack: ItemType[];
}

export const dataState = atom<Data[]>({
  key: 'dataState',
  default: [],
});
