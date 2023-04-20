import { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';

import { DATE_FORMAT } from '@/constants/date';

dayjs.extend(duration);
dayjs.extend(isToday);

type CalendarPropsType = {
    selected: dayjs.Dayjs;
    onClickDate: (date: string) => void;
};

const Calendar = ({ selected, onClickDate }: CalendarPropsType) => {
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const [year, setYear] = useState(selected.get('year'));
    const [month, setMonth] = useState(selected.get('month') + 1);
    const ym = `${year}-${month}`;

    const daysInMonth = dayjs(ym).daysInMonth();
    const startDay = dayjs(ym).get('day');

    return (
        <div className="absolute top-10 -left-5 bg-white w-80 overflow-hidden shadow-md rounded-lg border z-20">
            <div className="flex gap-2 border-b p-3 justify-center items-center">
                <button
                    type="button"
                    onClick={() => {
                        if (month > 1) {
                            setMonth((v) => v - 1);
                        } else {
                            setMonth(12);
                            setYear((v) => v - 1);
                        }
                    }}
                >
                    <ChevronLeftIcon className="w-4 h-4" />
                </button>
                {year}년 / {month}월
                <button
                    type="button"
                    onClick={() => {
                        if (month < 12) {
                            setMonth((v) => v + 1);
                        } else {
                            setMonth(1);
                            setYear((v) => v + 1);
                        }
                    }}
                >
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
            </div>
            <div className="grid grid-cols-7 py-3 px-2 gap-y-3 text-center">
                {week.map((day) => (
                    <div key={day}>{day}</div>
                ))}
                {Array.from({ length: startDay }, (_, i) => (
                    <div key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => ({
                    date: dayjs(new Date(year, month - 1, i + 1))
                })).map((obj) => (
                    <button
                        type="button"
                        key={obj.date.format(DATE_FORMAT)}
                        onClick={() => onClickDate(obj.date.format(DATE_FORMAT))}
                        className={`relative ${
                            obj.date.isToday()
                                ? 'relative after:content-[" "] after:block after:bg-rose-300 after:w-1 after:h-1 after:rounded-full after:absolute after:top-1 after:left-1.5'
                                : ''
                        } ${selected.isSame(obj.date) ? 'border border-rose-300 rounded-full relative' : ''}`}
                    >
                        {obj.date.format('D')}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
