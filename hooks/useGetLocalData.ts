import { useEffect, useState } from 'react';

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

const useGetLocalData = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) setData(JSON.parse(localData));
  }, []);

  return data;
};

export default useGetLocalData;
