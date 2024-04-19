
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
       <div className='mx-auto max-w-6xl font-poppins bg-slate-200 text-gray-800'>
        <Outlet></Outlet>
       </div>
    );
};

export default Root;