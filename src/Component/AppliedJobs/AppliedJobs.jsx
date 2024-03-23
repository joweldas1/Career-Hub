import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../uitilities/LocalStorage";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [getApplied, setApplied] = useState([]);
  const [displayJob,setDisplayJob]=useState([])

  const handleFilter=(value)=>{
    if(value=== 'all'){
        setDisplayJob(getApplied)
    }
        else if(value==='Remote'){
        const filter=getApplied.filter(f=>f.remote_or_onsite==="Remote")
        setDisplayJob(filter)
    }
    else if(value==="Onsite"){
        const filter=getApplied.filter(f=>f.remote_or_onsite==="Onsite")
        setDisplayJob(filter)
    }
  }

  useEffect(() => {
    const jobId = getStoredApplication();
    if (jobs.length > 0) {
      const appliedJob = jobs.filter((job) => jobId.includes(job.id));
      setApplied(appliedJob);
      setDisplayJob(appliedJob)
    }
  },[]);
  console.log(getApplied);

  return (
    <div>
      <h1>Job: {getApplied.length}</h1>

      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={()=>handleFilter("Remote")}>
            <a>Onsite</a>
          </li>
          <li onClick={()=>handleFilter("Onsite")}>
            <a>Remote</a>
          </li>
        </ul>
      </details>

      {displayJob.map((i) => (
        <div key={i.id} className="mt-40 max-w-7xl">
          <div className="flex justify-between">
            <div>
              {" "}
              <img className="w-32" src={i.logo} alt="" />{" "}
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{i.job_title}</h1>
              <h1 className="text-xl font-semibold">{i.company_name}</h1>
              <button>{i.remote_or_onsite}</button>
            </div>

            <div>
              {" "}
              <button className="btn btn-active">View Details</button>{" "}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJobs;
