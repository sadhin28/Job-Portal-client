import {  useLoaderData } from "react-router-dom";

const ViewApplicationJob = () => {
    const applications = useLoaderData()

    return (
        <div className="bg-gradient-to-r py-8  from-indigo-400 min-h-screen  to-pink-400 ...">
            <div className="w-11/12 mx-auto  overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs sm:text-sm uppercase">
                        <tr className="text-center">
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Index</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Logo</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Name</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Title</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Company</th>
                            <th className="py-2 px-3 sm:py-3 sm:px-6 border border-gray-300">Email</th>
                        </tr>
                    </thead>
                    <tbody className=" text-center text-xs sm:text-sm">
                        {applications.length > 0 ? (
                            applications.map((app,index) => (
                                <tr
                                    key={app._id}
                                    className="border-t  border-gray-300 hover:bg-gray-50 transition duration-300"
                                >
                                     <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300 font-medium">{index +1}</td>
                                    <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300">
                                        <img
                                            src={app.company_logo}
                                            alt={`${app.company} Logo`}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full border p-1 mx-auto"
                                        />
                                    </td>
                                    <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300 font-medium">{app.name}</td>
                                    <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300">{app.title}</td>
                                    <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300">{app.company}</td>
                                    <td className="py-2 px-3 sm:py-4 sm:px-6 border border-gray-300 break-all">{app.applicant_email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-6 text-center text-gray-500">
                                    No applications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplicationJob;