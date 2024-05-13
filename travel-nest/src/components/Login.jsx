import { useState } from 'react';
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto max-w-md">
                <h1 className="text-4xl font-bold text-center mb-8">Sign In </h1> 
                <div className="bg-gray-800 p-6 rounded-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-2 font-semibold">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-4 relative">
                            <label htmlFor="password" className="block text-sm mb-2 font-semibold">Password</label>
                            <input type={showPassword ? "text" : "password"} id="password" name="password" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center px-2" onClick={toggleShowPassword}>
                                <div className='mt-7'>
                                {showPassword ? (
                                    <IoMdEye></IoMdEye>
                                ) : (
                                    
                                        < IoIosEyeOff />
                                    
                                )}
                                </div>
                            </button>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">Sign In</button>
                    </form>
                    <p className="mt-4 text-center text-sm">Don&apos;t  have any account? <Link to='/register' className="text-blue-400 hover:underline">Register now</Link></p>
                    <div className="flex justify-center mt-4 space-x-4">
                        <button className="bg-indigo-900 text-white px-6 py-2 rounded-md hover:bg-indigo-950 transition duration-300 ease-in-out">Sign in with Google</button>
                        <button className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out">Sign in with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;