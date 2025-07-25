import  { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { div } from "motion/react-client";

const AddJob = () => {
  const {user}=useContext(AuthContext)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    category: "",
    applicationDeadline: "",
    salaryMin: "",
    salaryMax: "",
    salaryCurrency: "bdt",
    description: "",
    company: "",
    requirements: "",
    responsibilities: "",
    status: "",
    hr_email: "",
    hr_name: "",
    company_logo_base64: "", // base64 string of image
  });

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Convert image file to base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        company_logo_base64: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data for backend
    const dataToSend = {
      title: formData.title,
      location: formData.location,
      jobType: formData.jobType,
      category: formData.category,
      applicationDeadline: formData.applicationDeadline,
      salaryRange: {
        min: Number(formData.salaryMin),
        max: Number(formData.salaryMax),
        currency: formData.salaryCurrency,
      },
      description: formData.description,
      company: formData.company,
      requirements: formData.requirements
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      responsibilities: formData.responsibilities
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      status: formData.status,
      hr_email: user && user.email,
      hr_name: user&& user.displayName,
      company_logo: formData.company_logo_base64, // base64 image string
    };

    
    // TODO: send dataToSend to backend using fetch/axios
     console.log(dataToSend)

  };

  return (
    <div className="bg-gradient-to-r  py-1 from-indigo-400  to-pink-400 ...">
        <div className="mt-10 mb-10">
            <form
      onSubmit={handleSubmit}
      className=" bg-gradient-to-r   from-indigo-200  to-pink-300 ... max-w-4xl mx-auto p-8  shadow rounded"
    >
      <h2 className="text-2xl text-center font-bold mb-4">Post A Job</h2>

      {/* Title */}
      <label className="block mb-2">
        Job Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Location */}
      <label className="block mb-2">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Job Type */}
      <label className="block mb-2">
        Job Type:
        <input
          type="text"
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Category */}
      <label className="block mb-2">
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Application Deadline */}
      <label className="block mb-2">
        Application Deadline:
        <input
          type="date"
          name="applicationDeadline"
          value={formData.applicationDeadline}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Salary Min */}
      <label className="block mb-2">
        Salary Minimum:
        <input
          type="number"
          name="salaryMin"
          value={formData.salaryMin}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          min={0}
        />
      </label>

      {/* Salary Max */}
      <label className="block mb-2">
        Salary Maximum:
        <input
          type="number"
          name="salaryMax"
          value={formData.salaryMax}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
          min={0}
        />
      </label>

      {/* Salary Currency (readonly) */}
      <label className="block mb-2">
        Salary Currency:
        <input
          type="text"
          name="salaryCurrency"
          value={formData.salaryCurrency}
          readOnly
          className="w-full p-2 border rounded bg-gray-100"
        />
      </label>

      {/* Description */}
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Company */}
      <label className="block mb-2">
        Company:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Requirements (comma separated) */}
      <label className="block mb-2">
        Requirements (comma separated):
        <input
          type="text"
          name="requirements"
          value={formData.requirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="e.g. JavaScript, React, Node.js"
        />
      </label>

      {/* Responsibilities (comma separated) */}
      <label className="block mb-2">
        Responsibilities (comma separated):
        <input
          type="text"
          name="responsibilities"
          value={formData.responsibilities}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="e.g. Develop software, Code reviews"
        />
      </label>

      {/* Status */}
      <label className="block mb-2">
        Status:
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="e.g. active"
          required
        />
      </label>

      {/* HR Email */}
      <label className="block mb-2">
        HR Email:
        <input
          type="email"
          name="hr_email"
          value={user&& user.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* HR Name */}
      <label className="block mb-2">
        HR Name:
        <input
          type="text"
          name="hr_name"
          value={user&& user.displayName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      {/* Company Logo File Input */}
      <label className="block mb-2">
        Company Logo:
        <input
          type="file"
          name="company_logo"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </label>

      {/* Show preview if image selected */}
      {formData.company_logo_base64 && (
        <img
          src={formData.company_logo_base64}
          alt="Company Logo Preview"
          className="w-32 h-32 object-contain mb-4"
        />
      )}

      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
        </div>
    </div>
  );
};



export default AddJob;