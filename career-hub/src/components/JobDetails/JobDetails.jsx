import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
        toast("Job Applied Successfully!");
  }

  // console.log(job);
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;

  return (
    <div>
      <h2 className="text-center">Job details of: {id}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-4">
          <div>
            <h1 className="inline font-bold">Job Description: </h1>
            <p className="inline">{job_description}</p>
          </div>
          <div className="mt-4">
            <h1 className="inline font-bold">Job Responsibility: </h1>
            <p className="inline">{job_responsibility}</p>
          </div>
          <div className="mt-4">
            <h1 className="inline font-bold">Educational Requirments: </h1>
            <p className="inline">{educational_requirements}</p>
          </div>
          <div className="mt-4">
            <h1 className="inline font-bold">Experience: </h1>
            <p className="inline">{experiences}</p>
          </div>
        </div>
        <div className="border rounded-md">
            <div className="p-5">
            <h2 className="font-bold my-2">Job Details</h2>
            <hr className="my-3 mx-auto shadow" />
            <p><span className="font-semibold">Salary: </span>{salary} (Per Month)</p>
            <p><span className="font-semibold">Job Title: </span>{job_title} </p>

            <h2 className="font-bold my-2">Contact Information </h2>
            <hr className="my-3 mx-auto shadow" />
            <p><span className="font-semibold">Phone: </span>{contact_information.phone} </p>
            <p><span className="font-semibold">Email: </span>{contact_information.email} </p>
            <p><span className="font-semibold">Address: </span>{contact_information.address} </p>
            </div>

            <button onClick={handleApplyJob} className="btn btn-primary mt-8 w-full">Apply Now</button>

        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
