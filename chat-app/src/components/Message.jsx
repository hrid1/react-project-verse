import hero from '/hero.png'


const Message = () => {
    return (
        <div className="text-gray-950 flex flex-row-reverse  items-center  gap-6 mb-2">
            
            <div className="">
                <img className='w-8 h-8 rounded-full object-cover' src={hero} alt="adf" />
                <p className=" text-xs">just now</p>
            </div>

            <p className="rounded-lg rounded-tl-none  py-1 px-2 bg-white p">hello vai</p>
        </div>
    );
};

export default Message;