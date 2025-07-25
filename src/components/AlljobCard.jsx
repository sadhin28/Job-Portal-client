import Aos from "aos";
import { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { Link, } from "react-router-dom";

const AlljobCard = ({job}) => {
    
     const {
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
    _id
  } = job;

    useEffect(() => {
      Aos.init({ duration: 1000 }); // Animation duration in ms
    }, []);
 
    return (
        <div data-aos="zoom-in"  className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-lg p-6 transition hover:scale-[1.02] hover:shadow-2xl duration-300">
      {/* Badge */}
      <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
        {jobType}
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-cover rounded-xl shadow border border-gray-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      {/* Info Tags */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
          📍 {location}
        </span>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
          🗓 Deadline: {applicationDeadline}
        </span>
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
          💰 {salaryRange.min} - {salaryRange.max} {salaryRange.currency.toUpperCase()}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-700 leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Skills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {requirements?.map((skill, i) => (
          <span
            key={i}
            className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
          >
            🚀 {skill}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Link to={`/jobdetails/${_id}`} className="w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-300">
           <FaEye></FaEye>
           View Details
        </Link>
      </div>
    </div>
    );
};

export default AlljobCard;