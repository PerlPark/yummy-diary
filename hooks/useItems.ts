import { useRecoilState } from 'recoil';

import { Items, itemsState } from '@/recoil/items';

const useItems = () => {
    const [items, setItems] = useRecoilState(itemsState);

    const setFoodItems = (item: Items) => {
        setItems([...items, item]);
    };

    const deleteFoodItem = (index: number) => {
        const copyArr = [...items];
        const copyObj = { ...copyArr[index] };

        copyObj.isDeleted = true;
        copyArr[index] = copyObj;

        setItems(copyArr);
    };

    return { items, setFoodItems, deleteFoodItem };
};

export default useItems;
