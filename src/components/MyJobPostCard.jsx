import React from 'react';
import { FaMapMarkerAlt, FaEdit, FaTrashAlt, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyJobPostCard = ({ job, onDelete, onUpdate,onViewDetails}) => {
 
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    company,
    company_logo,
    status,
    applicationCount,
    
  } = job;

  return (
    <div className="bg-gradient-to-r  from-indigo-200  to-pink-300 ... rounded-2xl p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition hover:shadow-xl duration-300">
  {/* Logo & Info */}
  <div className="flex items-start md:items-center gap-5 flex-1">
    <img
      src={company_logo}
      alt={company}
      className="w-16 h-16 object-cover border border-gray-300 rounded-lg shadow-sm"
    />
    <div className="space-y-1">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">
        <span className="font-medium">{company}</span> • <span>{category}</span>
      </p>
      <p className="text-sm text-gray-500 flex items-center gap-1">
        <FaMapMarkerAlt className="text-gray-400" /> {location} • {jobType}
      </p>
      <div className="text-xs mt-2 space-y-1 text-gray-500">
        <p>
          <span className="font-semibold text-gray-700">Status:</span>{" "}
          <span className="capitalize">{status}</span>
        </p>
        <p>
          <span className="font-semibold text-gray-700">Deadline:</span>{" "}
          {applicationDeadline}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Application Count:</span>{" "}
           {applicationCount?applicationCount:'0'}
        </p>
        <p>
          <span className="font-semibold text-gray-700">Salary:</span>{" "}
          {salaryRange?.min} - {salaryRange?.max} BDT
        </p>
      </div>
    </div>
  </div>

  {/* Buttons */}
  <div className="flex  gap-2 md:flex-col md:items-end">
  <div>
      <button
      onClick={() => onViewDetails(_id)}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition"
    >
      <FaInfoCircle /> Details
    </button>
  </div>
   <div>
     <Link
      to={`/UpdateJobPost/${_id}`}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-sm transition"
    >
      <FaEdit /> Update
    </Link>
   </div>
   
   <div>
      <button
      onClick={() => onDelete(_id)}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm transition"
    >
      <FaTrashAlt /> Delete
    </button>
   </div>
  </div>
</div>

  );
};

export default MyJobPostCard;
