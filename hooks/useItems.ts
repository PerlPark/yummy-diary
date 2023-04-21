import { useRecoilState } from 'recoil';

import { Items, itemsState } from '@/recoil/items';

const useItems = () => {
    const [items, setItems] = useRecoilState(itemsState);

    const setFoodItems = (item: Items) => {
        setItems([...items, item]);
    };

    return { items, setFoodItems };
};

export default useItems;
