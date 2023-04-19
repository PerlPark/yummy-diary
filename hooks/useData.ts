import { LogType } from '@/constants/types';
import { Data, dataState, timeType } from '@/recoil/data';
import { useRecoilState } from 'recoil';

const useLogData = () => {
  const [data, setData] = useRecoilState(dataState);

  const setLogData = (date: string, time: timeType, item: LogType) => {
    const todayIndex = data.findIndex((v) => v.date === date);

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

  const deleteLogData = (date: string, time: timeType, index: number) => {
    const dateIndex = data.findIndex((v) => v.date === date);
    const newTimeArrayItem = data[dateIndex][time].filter(
      (_, i) => i !== index
    );

    const copyDate = { ...data[dateIndex] };
    copyDate[time] = newTimeArrayItem;

    const copyData = [...data];
    copyData[dateIndex] = copyDate;

    setData(copyData);
  };

  return { setLogData, deleteLogData };
};

export default useLogData;
