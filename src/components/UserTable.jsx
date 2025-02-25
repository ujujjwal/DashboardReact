import { useState, useEffect } from 'react';

const UserTable = () => {
	const [users, setUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [sortBy, setSortBy] = useState(null);
	const [sortOrder, setSortOrder] = useState('asc');
	const [currentPage, setCurrentPage] = useState(1);
	const rowsPerPage = 5;
	const indexOfLastUser = currentPage * rowsPerPage;
	const indexOfFirstUser = indexOfLastUser - rowsPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
	const [userRoles, setUserRoles] = useState(() => {
		const savedRoles = localStorage.getItem('userRoles');
		return savedRoles ? JSON.parse(savedRoles) : {};
	});

	useEffect(() => {
		// Fetch data from API when component loads
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				console.log(data, 'check data');
				setUsers(data);
			});
	}, []);

	const handleSort = column => {
		if (sortBy === column) {
			// Toggle sorting order if the same column is clicked
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
		} else {
			// Set new column to sort by and default to ascending order
			setSortBy(column);
			setSortOrder('asc');
		}
	};

	const handleRoleChange = (userId, newRole) => {
		setUserRoles(prevRoles => {
			const updatedRoles = { ...prevRoles, [userId]: newRole };
			localStorage.setItem('userRoles', JSON.stringify(updatedRoles)); // Save to Local Storage
			return updatedRoles;
		});
	};

	return (
		<div className="bg-white p-6 shadow-md rounded-lg">
			{/* Search Bar */}
			<input
				type="text"
				placeholder="Search users..."
				className="border p-2 rounded w-full mb-4"
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>

			{/* Table */}
			<table className="w-full border-collapse">
				<thead>
					<tr className="bg-gray-200">
						<th className="p-2 text-left cursor-pointer" onClick={() => handleSort('name')}>
							Name {sortBy === 'name' ? (sortOrder === 'asc' ? '⬆' : '⬇') : ''}
						</th>
						<th className="p-2 text-left cursor-pointer" onClick={() => handleSort('email')}>
							Email {sortBy === 'email' ? (sortOrder === 'asc' ? '⬆' : '⬇') : ''}
						</th>
						<th className="p-2 text-left">Role</th>
					</tr>
				</thead>
				<tbody>
					{currentUsers.map(user => (
						<tr key={user.id} className="border-t">
							<td className="p-2 text-black">{user.name}</td>
							<td className="p-2 text-black">{user.email}</td>
							<td className="p-2">
								<select
									value={userRoles[user.id] || 'User'}
									onChange={e => handleRoleChange(user.id, e.target.value)}
									className="border rounded p-1"
								>
									<option value="User">User</option>
									<option value="Admin">Admin</option>
									<option value="Editor">Editor</option>
								</select>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex justify-between mt-4">
				<button
					onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
					className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
				>
					Previous
				</button>

				<span className="text-black">Page {currentPage}</span>

				<button
					onClick={() => setCurrentPage(prev => (prev * rowsPerPage < users.length ? prev + 1 : prev))}
					disabled={currentPage * rowsPerPage >= users.length}
					className="bg-red-700 text-white px-4 py-2 rounded disabled:opacity-50"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default UserTable;
