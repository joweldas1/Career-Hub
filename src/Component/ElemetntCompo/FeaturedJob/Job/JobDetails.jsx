import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../../../uitilities/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);


  const back=useNavigate()
  const handleBack=()=>{
back(-1)
  }

  const handleOnClick = () => {
    saveJobApplication(intId)
     toast("Submit done");
  };

  return (
    <div>
      <h2 className="text-center text-white text-5xl ">Job details of :{id}</h2>
      <div className="grid md:grid-cols-4 my-9 gap-3">
        <div className="col-span-3 border-2 p-2 border-white">
          <h3 className="text-center">
            
            <strong>Job Description:</strong> {job.job_description}
          </h3>
          <h3 className="my-6">
            <strong>Job Responsibility:</strong> {job.job_responsibility}
          </h3>
          <h3>
            <strong>Educational Requirements</strong>:
            {job.educational_requirements}
          </h3>
          <h3>
            <strong>Experience</strong>
            {job.experiences}
          </h3>
        </div>



        <div className=" border-2 p-2 border-white">
          <h3 className="text-center">
            <strong>Job Details</strong>
          </h3>
          <hr />
          <h2>
            
            <strong>Selary:</strong> {job.salary}
          </h2>
          <h2>
            
            <strong>Job Title:</strong> {job.job_title}
          </h2>

          <h3 className="mt-3 text-center">
            <strong>Contact</strong>
          </h3>
          <hr />
          <h3>
            <strong>Phone:</strong> {job.contact_information.phone}
          </h3>
          <h3>
            <strong>Email:</strong> {job.contact_information.email}
          </h3>
          <h3>
            <strong>Address:</strong> {job.contact_information.address}
          </h3>

          <div className="mt-4 text-center">
            <button onClick={handleOnClick} className="btn btn-success">
              Apply
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div>
        <button onClick={handleBack}>Go Back</button>
    <Link to="/"> <button>Back to previous page</button> </Link>

      </div>
    </div>
  );
};

export default JobDetails;
