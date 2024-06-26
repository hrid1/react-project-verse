import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState("");
    const [name , setName ] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    console.log(name, email, password);

    const handleRegister = event => {
        event.preventDefault();



    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 rounded-md shadow-md bg-gray-800 text-white">
        <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
        <form onSubmit={ handleRegister } className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm">
              Full Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-sm">
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
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
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
        
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-gray-300 mt-4 text-center">Already have an account? <Link to='/login' className="text-blue-400 hover:text-blue-300">Login here</Link>.</p>

      </div>
    </div>
    );
};

export default Register;