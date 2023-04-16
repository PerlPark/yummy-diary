import { dataState } from '@/recoil/data';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useLocalData = () => {
  const [data, setData] = useRecoilState(dataState);

  useEffect(() => {
    const localData = localStorage.getItem('data');

    if (localData) setData(JSON.parse(localData));
  }, [setData]);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [data]);

  return data;
};

export default useLocalData;
