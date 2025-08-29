import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import MyJobPostCard from "./MyJobPostCard";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const MyJobPost = () => {
       const [job,setMyJobPosts]=useState([]);
        const {user}=useContext(AuthContext)
   
        const navigate= useNavigate()
        useEffect(()=>{
            axios.get(`https://job-portal-server-seven-delta.vercel.app/my-jobposts?email=${user.email}`)
            .then(res=>setMyJobPosts(res.data))
        },[])
        const onDelete=(id)=>{
            Swal.fire({
                        title: "Are you sure you want to delete?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Confirm Delete"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            fetch(`https://job-portal-server-seven-delta.vercel.app/jobs/${id}`, {
                                method: 'DELETE'
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.deletedCount > 0) {
                                        setMyJobPosts(apply => apply.filter(apply => apply._id !== id));
                                        Swal.fire({
                                            title: "Successfully Deleted!",
                                            text: "Your Job Post has been deleted.",
                                            icon: "success"
                                        });
                                    }
                                })
            
                        }
                    });
        }
        const onUpdate=()=>{
            
        }
        const onViewDetails=(id)=>{
             navigate(`/jobdetails/${id}`)
        }
    return (
       <div className="min-h-screen px-4 bg-gradient-to-r  from-indigo-400  to-pink-400 ... ">
          <h1 className="text-3xl font-bold pt-10 text-center text-white">My Posted Job</h1>
          {
            job.length>0?(
                <div className="py-10">
                      {
                 job.map(job=><MyJobPostCard key={job._id} onViewDetails={onViewDetails} onDelete={onDelete} onUpdate={onUpdate} job={job}></MyJobPostCard>)
               }
                </div>
            ):(<div>
                <div className="min-h-screen flex justify-center items-center w-11/12 mx-auto">
                    <h1 className="lg:text-5xl md:text-3xl text-xl font-bold text-center text-white">No Job Posts Found!</h1>
                </div>
            </div>)
          }
          
            
             
             
          
          
          
       </div>
    );
};

export default MyJobPost;