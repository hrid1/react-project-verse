import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    console.log(email, password)

    const handleLogin = event => {
        event.preventDefault();

    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-100 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2 text-xl">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-300 mb-2 text-xl">
              Password
            </label>
            <input
              onChange={(e)=> setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-gray-100"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-gray-100 rounded-lg focus:outline-none hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <p className="text-gray-300 mt-4 text-center">Don&apost have an account? <Link to='/register' className="text-blue-400 hover:text-blue-300">Create one here</Link>.</p>

      </div>
    </div>
  );
};

export default Login;
