import { ItemType } from '@/recoil/data';
import AddButton from './AddButton';
import AddModal from './AddModal';
import { useState } from 'react';

type DailyItemPropsType = {
  date: string;
  isToday?: boolean;
  morning?: ItemType[];
  morningSnack?: ItemType[];
  lunch?: ItemType[];
  afternoonSnack?: ItemType[];
  midMeal?: ItemType[];
  dinner?: ItemType[];
  midnightSnack?: ItemType[];
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
      {morning.length > 0 && (
        <div>
          <h3 className="text-xl font-medium mb-2">아침</h3>
          {morning.map((item, idx) => (
            <div key={`${item.name}-${idx}`}>{item.name}</div>
          ))}
        </div>
      )}
      <AddButton onClick={() => setOpenModal(true)} />
      {openModal && (
        <AddModal date={date} closeHandler={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default DailyItem;
