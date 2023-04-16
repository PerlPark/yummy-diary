import { useEffect, useState } from 'react';

interface HeadlineItem {
  isHeadline: true;
  text: string;
}

export interface LogItem {
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

export type ItemType = HeadlineItem | LogItem;

interface Data {
  date: string;
  items: ItemType[];
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
