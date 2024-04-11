// import moment from 'moment/moment';
import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <img className='bg-white mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear of Favour</p>
            
            <p className='text-xl'> {moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;