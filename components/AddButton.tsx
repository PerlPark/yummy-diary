const AddButton = ({ text }: { text?: string }) => {
  return (
    <div className="flex items-center h-24">
      <button
        type="button"
        className="rounded-full border-gray-300 border px-3 py-1 text-gray-500"
      >
        {text || '추가하기'}
      </button>
    </div>
  );
};

export default AddButton;
