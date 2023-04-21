import { atom } from 'recoil';

import { ItemType } from '@/constants/types';

export interface Items extends ItemType {
    ref?: string;
}

export const itemsState = atom<Items[]>({
    key: 'itemsState',
    default: []
});
