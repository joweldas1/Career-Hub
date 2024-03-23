import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const FeaturedJob = () => {
const [job,setJob]=useState([])
const [length,setLength]=useState(4)
useEffect(()=>{
    fetch('jobs.json')
    .then(res=>res.json())
    .then(data=>setJob(data))

},[])

    return (
        <div>
             <div className='my-10 '>
            <h2 className='text-4xl text-white text-center font-semibold'>
                Featured Job : {job.length}</h2>
            <p className='text-center text-2xl text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi commodi consequatur explicabo magni repellat numquam.</p>
        </div>
        <div>
           
        </div >
       <div className=' grid grid-cols-2 gap-5'>
       {
            job.slice(0,length).map((job)=> <Job key={job.id} job={job} ></Job> )
        }
       </div>
       <div
        // className={length===job.length && `hidden`}
        className={length===job.length?"hidden":""}
        >
        <button
        onClick={()=>setLength(job.length)}
         className='btn btn-accent '>Show All</button>
       </div>
        </div>
    );
};

export default FeaturedJob;