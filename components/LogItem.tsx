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
    <div>
      <div className="flex gap-x-3 items-start">
        <div className="rounded-md w-16 h-16 shrink-0 border overflow-hidden">
          {image && (
            <img
              src={image}
              alt=""
              className="rounded min-h-full object-cover"
            />
          )}
        </div>
        <div className="pt-0.5">
          <span className="block text-xs text-gray-500">{brand}</span>
          <h3 className="text-sm font-medium mt-0.5 break-keep">{name}</h3>
          {/* <span className="text-xs mt-2 font-medium">1/2개</span> */}
        </div>
      </div>
      <div className="flex border rounded-md  py-2 mt-2">
        <div className="flex flex-col text-center flex-grow border-r">
          <span className="text-xs text-gray-500">탄</span>
          <span className="text-sm font-medium">{carbohydrate ?? '-'}g</span>
        </div>
        <div className="flex flex-col text-center flex-grow border-r">
          <span className="text-xs text-gray-500">단</span>
          <span className="text-sm font-medium">{protin ?? '-'}g</span>
        </div>
        <div className="flex flex-col text-center flex-grow">
          <span className="text-xs text-gray-500">지</span>
          <span className="text-sm font-medium">{fat ?? '-'}g</span>
        </div>
      </div>
    </div>
    //   <div className="flex gap-x-3 h-36">

    //   </div>
    // </div>
    // </div>
  );
};

export default LogItem;
