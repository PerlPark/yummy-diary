import { TrashIcon } from '@heroicons/react/24/outline';

const DeleteButtonMask = () => {
  return (
    <div className="opacity-0 group-hover:opacity-100 transition flex justify-center items-center  absolute bg-white/90 w-full h-full">
      <button
        type="button"
        className="flex items-center gap-1 bg-rose-400 text-white py-1.5 pl-2 pr-3 rounded shadow"
      >
        <TrashIcon className="w-4 h-4" /> 삭제
      </button>
    </div>
  );
};

export default DeleteButtonMask;
