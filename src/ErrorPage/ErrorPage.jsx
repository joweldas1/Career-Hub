import { Link, useNavigate } from "react-router-dom";



const ErrorPage = () => {
    const goBack=useNavigate()
    const handleClick=()=>{
        goBack(-1)
    }
    return (
        <div>
            Oppppppps.............
            {/* <Link to="/">Go back to home</Link> */}
            <button onClick={handleClick}>Go to Back</button>
        </div>
    );
};

export default ErrorPage;