import { useState } from 'react';

import items from '@/constants/items';
import { timeKey, timeLabel } from '@/constants/labels';
import { LogType } from '@/constants/types';
import useLogData from '@/hooks/useData';
import useLocalItems from '@/hooks/useLocalItems';
import calcTotal from '@/utils/calcTotal';

import AddButton from './AddButton';
import AddModal from './AddModal';
import DeleteButtonMask from './DeleteButtonMask';
import LogItem from './LogItem';

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
    midnightSnack = []
}: DailyItemPropsType) => {
    const [openModal, setOpenModal] = useState(false);
    const { deleteLogData } = useLogData();
    const userItems = useLocalItems();

    const sum = calcTotal([morning, morningSnack, lunch, afternoonSnack, midMeal, dinner, midnightSnack]);

    return (
        <div>
            <div className="flex gap-2 items-baseline mb-4">
                <h2 className="text-2xl font-semibold">{date}</h2>
                {isToday && <span className="rounded bg-rose-400 text-xs text-white px-1 py-0.5">오늘</span>}
            </div>
            <div className="bg-orange-50/80 rounded-md px-5 py-4 my-5">
                <ul className="flex gap-4 justify-center text-sm">
                    <li className="border-r border-yellow-500/30 pr-3">
                        <strong className="font-normal mr-2">칼로리</strong>
                        <span className="font-semibold text-gray-500">{sum.kcal}kcal</span>
                    </li>
                    <li className="border-r border-yellow-500/30 pr-3">
                        <strong className="font-normal mr-2">탄수화물</strong>
                        <span className="font-semibold text-emerald-500">{sum.carbohydrate}g</span>
                    </li>
                    <li className="border-r border-yellow-500/30 pr-3">
                        <strong className="font-normal mr-2">단백질</strong>
                        <span className="font-semibold text-cyan-500">{sum.protein}g</span>
                    </li>
                    <li>
                        <strong className="font-normal mr-2"> 지방</strong>
                        <span className="font-semibold text-amber-500">{sum.fat}g</span>
                    </li>
                </ul>
            </div>
            {[morning, morningSnack, lunch, afternoonSnack, midMeal, dinner, midnightSnack].map((time, idx) => {
                if (time.length > 0) {
                    return (
                        <div key={timeLabel[idx]} className="mb-6">
                            <h3 className="text-xl font-medium mb-2">{timeLabel[idx]}</h3>
                            {/* <div className="grid grid-cols-3 gap-8"> */}
                            <div className="grid grid-cols-4 gap-10">
                                {time.map((item, itemIdx) => (
                                    <div key={`${date}-${timeLabel[idx]}-${itemIdx}`} className="relative group">
                                        <DeleteButtonMask onClick={() => deleteLogData(date, timeKey[idx], itemIdx)} />
                                        {item.isMine ? (
                                            userItems[item.index].isDeleted ? (
                                                <LogItem
                                                    name="삭제된 아이템"
                                                    carbohydrate={item.nutrition.carbohydrate}
                                                    protin={item.nutrition.protein}
                                                    fat={item.nutrition.fat}
                                                />
                                            ) : (
                                                <LogItem
                                                    name={userItems[item.index]?.name}
                                                    brand={userItems[item.index]?.brand}
                                                    image={userItems[item.index]?.image}
                                                    carbohydrate={item.nutrition.carbohydrate}
                                                    protin={item.nutrition.protein}
                                                    fat={item.nutrition.fat}
                                                />
                                            )
                                        ) : (
                                            <LogItem
                                                name={items[item.index]?.name}
                                                brand={items[item.index]?.brand}
                                                image={items[item.index]?.image}
                                                carbohydrate={item.nutrition.carbohydrate}
                                                protin={item.nutrition.protein}
                                                fat={item.nutrition.fat}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }
                return null;
            })}
            <AddButton onClick={() => setOpenModal(true)} />
            {openModal && <AddModal date={date} closeHandler={() => setOpenModal(false)} />}
        </div>
    );
};

export default DailyItem;
