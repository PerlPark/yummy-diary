/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';

import { CalendarIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';

import NoImage from '@/assets/no-image.svg';
import items from '@/constants/items';
import { labels } from '@/constants/labels';
import { ItemType } from '@/constants/types';
import useLogData from '@/hooks/useData';
import useItems from '@/hooks/useItems';
import useLocalItems from '@/hooks/useLocalItems';
import { timeType } from '@/recoil/data';

import AddItemModal from './AddItemModal';
import Calendar from './Calendar';
import FoodItem from './FoodItem';

type AddModalPropsType = {
    date: string;
    closeHandler: () => void;
};

const AddModal = ({ date: initialDate, closeHandler }: AddModalPropsType) => {
    const { setLogData } = useLogData();
    const userItems = useLocalItems();
    const { deleteFoodItem } = useItems();

    const [selected, setSelected] = useState<ItemType>();

    const [date, setDate] = useState(initialDate);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [time, setTime] = useState<timeType>('morning');

    const [openAddItemModal, setOpenAddItemModal] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-950/30 px-4 overflow-auto z-50">
            <div className="max-w-3xl mx-auto my-12 bg-white rounded-lg shadow relative">
                <h1 className="text-3xl font-semibold mb-3 p-7 pb-3">추가하기</h1>
                <button type="button" onClick={closeHandler} className="absolute right-4 top-4">
                    <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="border-t border-b py-4 px-7 flex gap-2">
                    <div className="relative">
                        <button
                            type="button"
                            className="flex font-medium items-center gap-1.5 mr-4 "
                            onClick={() => setOpenCalendar((v) => !v)}
                        >
                            <span className="">{date}</span>
                            <CalendarIcon className="h-5 w-5 text-rose-400" />
                        </button>
                        {openCalendar && (
                            <Calendar
                                selected={dayjs(date)}
                                onClickDate={(date) => {
                                    setDate(date);
                                    setOpenCalendar(false);
                                }}
                            />
                        )}
                    </div>
                    <button
                        type="button"
                        className={`${time === 'morning' ? 'bg-rose-100' : 'bg-gray-100'} py-1 px-3 rounded`}
                        onClick={() => setTime('morning')}
                    >
                        아침
                    </button>
                    <button
                        type="button"
                        className={`${time === 'lunch' ? 'bg-rose-100' : 'bg-gray-100'} py-1 px-3 rounded`}
                        onClick={() => setTime('lunch')}
                    >
                        점심
                    </button>
                    <button
                        type="button"
                        className={`${time === 'dinner' ? 'bg-rose-100' : 'bg-gray-100'} py-1 px-3 rounded`}
                        onClick={() => setTime('dinner')}
                    >
                        저녁
                    </button>
                    {/* <button
            type="button"
            className="bg-gray-100 py-1 pl-3 pr-2 rounded flex items-center gap-2"
          >
            기타 <ChevronDownIcon className="w-3 h-3" />
          </button> */}
                </div>

                <div className="px-7 py-3">
                    <div className="pb-4 mb-5">
                        {!selected && <div className="py-10 text-center">아이템을 선택해 주세요.</div>}
                        {selected && (
                            <div className="flex mt-5 gap-4">
                                <div className="w-2/5 shrink-0">
                                    <div className="w-full overflow-hidden relative" style={{ paddingBottom: '100%' }}>
                                        <img
                                            src={selected.image || NoImage.src}
                                            alt=""
                                            className="rounded absolute top-0 left-0 w-full h-full object-cover border"
                                        />
                                    </div>
                                </div>
                                <div className="grow flex flex-col justify-between">
                                    <div>
                                        <span className="text-sm text-gray-500">{selected.brand}</span>
                                        <h3 className="text-xl font-medium mt-1 mb-6">{selected.name}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                                            {Object.keys(selected.nutrition).map((key) => {
                                                const value = selected.nutrition[key as keyof ItemType['nutrition']];
                                                if (value) {
                                                    return (
                                                        <div
                                                            key={`${selected.index}-${key}`}
                                                            className="flex gap-1 grow-0"
                                                        >
                                                            <label
                                                                htmlFor={`${key}Input`}
                                                                className="block w-20 text-sm font-medium shrink-0"
                                                            >
                                                                {labels[key]}
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id={`${key}Input`}
                                                                defaultValue={value}
                                                                className="rounded bg-gray-100 px-3 py-1 text-sm flex-grow"
                                                                style={{ width: 'calc(100% - 80px)' }}
                                                            />
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="border rounded w-full h-11 self-end mt-6"
                                        onClick={() => {
                                            setLogData(date, time, {
                                                index: selected.index,
                                                mode: 'auto',
                                                isMine: selected.isMine || false,
                                                intake: {
                                                    amount: 1,
                                                    unit: 'pcs'
                                                },
                                                nutrition: { ...selected.nutrition }
                                            });
                                            closeHandler();
                                        }}
                                    >
                                        등록하기
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="button"
                        className="w-full border rounded mb-5 h-11 flex justify-center items-center gap-2 hover:border-rose-300 hover:text-rose-500 transition-colors"
                        onClick={() => setOpenAddItemModal(true)}
                    >
                        <PlusIcon className="w-5 h-5" /> 나만의 아이템 추가하기
                    </button>
                    {openAddItemModal && <AddItemModal closeHandler={() => setOpenAddItemModal(false)} />}

                    {userItems.length > 0 && (
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">내가 추가한 아이템</h2>
                            <div className="-mx-2 grid grid-cols-4">
                                {userItems
                                    .filter((v) => !v.isDeleted)
                                    .map((item) => (
                                        <FoodItem
                                            key={item.index}
                                            name={item.name}
                                            brand={item.brand}
                                            image={item.image || NoImage.src}
                                            onClickHandler={() => setSelected(item)}
                                            onClickDeleteBtnHandler={() => deleteFoodItem(item.index)}
                                        />
                                    ))}
                            </div>
                        </div>
                    )}

                    <h2 className="text-xl font-semibold mb-2">등록된 아이템</h2>
                    <div className="-mx-2 grid grid-cols-4">
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
                </div>
            </div>
        </div>
    );
};

export default AddModal;
