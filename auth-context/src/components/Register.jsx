import { Link } from "react-router-dom";
import  { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Register = () => {

  const {createUser, setUser} = useContext(AuthContext);


  const handleRegister = event => {

    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      setUser(result.user.email);
    })
    .catch(error => console.log(error.message))
    

   
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 rounded-md shadow-md bg-gray-800 text-white">
        <h2 className="text-2xl font-semibold mb-6">Registration Form</h2>
        <form onSubmit={handleRegister} className="space-y-4" >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-sm">
              Full Name
            </label>
            <input
              id="name"
              name="name"
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
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>

            <Link to="/login" className="text-sm text-indigo-500 hover:underline">
              Already Have an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
