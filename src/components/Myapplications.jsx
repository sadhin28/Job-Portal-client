import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Myapplications = () => {
    const [applications, setapplication] = useState([]);
    const { user } = useContext(AuthContext)
    useEffect(() => {
        // fetch(`https://job-portal-server-ed8n.onrender.com/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setapplication(data))
      axios.get(`https://job-portal-server-ed8n.onrender.com/job-application?email=${user.email}`)
      .then(res=>setapplication(res.data))
    }, [])
    
    useEffect(() => {
        fetch(`https://job-portal-server-ed8n.onrender.com/apply`)
            .then(res => res.json())
            .then(data => {

            })
    }, [])
    const handleDelete = (_id) => {
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
                fetch(`https://job-portal-server-ed8n.onrender.com/apply/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setapplication(apply => apply.filter(apply => apply._id !== _id));
                            Swal.fire({
                                title: "Successfully Deleted!",
                                text: "Your Application has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }
    return (
        <div className='min-h-screen bg-gradient-to-r  from-indigo-400  to-pink-400 ... '>
            <div className="pt-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
                My Job Applications
            </h2>

            {/* Table view (Desktop & Tablet Only) */}
            <div className="overflow-x-auto rounded-xl shadow-md bg-gradient-to-r  from-indigo-200 via-purple-300 to-pink-200 ... hidden lg:block">
                <table className="min-w-full table-auto">
                    <thead className="bg-gradient-to-r   from-indigo-500 via-purple-500 to-pink-500 ...   text-sm uppercase text-white">
                        <tr>
                            
                            <th className="py-3 px-6">Index</th>
                            <th className="py-3 px-6">Logo</th>
                            <th className="py-3 px-6">Company</th>
                            <th className="py-3 px-6">Title</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 ">
                        {applications.map((app,index) => (
                            <tr
                                key={app._id}
                                className="border-t hover:bg-gray-50 transition duration-300 text-center"
                            >     <td className="py-4 px-6 font-semibold">{index +1}</td>
                                <td className="py-4 px-6">
                                
                                    <img
                                        src={app.company_logo}
                                        alt="Company Logo"
                                        className="w-12 h-12 object-contain rounded-full border p-1"
                                    />
                                </td>
                                <td className="py-4 px-6 font-semibold">{app?.company}</td>
                                <td className="py-4 px-6">{app?.title}</td>
                                <td className="py-4 px-6">{app?.applicant_email}</td>
                                <td className='py-4 px-6'>{app?.status}</td>
                                <td className="py-4 px-3 space-x-1 text-center">
                                    <button
                                        onClick={() => handleDelete(app._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition duration-200 shadow-md"
                                    >
                                        Delete
                                    </button>
                                    <Link
                                       to={`/viewApplication/${app?.job_id}`}
                                        className="bg-green-500 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg transition duration-200 shadow-md"
                                    >
                                        View Application
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        {applications.length === 0 && (
                            <tr>
                                <td colSpan="5" className="py-6 text-center text-gray-500">
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Card view (Mobile Only) */}
            <div className="px-4 block lg:hidden mt-6 space-y-4">
                {applications.length > 0 ? (
                    <div className='grid gap-4'>
                        {applications.map((app) => (
                            <div
                                key={app._id}
                                className=" bg-gradient-to-r  from-indigo-200 via-purple-300 to-pink-200 ... p-4 rounded-xl shadow space-y-2 border"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={app.company_logo}
                                        alt="Logo"
                                        className="w-14 h-14 rounded-full object-contain border"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">{app.company}</h3>
                                        <p className="text-sm text-gray-500">{app.title}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-700">
                                        <span className="font-semibold">Email:</span>{" "}
                                        {app.applicant_email}
                                    </p>
                                   {
                                     app?.status &&<p className="text-sm text-gray-700">
                                       <span className="font-semibold">Status:</span>{" "}
                                        {app?.status}
                                    </p>
                                   }
                                    <div className='grid gap-3'>
                                        <button
                                        onClick={() => handleDelete(app._id)}
                                        className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 w-full"
                                    >
                                        Delete
                                    </button>
                                     <Link
                                     
                                       to={`/viewApplication/${app?.job_id}`}
                                        className="bg-red-500 text-center hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition duration-200 shadow-md"
                                    >
                                        View Application
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className=" flex justify-center items-center w-11/12 mx-auto">
                        <h1 className="lg:text-5xl mt-20 md:text-3xl text-xl font-bold text-center ">No applications found.!</h1>
                    </div>
                )
                }
            </div>
        </div>
        </div>

    );
};

export default Myapplications;