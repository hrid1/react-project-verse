import profile from './../../public/avatorProfle.png'

const Navbar = () => {
  return (
    <div className="flex justify-between gap-4 bg-slate-900 p-2 h-16 items-center ">
      <h1 className="font-bold">UGV</h1>
      <div className='flex items-center gap-2'>
        <img className="inline w-6 h-6 rounded-full" src={profile} alt="abc" />
        <span className="text-white">Jhon</span>
        <button className=" btn btn-accent btn-xs ">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
