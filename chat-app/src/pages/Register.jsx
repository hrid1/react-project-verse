import { Link } from "react-router-dom";
import { MdAddPhotoAlternate } from "react-icons/md";

const Register = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">

        <h3 className="text-2xl font-bold text-center mb-2 text-blue-400">
            UGV Live Chat
        </h3>

        <h2 className=" text-xl font-semibold text-center">Register</h2>
        <form>
          <div className="mb-2">
            <label htmlFor="username" className="block text-gray-200">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div className="mb-4 flex">
            <label htmlFor="profile-pic" className="text-gray-700">
             
             <div className="flex items-center gap-1 text-blue-300">
             <MdAddPhotoAlternate className="w-8 h-8 inline" />
              <span className="text-blue-300 text-sm">Add an avatar</span>{" "}
             </div>
            </label>
            <input
              type="file"
              id="profile-pic"
              name="profile-pic"
              accept="image/*"
              className="hidden mt-1  w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p className="my-2">You have an account? <Link className="text-blue-400" to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
