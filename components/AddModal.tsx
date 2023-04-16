/* eslint-disable @next/next/no-img-element */
import items from '@/constants/items';
import AddButton from './AddButton';
import { useState } from 'react';
import labels from '@/constants/labels';
import { selector } from 'recoil';
import { ItemType } from '@/recoil/data';

type AddModalPropsType = {
  date: string;
  closeHandler: () => void;
};

const AddModal = ({ date, closeHandler }: AddModalPropsType) => {
  const [selected, setSelected] = useState<ItemType>();

  const a = selector({
    key: 'dataState',
    get: ({ get }) => [],
    set: ({ set }) => {},
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950/20 px-4 overflow-auto z-50">
      <div className="max-w-3xl mx-auto my-4 bg-white rounded-lg shadow p-6 relative">
        <h1 className="text-3xl font-semibold mb-3">추가하기</h1>
        <span className="text-lg">{date}</span>
        <button
          type="button"
          onClick={closeHandler}
          className="absolute right-0 top-0"
        >
          닫기
        </button>

        <div className="border-b border-b-gray-300 pb-4 mb-5">
          {!selected && (
            <div className="py-10 text-center">아이템을 선택해 주세요.</div>
          )}
          {selected && (
            <div className="flex mt-5 gap-4">
              <img
                src={selected.image}
                alt=""
                className="rounded mb-2 w-2/5 object-cover bg-slate-100"
              />
              <div>
                <span className="text-sm text-gray-500">{selected.brand}</span>
                <h3 className="text-xl font-medium mt-1 mb-6">
                  {selected.name}
                </h3>
                <div className="grid grid-cols-2 gap-x-5 gap-y-2">
                  {Object.keys(selected.nutrition).map((key) => (
                    <div key={key} className="flex gap-1">
                      <label className="block w-20 text-sm font-medium">
                        {labels[key]}
                      </label>
                      <input
                        type="text"
                        defaultValue={
                          selected.nutrition[key as keyof ItemType['nutrition']]
                        }
                        className="rounded bg-gray-100 px-3 py-1 text-sm w-24"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="border rounded border-gray-300  w-full h-11"
                  >
                    등록하기
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <h2 className="text-xl font-semibold mb-4">등록된 아이템</h2>
        {Object.values(items).map((item, idx) => {
          return (
            <button
              type="button"
              key={idx}
              className="w-40 text-left hover:bg-gray-100 p-2 rounded-md"
              onClick={() => {
                setSelected(item);
              }}
            >
              <img
                src={item.image}
                alt=""
                className="rounded mb-2 h-40 object-cover"
              />
              <span className="text-xs text-gray-500">{item.brand}</span>
              <h3 className="text-base font-medium mt-0.5">{item.name}</h3>
            </button>
          );
        })}
        <AddButton text="새 아이템 추가하기" onClick={() => {}} />
      </div>
    </div>
  );
};

export default AddModal;
