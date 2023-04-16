import { ItemType } from '@/hooks/useGetLocalData';
import AddButton from './AddButton';
import AddModal from './AddModal';

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
      <AddButton />
      <AddModal date={date} />
    </div>
  );
};

export default DailyItem;
