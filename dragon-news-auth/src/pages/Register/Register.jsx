import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {registerUser} = useContext(AuthContext)
  console.log(registerUser)

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    
    const name = form.get('name');
    const photo = form.get('image');
    const email = form.get('email');
    const password = form.get('password');

    // console.log(name, photo, email, password);

    // register user
    registerUser(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error.message)
    })

  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="flex items-center justify-center min-h-screen bg-gray-900 t">
        <div className="bg-gray-950 rounded-lg overflow-hidden shadow-md p-8 w-full sm:max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-200 text-center">
            Register Your Account
          </h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-200 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                placeholder="Enter your name"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-gray-200 font-bold mb-2"
              >
                Image Url
              </label>
              <input
                type="text"
                id="image"
                name="image"
                // value={formData.name}
                // onChange={handleChange}
                placeholder="Enter your name"
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-200 font-bold mb-2"
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
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-200 font-bold mb-2"
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
                className="appearance-none border rounded-md w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full "
            
            >
              Register
            </button>

            <p className="text-sm text-blue-500 text-center">
              Already Have an Account ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
