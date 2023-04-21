import { atom } from 'recoil';

import { LogType } from '@/constants/types';

type TimeLogDataType = {
    morning: LogType[];
    morningSnack: LogType[];
    lunch: LogType[];
    afternoonSnack: LogType[];
    midMeal: LogType[];
    dinner: LogType[];
    midnightSnack: LogType[];
};

export type timeType = keyof TimeLogDataType;

export interface Data extends TimeLogDataType {
    date: string;
}

export const dataState = atom<Data[]>({
    key: 'dataState',
    default: []
});
