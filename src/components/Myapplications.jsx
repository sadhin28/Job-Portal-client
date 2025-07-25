import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';

const Myapplications = () => {
    const [applications,setapplication]=useState([]);
    const {user}=useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setapplication(data))
    },[])
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
                fetch(`http://localhost:5000/apply/${_id}`, {
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
    <div className="p-4 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">
    My Job Applications
  </h2>

  {/* Table view (Desktop & Tablet Only) */}
  <div className="overflow-x-auto rounded-xl shadow-md bg-gradient-to-r  from-indigo-200 via-purple-300 to-pink-200 ... hidden lg:block">
    <table className="min-w-full table-auto">
      <thead className="bg-gradient-to-r   from-indigo-500 via-purple-500 to-pink-500 ...  text-left text-sm uppercase text-white">
        <tr>
          <th className="py-3 px-6">Logo</th>
          <th className="py-3 px-6">Company</th>
          <th className="py-3 px-6">Title</th>
          <th className="py-3 px-6">Email</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {applications.map((app) => (
          <tr
            key={app._id}
            className="border-t hover:bg-gray-50 transition duration-300"
          >
            <td className="py-4 px-6">
              <img
                src={app.company_logo}
                alt="Company Logo"
                className="w-12 h-12 object-contain rounded-full border p-1"
              />
            </td>
            <td className="py-4 px-6 font-semibold">{app.company}</td>
            <td className="py-4 px-6">{app.title}</td>
            <td className="py-4 px-6">{app.applicant_email}</td>
            <td className="py-4 px-6 text-center">
              <button
                onClick={() => handleDelete(app._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition duration-200 shadow-md"
              >
                Delete
              </button>
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
  <div className="block lg:hidden mt-6 space-y-4">
    {applications.map((app) => (
      <div
        key={app._id}
        className="bg-gradient-to-r  from-indigo-200 via-purple-300 to-pink-200 ... p-4 rounded-xl shadow space-y-2 border"
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
          <button
            onClick={() => handleDelete(app._id)}
            className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 w-full"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

    );
};

export default Myapplications;