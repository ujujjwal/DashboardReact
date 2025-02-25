import { Link } from "react-router-dom";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";

const Sidebar = () => {
	return (
		<div className="w-64 bg-gray-800 text-white h-screen p-4">
			<ul className="space-y-4">
				<li>
					<Link to="/dashboard" className="flex items-center space-x-2">
						<FiHome /> <span>Dashboard</span>
					</Link>
				</li>
				<li>
					<Link to="/users" className="flex items-center space-x-2">
						<FiUsers /> <span>Users</span>
					</Link>
				</li>
				<li>
					<Link to="/settings" className="flex items-center space-x-2">
						<FiSettings /> <span>Settings</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default Sidebar;