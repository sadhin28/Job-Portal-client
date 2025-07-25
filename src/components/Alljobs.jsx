import  { useEffect, useState } from 'react';

import AlljobCard from './AlljobCard';

const Alljobs = () => {
     const [job, setjobs] =useState([]);
     
        useEffect(() => {
            fetch('http://localhost:5000/jobs')
                .then(res => res.json())
                .then(data =>setjobs(data))
        }, [])


         const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    let jobs = [...job];

    // Filter by title or category
    if (searchText) {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchText.toLowerCase()) ||
          job.category?.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Sort by salary
    if (sortOrder === "asc") {
      jobs.sort((a, b) => a.salaryRange.min - b.salaryRange.min);
    } else if (sortOrder === "desc") {
      jobs.sort((a, b) => b.salaryRange.max - a.salaryRange.max);
    }

    setFilteredJobs(jobs);
  }, [searchText, sortOrder, job]);
        
    return (
        <div className="px-4 w-11/12 mx-auto mb-10 mt-10">
      {/* Search & Filter Controls */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <input
          type="text"
          placeholder="Search by job title or category..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-indigo-200 bg-gradient-to-r  from-indigo-200  text-black px-4 py-2 w-full md:w-1/3 border  rounded-lg shadow-sm focus:outline-none"
        />

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="border-indigo-200 bg-gradient-to-r  from-indigo-200  text-black px-4 py-2 w-full md:w-1/3 border  rounded-lg shadow-sm focus:outline-none"
          value={sortOrder}
        >
          <option value="">Sort by salary</option>
          <option value="asc">Salary: Low to High</option>
          <option value="desc">Salary: High to Low</option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <AlljobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
    
    );
};

export default Alljobs;