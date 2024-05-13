

const Contact = () => {
    return (
        <div className="bg-gray-900 text-white py-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-8">
                    {/* Contact Form */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email address" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Send Message</button>
                        </form>
                    </div>
                    {/* Contact Info */}
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold">Address</h3>
                                <p>123 Street Name</p>
                                <p>City, State, Zip Code</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Phone</h3>
                                <p>+1234567890</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">Email</h3>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;