import { Link } from "react-router-dom";

const Errorpage = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4 text-center">
            <h1 className="text-9xl font-extrabold tracking-wider text-red-600">404</h1>
            <p className="text-2xl md:text-3xl font-semibold mt-6">Page Not Found</p>
            <p className="text-gray-400 mt-2 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
            <Link to="/" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition duration-300">
                Go Home
            </Link>
        </div>
    );
};

export default Errorpage;