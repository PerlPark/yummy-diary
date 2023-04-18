/* eslint-disable @next/next/no-img-element */
import items from '@/constants/items';
import AddButton from './AddButton';
import { useState } from 'react';
import labels from '@/constants/labels';
import { Data, ItemType, dataState } from '@/recoil/data';
import { useRecoilState } from 'recoil';
import FoodItem from './FoodItem';
import { CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Calendar from './Calendar';

type AddModalPropsType = {
  date: string;
  closeHandler: () => void;
};

const AddModal = ({ date: initialDate, closeHandler }: AddModalPropsType) => {
  const [data, setData] = useRecoilState(dataState);
  const [selected, setSelected] = useState<ItemType>();

  const [date, setDate] = useState(initialDate);

  const addLog = (item: ItemType) => {
    const todayIndex = data.findIndex((v) => v.date === date);

    const keyy = 'morning';

    if (todayIndex >= 0) {
      const copyData = [...data];
      const newData = {
        ...copyData[todayIndex],
        [keyy]: [...copyData[todayIndex][keyy], item],
      };
      copyData[todayIndex] = newData;
      setData(copyData);
      return;
    }

    const newData: Data = {
      date,
      morning: [],
      morningSnack: [],
      lunch: [],
      afternoonSnack: [],
      midMeal: [],
      dinner: [],
      midnightSnack: [],
    };

    newData.morning.push(item);

    setData(
      [...data, newData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950/30 px-4 overflow-auto z-50">
      <div className="max-w-3xl mx-auto my-12 bg-white rounded-lg shadow relative">
        <h1 className="text-3xl font-semibold mb-3 p-7 pb-3">추가하기</h1>
        <button
          type="button"
          onClick={closeHandler}
          className="absolute right-4 top-4"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="border-t border-b py-4 px-7 flex gap-7 relative">
          <button
            type="button"
            className="flex font-medium items-center gap-1.5"
          >
            <span className="">{date}</span>
            <CalendarIcon className="h-5 w-5 text-rose-400" />
          </button>
          <button>오전</button>
          <Calendar onClickDate={setDate} />
        </div>

        <div className="px-7 py-3">
          <div className="pb-4 mb-5">
            {!selected && (
              <div className="py-10 text-center">아이템을 선택해 주세요.</div>
            )}
            {selected && (
              <div className="flex mt-5 gap-4">
                <div className="w-2/5 mb-2">
                  <div
                    className="w-full overflow-hidden relative"
                    style={{ paddingBottom: '100%' }}
                  >
                    <img
                      src={selected.image}
                      alt=""
                      className="rounded absolute top-0 left-0 w-full h-full object-cover border bg-slate-100"
                    />
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">
                    {selected.brand}
                  </span>
                  <h3 className="text-xl font-medium mt-1 mb-6">
                    {selected.name}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                    {Object.keys(selected.nutrition).map((key) => (
                      <div
                        key={`${selected.index}-${key}`}
                        className="flex gap-1 grow-0"
                      >
                        <label className="block w-20 text-sm font-medium shrink-0">
                          {labels[key]}
                        </label>
                        <input
                          type="text"
                          defaultValue={
                            selected.nutrition[
                              key as keyof ItemType['nutrition']
                            ]
                          }
                          className="rounded bg-gray-100 px-3 py-1 text-sm flex-grow"
                          style={{ width: 'calc(100% - 80px)' }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="border rounded w-full h-11"
                      onClick={() => {
                        addLog(selected);
                        closeHandler();
                      }}
                    >
                      등록하기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-2">등록된 아이템</h2>
          <div className="-mx-2">
            {items.map((item) => (
              <FoodItem
                key={item.index}
                name={item.name}
                brand={item.brand}
                image={item.image}
                onClickHandler={() => setSelected(item)}
              />
            ))}
          </div>
          <AddButton text="새 아이템 추가하기" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default AddModal;
