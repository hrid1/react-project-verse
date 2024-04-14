import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram  } 
from 'react-icons/fa'
import qzon1 from '../../assets/qZone1.png'
import qzon2 from '../../assets/qZone2.png'
import qzon3 from '../../assets/qZone3.png'


const RightsideNav = () => {
  return (
    <div >
      <div className="p-4 space-y-3 mb-6" >
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn outline w-full">
          <FaGoogle></FaGoogle>
          Sign in with Google
        </button>
        <button className="btn outline w-full">
        <FaGithub />
          Sign in with Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6" >
        <h2 className="text-2xl font-semibold">Find Us on</h2>
       <div>
       <a href="/facebook.com" className="flex items-center gap-3 text-xl border p-4 rounded-t-md ">
            <FaFacebook/>
            <span>Facebook</span>
        </a>
        <a href="/facebook.com" className="flex items-center gap-3 text-xl p-4 border-x ">
            <FaTwitter/>
            <span>Tweeter</span>
        </a>
        <a href="/facebook.com" className="flex items-center gap-3 text-xl border p-4 rounded-b-md ">
            <FaInstagram/>
            <span>Instagram</span>
        </a>
       </div>
       
      </div>

      {/* Q zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Q Zone</h2>

        <img src={qzon1} alt="" />
        <img src={qzon2} alt="" />
        <img src={qzon3} alt="" />
      
      </div>
    </div>
  );
};

export default RightsideNav;
