import { FaSquareWebAwesome } from 'react-icons/fa6';
import {  Link, useLoaderData } from 'react-router-dom';

const Jobdetails = () => {
    const job=useLoaderData()
      const {
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    hr_email,
    hr_name,
      _id,
      applicationCount
  } = job;
    return (
       <div className='p-2 bg-gradient-to-r  from-indigo-400  to-pink-400 ... '>
         
        <div className="bg-gradient-to-r  from-indigo-200  to-pink-200 ...  max-w-5xl mx-auto p-6 shadow-md rounded-xl my-10">
        <div className='py-5 '>
               <Link to="/" className=" text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </Link>
          </div>
      {/* Header */}
       
      <div className="flex items-center gap-4 mb-6">
        
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-cover rounded-xl border border-gray-300"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-500">{company}</p>
        </div>
      </div>

      {/* Job Meta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
        <p>
          <strong>📍 Location:</strong> {location}
        </p>
        <p>
          <strong>🗂 Category:</strong> {category}
        </p>
        <p>
          <strong>💼 Job Type:</strong> {jobType}
        </p>
        <p>
          <strong>📅 Deadline:</strong> {applicationDeadline}
        </p>
        <p>
          <strong>💰 Salary:</strong> {salaryRange?.min} - {salaryRange?.max}{" "}
          {salaryRange?.currency?.toUpperCase()}
        </p>
        <p className='flex items-center gap-1'>
          <FaSquareWebAwesome></FaSquareWebAwesome>
          <strong className=''> Applicatin Count:</strong> {applicationCount?applicationCount:'0'}
        </p>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Requirements</h2>
        <div className="flex flex-wrap gap-2">
          {requirements.map((req, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-3 py-1 text-sm rounded-full text-gray-700"
            >
              ✅ {req}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 p-4 rounded-lg border mt-6">
        <h3 className="font-medium text-gray-800 mb-2">HR Contact</h3>
        <p className="text-gray-600 text-sm">👨‍💼 {hr_name}</p>
        <p className="text-blue-600 text-sm">📧 {hr_email}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-8">
        <Link to={`/jobapply/${_id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
          Apply for this job
        </Link>
      </div>
    </div>
       </div>
    );
};

export default Jobdetails;