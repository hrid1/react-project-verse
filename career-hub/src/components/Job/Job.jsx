import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = (job) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job.job;
  // console.log(job);

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>

          <div className="my-3">
            <button className="btn btn-outline btn-info  mr-3">
              {remote_or_onsite}
            </button>
            <button className="btn btn-outline btn-info p-3 mr-3">
              {job_type}
            </button>
          </div>

          <div className="flex gap-2 my-2">
            <div className="flex gap-1 items-center">
              <IoLocationOutline />
              {location}
            </div>
            <div className="flex gap-1 items-center">
              <RiMoneyDollarCircleLine />
              {salary}
            </div>
          </div>

          <div className="card-actions">
            <Link to={`job/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
