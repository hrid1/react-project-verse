import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">HotelBooking</h3>
                    <p className="text-sm">Find your perfect stay with us</p>
                </div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                    <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                    <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                </ul>
                <div className="flex mt-4 md:mt-0">
                    <a href="#" className="mr-4 hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                        </svg>
                    </a>
                    <a href="#" className="hover:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l6-6 2 2 4-4 6 6-6 6-4-4-2 2-6-6z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p>&copy; 2024 HotelBooking. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;