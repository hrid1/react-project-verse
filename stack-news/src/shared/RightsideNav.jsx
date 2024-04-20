import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import qzone1 from '../assets/qZone1.png'
import qzone2 from '../assets/qZone2.png'
import qzone3 from '../assets/qZone3.png'


const RightsideNav = () => {
  return (
    <div className="">
      {/* login part */}
      <div className="mb-4 p-2">
        <h1 className=" text-2xl font-bold mb-3 ">Login With</h1>
        <button className="btn btn-outline text-gray-800 mb-2 w-56">
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button className="btn btn-outline text-gray-800 mb-2 w-56">
          <FaGithub />
          <p>Login with Github</p>
        </button>
      </div>

      {/* find us on */}
      <div className="mb-4 p-2">
        <h2 className="text-2xl font-bold mb-2">Find Us On</h2>

        <div className="border border-gray-400 p-3 w-56 flex items-center gap-2 rounded-t">
          <FaFacebook />
          Facebook
        </div>
        <div className="border border-gray-400 p-3 w-56 flex items-center border-y-0 gap-2 ">
          <FaTwitter />
          Twitter
        </div>
        <div className="border border-gray-400 p-3 w-56 flex items-center gap-2 rounded-b">
          <FaInstagram />
          Instagram
        </div>
      </div>

      {/* Q-zone */}

      <div className="bg-gray-300 p-2 rounded">
        <h1 className="text-2xl font-bold  mb-4 ">Q-Zone</h1>

        <div>
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default RightsideNav;
