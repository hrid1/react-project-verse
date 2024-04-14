
import { useContext } from "react";
import Navbar from "../../shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("Location in Login page: ", location)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // console.log(form.get("password"));
    const email = form.get('email');
    const password = form.get('password');
    loginUser(email, password)
    .then(result => {
      console.log(result);
      // navigate after login
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      console.log(error.message)
    })

  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Login Here</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-400 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                placeholder="Enter your email"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-400 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                // value={formData.password}
                // onChange={handleChange}
                placeholder="Enter your password"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-gray-700 focus:border-gray-500"
                required
              />
            </div>
            {/* for register */}
            <div className="mt-4 text-center">
          <p className="text-gray-400">New here? <Link to='/register' className="text-blue-400 hover:text-blue-200">Register now</Link></p>
        </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
