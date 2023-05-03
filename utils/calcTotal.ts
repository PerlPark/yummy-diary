import { LogType } from '@/constants/types';

interface ReturnType {
    kcal: number;
    carbohydrate: number;
    protein: number;
    fat: number;
}

const initialData = {
    kcal: 0,
    carbohydrate: 0,
    protein: 0,
    fat: 0
};

const calcTotal = (times: LogType[][]) => {
    return times.reduce((sum, curr): ReturnType => {
        const item = curr.reduce((sum, item): ReturnType => {
            return {
                kcal: sum.kcal + (item.nutrition.kcal || 0),
                carbohydrate: sum.carbohydrate + (item.nutrition.carbohydrate || 0),
                protein: sum.protein + (item.nutrition.protein || 0),
                fat: sum.fat + (item.nutrition.fat || 0)
            };
        }, initialData);

        return {
            kcal: sum.kcal + item.kcal,
            carbohydrate: sum.carbohydrate + item.carbohydrate,
            protein: sum.protein + item.protein,
            fat: sum.fat + item.fat
        };
    }, initialData);
};

export default calcTotal;
