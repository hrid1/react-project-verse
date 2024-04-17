import user from "/avatorProfle.png";

const Search = () => {
  return (
    <div className="bg-slate-800 h-full">
      <input
        className="w-full border-b p-2 h-10 outline-none bg-slate-800"
        placeholder="Find a User"
        type="text"
      />

      {/* people */}

      <div className="bg-slate-800">
        <div className="h-14 p-2 mb-2  bg-gray-800 flex gap-4 items-center hover:cursor-pointer hover:bg-gray-900 ">
          <img
            className=" w-8 h-8 rounded-full object-cover"
            src={user}
            alt="a"
          />
          <div>
            <h3 className="font-semibold text-white">Tyler</h3>
            <p className="text-sm">heoo vai</p>
          </div>
        </div>
        <div className="h-14 p-2 mb-2  bg-gray-800 flex gap-4 items-center hover:cursor-pointer hover:bg-gray-900 ">
          <img
            className=" w-8 h-8 rounded-full object-cover"
            src={user}
            alt="a"
          />
          <div>
            <h3 className="font-semibold text-white">Tyler</h3>
            <p className="text-sm">heoo vai</p>
          </div>
        </div>
        <div className="h-14 p-2 mb-2  bg-gray-800 flex gap-4 items-center hover:cursor-pointer hover:bg-gray-900 ">
          <img
            className=" w-8 h-8 rounded-full object-cover"
            src={user}
            alt="a"
          />
          <div>
            <h3 className="font-semibold text-white">Tyler</h3>
            <p className="text-sm">heoo vai</p>
          </div>
        </div>
        <div className="h-14 p-2 mb-2  bg-gray-800 flex gap-4 items-center hover:cursor-pointer hover:bg-gray-900 ">
          <img
            className=" w-8 h-8 rounded-full object-cover"
            src={user}
            alt="a"
          />
          <div>
            <h3 className="font-semibold text-white">Tyler</h3>
            <p className="text-sm">heoo vai</p>
          </div>
        </div>
        <div className="h-14 p-2 mb-2  bg-gray-800 flex gap-4 items-center hover:cursor-pointer hover:bg-gray-900 ">
          <img
            className=" w-8 h-8 rounded-full object-cover"
            src={user}
            alt="a"
          />
          <div>
            <h3 className="font-semibold text-white">Tyler</h3>
            <p className="text-sm">heoo vai</p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Search;
