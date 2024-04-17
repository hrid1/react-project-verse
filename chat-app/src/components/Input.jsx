const Input = () => {
  return (
    <div className="bg-red-500 flex items-center text-gray-900 mb-3">
      <input
        className="w-11/12  pl-2 bg-slate-200 outline-none h-14 "
        placeholder="Type somehing..."
        type="text"
      />
      <button className="w-1/12 btn h-14  rounded-none">Send</button>
    </div>
  );
};

export default Input;
