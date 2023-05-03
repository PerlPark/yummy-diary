/* eslint-disable @next/next/no-img-element */
type FoodItemPropsType = {
    image?: string;
    brand?: string;
    name: string;
    onClickHandler: () => void;
    onClickDeleteBtnHandler?: () => void;
};

const FoodItem = ({ image, brand, name, onClickHandler, onClickDeleteBtnHandler }: FoodItemPropsType) => {
    return (
        <div className="relative w-full">
            <div className="absolute right-3 top-3 px-2 pb-0.5 bg-white/70 rounded">
                <button type="button" onClick={onClickDeleteBtnHandler} className="text-xs">
                    삭제
                </button>
            </div>
            <button
                type="button"
                className="w-full flex flex-col justify-start items-start text-left hover:bg-gray-100 p-2 rounded-md"
                onClick={onClickHandler}
            >
                <img src={image} alt="" className="rounded mb-2 w-full h-40 object-cover border" />
                <span className="text-xs text-gray-500">{brand}</span>
                <h3 className="text-base font-medium mt-0.5">{name}</h3>
            </button>
        </div>
    );
};

export default FoodItem;
