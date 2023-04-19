import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const AddItemModal = () => {
  const [kcalChkbox, setKcalChkbox] = useState(false);
  const [tanChkbox, setTanChkbox] = useState(false);
  const [danChkbox, setDanChkbox] = useState(false);
  const [jiChkbox, setJiChkbox] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950/30 px-4 overflow-auto z-50">
      <div className="max-w-xl mx-auto my-12 bg-white rounded-lg shadow relative">
        <h1 className="text-2xl font-semibold mb-3 p-7 pb-3">
          나만의 아이템 추가하기
        </h1>
        <button
          type="button"
          onClick={() => {}}
          className="absolute right-4 top-4"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        <div className="border-t px-7 py-5">
          <ul>
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">
                아이템 명 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">브랜드</label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">이미지 (URL)</label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
              />
            </li>
          </ul>

          <p className="text-sm text-gray-500 mt-5 mb-2">
            영양 성분의 기준이 될 중량/개수를 입력해주세요.
          </p>
          <ul>
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">중량 (g)</label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">개수 (pcs)</label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
                defaultValue={1}
              />
            </li>
          </ul>

          <p className="text-sm text-gray-500 mt-5 mb-2">
            영양 성분을 입력해주세요.
          </p>
          <ul>
            <li className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="peer/kcal"
                onChange={(e) => {
                  setKcalChkbox(e.target.checked);
                }}
              />
              <label className=" text-sm font-medium w-24 text-gray-400 peer-checked/kcal:text-black">
                칼로리 (kcal)
              </label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
                disabled={!kcalChkbox}
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="peer/tan"
                onChange={(e) => {
                  setTanChkbox(e.target.checked);
                }}
              />
              <label className=" text-sm font-medium w-24 text-gray-400 peer-checked/tan:text-black">
                탄수화물 (g)
              </label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
                disabled={!tanChkbox}
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="peer/dan"
                onChange={(e) => {
                  setDanChkbox(e.target.checked);
                }}
              />
              <label className=" text-sm font-medium w-24 text-gray-400 peer-checked/dan:text-black">
                단백질 (g)
              </label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
                disabled={!danChkbox}
              />
            </li>
            <li className="flex gap-2 mb-2 items-center">
              <input
                type="checkbox"
                className="peer/ji"
                onChange={(e) => {
                  setJiChkbox(e.target.checked);
                }}
              />
              <label className=" text-sm font-medium w-24 text-gray-400 peer-checked/ji:text-black">
                지방 (g)
              </label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
                disabled={!jiChkbox}
              />
            </li>
          </ul>

          <ul className="border-t mt-6 pt-3">
            <li className="flex gap-2 mb-2 items-center">
              <label className=" text-sm font-medium w-24">출처</label>
              <input
                type="text"
                className="border rounded grow py-2 px-3 text-sm"
              />
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="w-full font-medium rounded-ee rounded-es mb-5 h-11 flex justify-center items-center gap-2 bg-rose-400 hover:bg-rose-300 text-white transition-colors"
        >
          등록하기
        </button>
      </div>
    </div>
  );
};

export default AddItemModal;
