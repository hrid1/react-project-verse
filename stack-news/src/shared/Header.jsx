
import logo from './../assets/logo.png'
import moment from 'moment';
moment().format();


const Header = () => {
    return (
        <div className='text-center '>
            <img className='mx-auto bg-slate-200 p-2 rounded  mb-2' src={logo} alt="" />
            <h3 className='mb-2 text-xl '>Journalism Without Fear or Favour</h3>
           <p className=' font-semibold mb-2'>
            {
                 moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            }
           </p>

           

        </div>
    );
};

export default Header;