import { LogType } from '@/constants/types';
import { Data, dataState } from '@/recoil/data';
import { useRecoilState } from 'recoil';

const useLogData = () => {
  const [data, setData] = useRecoilState(dataState);

  const setLogData = (date: string, item: LogType) => {
    const todayIndex = data.findIndex((v) => v.date === date);
    const time = 'morning';

    if (todayIndex >= 0) {
      const copyData = [...data];
      const newData = {
        ...copyData[todayIndex],
        [time]: [...copyData[todayIndex][time], item],
      };
      copyData[todayIndex] = newData;
      setData(copyData);
      return;
    }

    const newData: Data = {
      date,
      morning: [],
      morningSnack: [],
      lunch: [],
      afternoonSnack: [],
      midMeal: [],
      dinner: [],
      midnightSnack: [],
    };

    newData[time].push(item);

    setData(
      [...data, newData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
  };

  return { setLogData };
};

export default useLogData;
