import { DATE_FORMAT } from '@/constants/date';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';

dayjs.extend(duration);
dayjs.extend(isToday);

type CalendarPropsType = {
  onClickDate: (date: string) => void;
};

const Calendar = ({ onClickDate }: CalendarPropsType) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  // TODO: 년, 월 바꿀 수 있게 수정
  const year = 2023;
  const month = 4;
  const ym = `${year}-${month}`;

  const daysInMonth = dayjs(ym).daysInMonth();
  const startDay = dayjs(ym).get('day');

  return (
    <div className="absolute top-12 bg-white w-80 overflow-hidden shadow-md rounded-lg border">
      <div className="flex gap-2 border-b p-3 justify-center">
        <button type="button">{year}년</button>/
        <button type="button">{month}월</button>
      </div>
      <div className="grid grid-cols-7 py-3 px-2 gap-y-2 text-center">
        {week.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {Array.from({ length: startDay }, (_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => ({
          date: dayjs(new Date(year, month - 1, i + 1)),
        })).map((obj) => (
          <button
            type="button"
            key={obj.date.format(DATE_FORMAT)}
            onClick={() => onClickDate(obj.date.format(DATE_FORMAT))}
            className={
              obj.date.isToday() ? 'border border-rose-300 rounded-full' : ''
            }
          >
            {obj.date.format('D')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
