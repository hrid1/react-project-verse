import { useContext } from "react";
import hotel1 from "../assets/images/room1.jpg";
import hotel2 from "../assets/images/room2.jpg";
import hotel3 from "../assets/images/room3.jpg";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  //    const { displayName } = user;
  console.log(user);

  return (
    <div className="">
      <section className="bg-slate-800 text-white py-20 ">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Welcome to HotelBooking
          </h1>
          <p className="text-lg md:text-xl text-center mb-8">
            Find your perfect stay with us
          </p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter destination"
              className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              className="bg-gray-800 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* card section */}

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={hotel1}
                alt="Hotel 1"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-gray-200 font-bold text-xl mb-2">
                  Hotel One
                </h2>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={hotel2}
                alt="Hotel 2"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-gray-200 font-bold text-xl mb-2">
                  Hotel Two
                </h2>
                <p className="text-gray-400 text-sm">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <img
                src={hotel3}
                alt="Hotel 3"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-gray-200 font-bold text-xl mb-2">
                  Hotel Three
                </h2>
                <p className="text-gray-400 text-sm">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
