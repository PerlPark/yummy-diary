import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import { itemsState } from '@/recoil/items';

const useLocalItems = () => {
    const [data, setData] = useRecoilState(itemsState);

    useEffect(() => {
        const localData = localStorage.getItem('items');

        if (localData) setData(JSON.parse(localData));
    }, [setData]);

    useEffect(() => {
        if (data.length > 0) {
            localStorage.setItem('items', JSON.stringify(data));
        }
    }, [data]);

    return data;
};

export default useLocalItems;
