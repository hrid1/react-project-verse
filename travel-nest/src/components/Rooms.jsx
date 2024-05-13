import { useContext } from "react";
import img1 from "../assets/images/room1.jpg";
import { AuthContext } from "../provider/AuthProvider";

const Rooms = () => {
  

  return (
    <section className="py-20 bg-gray-900 text-white px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src={img1}
              alt="Single Room"
              className="w-full md:w-auto h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Single Room</h2>
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus magna in libero efficitur, vel consequat eros tincidunt.
              Vivamus in feugiat arcu. Integer mattis velit quis nulla
              tincidunt, ac congue nulla suscipit.
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Bed: Single bed</li>
              <li>Occupancy: 1 person</li>
              <li>Price: $XX/night</li>
              <li>Facilities: Wi-Fi, TV, Air conditioning, etc.</li>
            </ul>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
