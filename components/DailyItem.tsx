import { ItemType } from '@/hooks/useGetLocalData';
import AddButton from './AddButton';

type DailyItemPropsType = {
  date: string;
  isToday?: boolean;
  data?: ItemType[];
};

const DailyItem = ({
  date,
  isToday = false,
  data = [],
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
    </div>
  );
};

export default DailyItem;
