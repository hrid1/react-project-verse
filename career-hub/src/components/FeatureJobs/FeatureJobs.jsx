import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setdataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])


    return (
        <div className="p-4 m-2">
            <div className="text-center">
               <h2 className="text-4xl">Feature Jobs {jobs.length}</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nam id quis eum nihil ab!</p>
            </div>     

            <div className="grid grid-cols-2 place-items-center gap-3">
                {
                    jobs.slice(0, dataLength).map(job => <Job id={job.id} job={job} ></Job>)
                }
            </div>

            <div className={ dataLength === jobs.length ? 'hidden': 'text-center'} >
                <button onClick={ () => setdataLength(jobs.length)} className="btn btn-primary"> Show More</button>
            </div>       
        </div>
    );
};

export default FeatureJobs;