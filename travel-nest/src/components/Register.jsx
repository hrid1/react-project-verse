import { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [username, setuserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // console.log(email);

  const { createUser, setDisplayName } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setDisplayName(username)
          .then(() => {
            console.log("Profile update");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // if(!/[A-Z]/.test(password)){
  //     setError('At least one uppercase')
  // }
  // else if(!/a-z/.test(password)){
  //     setError('At least one lowercase')
  // }
  // else if(!/\d/.test(password)){
  //     setError('At least one digit')
  // }
  // else if(!/[#?!@$%^&*-]/.test(password)){
  //     setError('At least one special character')
  // }
  // else {
  //     setError('');
  // }

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Register Now</h1>
        <div className="bg-gray-800 p-6 rounded-lg">
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-1"
              >
                Name
              </label>
              <input
                onChange={(e) => setuserName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-1"
              >
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-1"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                name="password"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            {/* error message */}

            <div>
              <p className="text-center text-red-600 font-semibold">{error}</p>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
