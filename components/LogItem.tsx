/* eslint-disable @next/next/no-img-element */
type FoodItemPropsType = {
  image?: string;
  brand?: string;
  name: string;
  carbohydrate?: number;
  protin?: number;
  fat?: number;
};

const LogItem = ({
  image,
  brand,
  name,
  carbohydrate,
  protin,
  fat,
}: FoodItemPropsType) => {
  return (
    <div className="flex gap-x-3">
      <div className="rounded-md w-32 h-32 border">
        {image && (
          <img
            src={image}
            alt=""
            className="rounded mb-2 h-full object-cover"
          />
        )}
      </div>
      <div className="w-36">
        <span className="text-xs text-gray-500">{brand}</span>
        <h3 className="text-sm font-medium mt-0.5">{name}</h3>
        <div className="flex border-t border-dotted pt-2 mt-2">
          <div className="flex flex-col text-center flex-grow border-r">
            <span className="text-xs text-gray-500">탄</span>
            <span className="text-sm font-medium">{carbohydrate || '-'}g</span>
          </div>
          <div className="flex flex-col text-center flex-grow border-r">
            <span className="text-xs text-gray-500">단</span>
            <span className="text-sm font-medium">{protin || '-'}g</span>
          </div>
          <div className="flex flex-col text-center flex-grow">
            <span className="text-xs text-gray-500">지</span>
            <span className="text-sm font-medium">{fat || '-'}g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogItem;
