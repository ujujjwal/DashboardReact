import Chart from "./Chart";
import UserTable from "./UserTable";
const Dashboard = () => {
	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-6">Dashboard</h1>

			{/* Cards Section */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold">Total Users</h3>

					<p className="text-2xl font-bold">1,245</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold">Active Sessions</h3>
					<p className="text-2xl font-bold">320</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold">Revenue</h3>
					<p className="text-2xl font-bold">$24,500</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-md">
					<h3 className="text-lg font-semibold">New Signups</h3>
					<p className="text-2xl font-bold">150</p>
				</div>
			</div>
			<Chart />
			<UserTable />
		</div>

	);
};



export default Dashboard;
