/* eslint-disable @next/next/no-img-element */
type FoodItemPropsType = {
  image?: string;
  brand?: string;
  name: string;
  onClickHandler: () => void;
};

const FoodItem = ({
  image,
  brand,
  name,
  onClickHandler,
}: FoodItemPropsType) => {
  return (
    <button
      type="button"
      className="flex flex-col justify-start items-start text-left hover:bg-gray-100 p-2 rounded-md"
      onClick={onClickHandler}
    >
      <img
        src={image}
        alt=""
        className="rounded mb-2 w-full h-40 object-cover border"
      />
      <span className="text-xs text-gray-500">{brand}</span>
      <h3 className="text-base font-medium mt-0.5">{name}</h3>
    </button>
  );
};

export default FoodItem;
