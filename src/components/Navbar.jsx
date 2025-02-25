import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiSearch, FiBell, FiUser, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
	const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Toggle dark mode and store preference in LocalStorage
  const toggleDarkMode = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side - Search Bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
        <FiSearch className="absolute right-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>

      {/* Right Side - Icons & Logout */}
      <div className="flex items-center space-x-6">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-800 dark:text-white" />}
        </button>

        {/* Notifications & Profile */}
        <FiBell className="text-xl text-gray-600 dark:text-white hover:text-blue-500 cursor-pointer" />
        <FiUser className="text-xl text-gray-600 dark:text-white hover:text-blue-500 cursor-pointer" />

        {/* Logout Button - Ensure Visibility */}
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
