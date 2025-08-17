
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Hotjob from "./Hotjob";
import JobIndustry from "./JobIndustry";
import ToptenCompany from "./ToptenCompany";
import Faqsection from "./Faqsection";
import AddstrraAd from "./AddstrraAd";


const Home = () => {
  const [job, setjobs] =useState([]);
   
    useEffect(() => {
        fetch('https://job-portal-server-ed8n.onrender.com/jobs')
            .then(res => res.json())
            .then(data =>setjobs(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto">
           <AddstrraAd></AddstrraAd>
           <Banner></Banner>
           <JobIndustry></JobIndustry>
            <div>
             <h1 className="text-center py-10 font-bold  md:text-2xl">Top 10 Largest Software Companies In The World</h1>
             <ToptenCompany></ToptenCompany>
           </div>
           <section  className=" mt-20 mb-10 grid md:grid-cols-3 gap-10">
             {
              
              job.map(job=> <Hotjob  job={job} key={job._id}></Hotjob>)
             }
           </section>
           <Faqsection></Faqsection>
        </div>
    );
};

export default Home;