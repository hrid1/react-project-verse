
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto max-w-md">
                <h1 className="text-4xl font-bold text-center mb-8">Register Now</h1>
                <div className="bg-gray-800 p-6 rounded-lg">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email Address</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold mb-1">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-1">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm your password" />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full">Sign Up</button>
                    </form>
                    <p className="mt-4 text-center text-sm">Already have an account? <Link to='/login' className="text-blue-400 hover:underline">Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;