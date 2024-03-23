const getStoredApplication=()=>{
    const storedApplication=localStorage.getItem('job-Application');
    if(storedApplication){
        return JSON.parse(storedApplication); 
    }return []
}

const saveJobApplication=(id)=>{
    const jobApplication=getStoredApplication()
    const existed=jobApplication.find((jobID)=>jobID===id)
    if(!existed){
        jobApplication.push(id)
        localStorage.setItem("job-Application",JSON.stringify(jobApplication))
    }

}
export {getStoredApplication,saveJobApplication}