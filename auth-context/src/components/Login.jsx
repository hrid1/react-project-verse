import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {loginUser} = useContext(AuthContext);
  // console.log(loginUser);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password)

    loginUser(email, password)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error.message);
    })

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 rounded-md shadow-md bg-gray-800 text-white">
        <h2 className="text-2xl font-semibold mb-6">Login Form</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 text-sm">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/register" className="text-sm text-indigo-500 hover:underline">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
