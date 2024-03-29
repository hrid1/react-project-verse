const getStoredJobApplication = () => {
   const getStoredJobApplication = localStorage.getItem('job-applications');
   if (getStoredJobApplication) {
    return JSON.parse(getStoredJobApplication);
   }
   return [];
}


const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication));
    }
}

export { saveJobApplication, getStoredJobApplication }