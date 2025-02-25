import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		if (email === "admin@example.com" && password === "password") {
			localStorage.setItem("isAuthenticated", "true");
			navigate("/dashboard");
		} else {
			alert("Invalid credentials");
		}
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-200">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				<form onSubmit={handleLogin} className="flex flex-col">
					<input type="email" placeholder="Email" className="border p-2 mb-3 rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" placeholder="Password" className="border p-2 mb-3 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
