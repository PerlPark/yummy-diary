export interface ItemType {
    index: number;
    image?: string;
    name: string;
    brand?: string;
    isMine?: boolean;
    g?: number;
    pcs?: number;
    nutrition: {
        kcal?: number;
        carbohydrate?: number;
        protein?: number;
        fat?: number;
    };
}

export type LogType = {
    index: number;
    mode: 'auto' | 'manual';
    isMine: boolean;
    intake: {
        amount: number;
        unit: 'g' | 'pcs';
    };
    nutrition: {
        kcal?: number;
        carbohydrate?: number;
        protein?: number;
        fat?: number;
        sugar?: number;
        salt?: number;
        transFat?: number;
        saturatedFat?: number;
        cholesterol?: number;
    };
};
