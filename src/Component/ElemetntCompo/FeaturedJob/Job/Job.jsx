import { IoLocation } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const {id,logo , job_title,company_name,remote_or_onsite,job_type,salary,location}=job


  return (
    <div>
      <div className="card bg-base-200 border-white border-2 shadow-xl">
        <figure>
          <img src={logo} className="w-28 h-20"/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <h4>{company_name}</h4>
          <div>
            <button className="btn btn-primary"> {remote_or_onsite}</button>
            <button className="btn btn-primary ml-4"> {job_type}</button>
          </div>
          <div className="flex gap-5">
               <div className="flex items-center gap-3">
                    <IoLocation/>
                    <h3>{location}</h3>
                </div> 
               <div className="flex items-center gap-3">
                    <CiDollar/>
                    <h3>{location}</h3>
                </div> 
          </div>
          <div  className="card-actions ">
            <Link to={`job/${id}`}>
            <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
