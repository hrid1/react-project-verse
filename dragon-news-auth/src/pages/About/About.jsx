import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";

const About = () => {
 
  return (

    <>

    <Header></Header>
    <Navbar></Navbar>
    
    <div className="bg-gray-800 min-h-screen py-8 text-center">
      <div className=" mx-auto px-4 my-6">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our news website! We strive to provide you with the latest and most relevant news from around the world. Our team of dedicated journalists works tirelessly to bring you accurate and timely information on a wide range of topics, including politics, technology, health, entertainment, and more.
        </p>
        <p className="text-lg mb-4">
          Our mission is to keep you informed and empowered with news and analysis that matter to you. Whether youre interested in breaking news, in-depth features, or thought-provoking opinion pieces, weve got you covered.
        </p>
        <p className="text-lg mb-4">
          We value integrity, objectivity, and transparency in our reporting. Our goal is to maintain the highest standards of journalism while serving our audience with fairness and respect.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing us as your source for news. We appreciate your trust and support.
        </p>
      </div>
    </div>
    
    </>
    

   
  );
};

export default About;
