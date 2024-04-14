import Navbar from "../../shared/Navbar";

const Career = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="bg-gray-800 text-white min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Join Our Team</h1>
          <p className="text-lg mb-4">
            Are you passionate about journalism and storytelling? Do you want to
            be part of a dynamic team that delivers news to millions of readers
            worldwide? If so, we want to hear from you!
          </p>
          <p className="text-lg mb-4">
            Our news website is always on the lookout for talented individuals
            who are dedicated to excellence and innovation. Whether you're a
            seasoned journalist, a skilled designer, a tech-savvy developer, or
            have expertise in any other relevant field, we encourage you to
            explore our current job openings and consider joining us on our
            mission to inform, inspire, and engage.
          </p>
          <h2 className="text-2xl font-bold mb-4">Current Openings</h2>
          <ul className="list-disc pl-6">
            <li className="text-lg mb-2">Senior Reporter - Politics</li>
            <li className="text-lg mb-2">Frontend Developer</li>
            <li className="text-lg mb-2">Social Media Manager</li>
            <li className="text-lg mb-2">Graphic Designer</li>
          </ul>
          <p className="text-lg mt-8">
            To apply for any of the positions listed above or to express your
            interest in joining our team, please send your resume and a cover
            letter to{" "}
            <span className="text-blue-500">careers@newswebsite.com</span>.
          </p>
          <p className="text-lg mt-4">We look forward to hearing from you!</p>
        </div>
      </div>
    </>
  );
};

export default Career;
