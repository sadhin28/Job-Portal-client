import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';

const AddJob = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [imageBase64, setImageBase64] = useState('');


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageBase64(reader.result); // base64 string
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const job_image = imageBase64;
        const job_title = e.target.title.value;
        const location = e.target.location.value;
        const salary = e.target.salary.value;
        const experience = e.target.experience.value;
        const genres = e.target.genres.value;
        const skills = e.target.skills.value;
        const description = e.target.description.value;
        const user_email = e.target.email.value;
        const user_name = e.target.name.value;
        const newJobPost = {location,salary,experience,genres,skills,description, job_image, job_title,  user_email, user_name }

        fetch('https://chillgamer-server.onrender.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {


                Swal.fire({
                    title: 'Success',
                    text: "Add Review Item Successfully",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/')


            })
            .catch(errors => {
                Swal.fire({
                    title: 'Error',
                    text: `${errors.message}`,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    };
    const data = [

        { name: 'title', label: 'Job Title', placeholder: 'Enter Job title' },
        { name: 'company', label: 'Company', placeholder: 'Enter Company Name' },
        { name: 'location', label: 'Job Location', placeholder: 'Job Location' },
        { name: 'salary', label: 'Salary', placeholder: 'Enter Salary' },
        { name: 'experience', label: 'Experience', placeholder: 'Experience (e.g., 2+ years)' },
        { name: 'skills', label: 'Skills', placeholder: 'Enter Skills' },
        { name: 'description', label: 'Description', placeholder: 'Enter Job description' },


    ]

    return (
        <div className="bg-gradient-to-r  from-indigo-400  to-pink-400 ... min-h-screen flex items-center justify-center  px-4 py-8">
            <div className="w-full max-w-4xl bg-gradient-to-r  from-indigo-200  to-pink-300 ... shadow-md rounded-lg p-10 relative">
                <Link to="/" className="absolute top-4 left-4 text-lg font-semibold text-gray-700 hover:underline">
                    ← Back to home
                </Link>

                <h2 className="text-3xl font-bold text-center text-[#374151] mb-2">Add Job Post</h2>


                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className='block mb-1 font-medium'>Company logo</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full border p-2 rounded"
                        required
                    />
                    <div>
                        {
                            data.map(data => <div key={data.name}>
                                <label className="block  mb-1 font-medium">{data.label}</label>
                                <input
                                    name={data.name}
                                    placeholder={data.placeholder}
                                    className="w-full px-4 py-2 border  rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                                />

                            </div>)
                        }
                    </div>
                    {/* user  name */}
                    {/* Genres */}
                    <div className="form-control">
                        <label className="block mb-1 font-medium">
                            Job Types
                        </label>
                        <select className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]" name="genres" required>
                            <option disabled selected value="">Job Types</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Internship</option>
                            <option>Remote</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">User Name</label>
                        <input
                            name='name'
                            placeholder='User name'
                            value={user && user.displayName}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                        />
                    </div>
                    {/* user email */}
                    <div>
                        <label className="block mb-1 font-medium">User Email</label>
                        <input
                            name='email'
                            type='email'
                            value={user && user.email}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#d6a86b]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-blue-200 font-bold border border-2xl p-1 rounded"
                    >
                        Add Job
                    </button>
                </form>


            </div>
        </div>
    );
};


export default AddJob;