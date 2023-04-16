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
      <div className="flex gap-2 items-baseline">
        <h2 className="text-2xl font-medium">{date}</h2>
        {isToday && (
          <span className="bg-red-400 rounded text-xs text-white px-1 py-0.5">
            오늘
          </span>
        )}
      </div>
      {morning.length > 0 && (
        <div>
          <h3>아침</h3>
          {morning.map((item) => (
            <div key={item.name}>{item.name}</div>
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
