import { IoMdPersonAdd } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="bg-slate-500 col-span-2 relative  ">
     
     <header className="flex items-center px-4 justify-between h-16 bg-slate-700 text-gray-100">
        <h1 className="hover:cursor-pointer">Ryans</h1>

        <div className="text-white opacity-80 flex  gap-5">
          <MdCall className="text-xl"></MdCall>
          <IoMdPersonAdd className="text-xl"></IoMdPersonAdd>
          <BsThreeDots className="text-xl"></BsThreeDots>
        </div>
      </header>
      {/* msg section */}
      
     

      <div className="flex flex-col bg-green-500  h-full pb-12 justify-between">
         <Messages></Messages>
        <Input></Input>
      </div>
    </div>
  );
};

export default Chat;
