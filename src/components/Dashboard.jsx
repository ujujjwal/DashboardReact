import Chart from "./Chart";
import UserTable from "./UserTable";

const Dashboard = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard 🎯</h2>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-500 p-4 text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">📊 Sales</h3>
          <p className="text-2xl">$24,500</p>
        </div>
        <div className="bg-green-500 p-4 text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">📈 Growth</h3>
          <p className="text-2xl">+18%</p>
        </div>
        <div className="bg-red-500 p-4 text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">💰 Revenue</h3>
          <p className="text-2xl">$12,000</p>
        </div>
      </div>

      {/* Chart Section */}
      <Chart />
	  <UserTable />

    </div>
  );
};

export default Dashboard;
