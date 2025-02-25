import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";

const Navbar = () => {
	const { logout } = useContext(AuthContext);

	return (
		<div className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
			<h1 className="text-lg font-bold">Dashboard</h1>
			<div className="flex items-center space-x-4">
				<FiSearch className="text-xl" />
				<FiBell className="text-xl" />
				<button onClick={logout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
			</div>
		</div>
	);
};
export default Navbar;