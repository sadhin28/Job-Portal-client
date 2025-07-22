import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const [user,setuser]=useState(true);
    
    const navlink = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'All Jobs',
            link: '/jobs'
        },
        {
            name: 'Add Job',
            link: '/add-jobs'
        },
        {
            name: 'My Application',
            link: '/application/me'
        },
        {
            name: 'My Job Posts',
            link: '/my-jobs'
        },
    ]
    return (
        <>
            {/* Navbar */}
            <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">MyApp</div>
                <div className="hidden md:flex items-center space-x-6">
                    {
                        navlink.map(data => <NavLink onClick={toggleSidebar} to={data.link}>{data.name}</NavLink>)
                    }
                    <button className="text-start p-2 rounded bg-black">Login</button>
                    <button className="text-start p-2 rounded bg-black">LogOut</button>
                    <button className="text-start rounded p-2 bg-green-600">Register</button>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleSidebar}>
                        {sidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Sidebar for Mobile */}
            <div className={`fixed top-0 left-0 w-64 h-full bg-blue-700 text-white p-5 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
                <h2 className="text-2xl font-bold mb-6">Menu</h2>
                <nav className="flex flex-col space-y-4">
                    {
                        navlink.map(data => <NavLink onClick={toggleSidebar} to={data.link}>{data.name}</NavLink>)
                    }
                    <button className="text-start p-2 rounded bg-black">Login</button>
                    <button className="text-start p-2 rounded bg-black">LogOut</button>
                    <button className="text-start rounded p-2 bg-green-600">Register</button>
                </nav>

            </div>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};

export default Navbar;
