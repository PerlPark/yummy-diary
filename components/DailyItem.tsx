import AddButton from './AddButton';
import AddModal from './AddModal';
import { useState } from 'react';
import LogItem from './LogItem';
import items from '@/constants/items';
import { LogType } from '@/constants/types';
import { timeLabel } from '@/constants/labels';

type DailyItemPropsType = {
  date: string;
  isToday?: boolean;
  morning?: LogType[];
  morningSnack?: LogType[];
  lunch?: LogType[];
  afternoonSnack?: LogType[];
  midMeal?: LogType[];
  dinner?: LogType[];
  midnightSnack?: LogType[];
};

const DailyItem = ({
  date,
  isToday = false,
  morning = [],
  morningSnack = [],
  lunch = [],
  afternoonSnack = [],
  midMeal = [],
  dinner = [],
  midnightSnack = [],
}: DailyItemPropsType) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="flex gap-2 items-baseline mb-4">
        <h2 className="text-2xl font-semibold">{date}</h2>
        {isToday && (
          <span className="rounded bg-rose-400 text-xs text-white px-1 py-0.5">
            오늘
          </span>
        )}
      </div>
      <div className="my-5">총 탄수화물: / 단백질: / 지방: </div>
      {[
        morning,
        morningSnack,
        lunch,
        afternoonSnack,
        midMeal,
        dinner,
        midnightSnack,
      ].map((time, idx) => {
        if (time.length > 0) {
          return (
            <div key={timeLabel[idx]} className="mb-6">
              <h3 className="text-xl font-medium mb-2">{timeLabel[idx]}</h3>
              <div className="grid grid-cols-3 gap-8">
                {time.map((item, idx) => (
                  <LogItem
                    key={`${date}-morning-${idx}`}
                    name={items[item.index].name}
                    brand={items[item.index].brand}
                    image={items[item.index].image}
                    carbohydrate={item.nutrition.carbohydrate}
                    protin={item.nutrition.protein}
                    fat={item.nutrition.fat}
                  />
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
      <AddButton onClick={() => setOpenModal(true)} />
      {openModal && (
        <AddModal date={date} closeHandler={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default DailyItem;
