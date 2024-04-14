// import moment from 'moment/moment';
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center p-4'>
            <img className='bg-white mx-auto p-2 m-2 rounded-lg' src={logo} alt="" />
            <p>Journalism Without Fear of Favour</p>
            
            <p className='text-xl'> {moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;