import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">About</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
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
          <a href="#" className="hover:text-gray-300" onClick={toggleSidebar}>Home</a>
          <a href="#" className="hover:text-gray-300" onClick={toggleSidebar}>About</a>
          <a href="#" className="hover:text-gray-300" onClick={toggleSidebar}>Services</a>
          <a href="#" className="hover:text-gray-300" onClick={toggleSidebar}>Contact</a>
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
