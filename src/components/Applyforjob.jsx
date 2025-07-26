
import { useLoaderData, useNavigate } from 'react-router-dom'
import applyanimation from '../assets/lotte/apply.json'
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';
import { useContext } from 'react';
const Applyforjob = () => {
    const { user } = useContext(AuthContext)
    const job = useLoaderData(); // Assuming you're loading job details
    const { title, company, _id,company_logo
 } = job;
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const applicant_email = e.target.email.value;
        const phone = e.target.phone.value;
        const coverLetter = e.target.coverLetter.value;
        const githuburl = e.target.githuburl.value;
        const job_id = _id;
        const applicationData = { name, applicant_email, phone, coverLetter, githuburl, title, company, job_id,company_logo
 }

        //post now
        fetch('https://job-portal-server-ed8n.onrender.com/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        })
            .then(res => res.json())
            .then(data => {
                
                    navigate('/application/me')
                    e.value = ''
                    Swal.fire({
                        title: `${company}`,
                        text: `Your application for the ${title} position has been submitted successfully!`,
                        icon: "success",
                        draggable: true
                    });
                

            })
            .catch(error => {
                Swal.fire({
                    title: `${company}`,
                    text: `${error.message}`,
                    icon: "error",
                    draggable: true
                });
            })
    };

    return (
        <div className=' px-3 bg-gradient-to-r  from-indigo-400  to-pink-400 ... grid md:grid-cols-2 items-center justify-center'>

            <div className=''>
                <Lottie className='' animationData={applyanimation}></Lottie>
            </div>

            <div className="w-full max-w-3xl p-8 bg-gradient-to-r  from-indigo-200  to-pink-300 ... rounded-lg shadow-md">

                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Apply for {title}</h2>
                <form onSubmit={handleSubmit} className="py-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Job Title</label>
                        <input
                            type="text"
                            value={title}
                            readOnly
                            className="mt-1 block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400 bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input
                            type="text"
                            value={company}
                            readOnly
                            className="mt-1 block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400 bg-gray-100"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required

                            className="mt-1 w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                required

                                className="mt-1 block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                required

                                className="mt-1 block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Github Url</label>
                        <input
                            type="text"
                            name="githuburl"
                            placeholder='Enter Your Github Url'
                            required

                            className="mt-1 block w-full px-4 py-2 border rounded focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
                        <textarea
                            name="coverLetter"
                            rows="4"

                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium transition w-full"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Applyforjob;
