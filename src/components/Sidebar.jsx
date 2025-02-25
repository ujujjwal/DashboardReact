import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className="w-64 h-screen bg-gray-900 text-white p-5 transition-all">
			<h2 className="text-xl font-bold text-center mb-5">Admin Panel</h2>
			<ul className="space-y-4">
				<li>
					<Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 transition">
						<FiHome className="text-xl" />
						<span>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to="/users" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 transition">
						<FiUsers className="text-xl" />
						<span>Users</span>
					</Link>
				</li>
				<li>
					<Link to="/settings" className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 transition">
						<FiSettings className="text-xl" />
						<span>Settings</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
