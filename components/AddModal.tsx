/* eslint-disable @next/next/no-img-element */
import items from '@/constants/items';
import AddButton from './AddButton';

const AddModal = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-950/20 px-4">
      <div className="max-w-3xl mx-auto my-4 bg-white rounded-lg shadow p-5">
        <h1 className="text-3xl font-semibold border-b border-b-gray-300 pb-3">
          추가하기
        </h1>
        <AddButton text="새 아이템 추가하기" />
        <h2 className="text-xl font-semibold mb-4">등록된 아이템</h2>
        {Object.values(items).map((item, idx) => {
          return (
            <button
              type="button"
              key={idx}
              className="w-40 text-left hover:bg-gray-100 p-2 rounded-md"
            >
              <img
                src={item.image}
                alt=""
                className="rounded mb-2 h-40 object-cover"
              />
              <span className="text-sm text-gray-500">{item.brand}</span>
              <h3 className="text-base font-medium mt-0.5">{item.name}</h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AddModal;
