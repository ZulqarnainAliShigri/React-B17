import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (formData.email === "admin@gmail.com" && formData.password === "123") {
      navigate("/dashbord"); // ✅ Correct path
    } else {
      setError("Invalid email or password!");
    }

    // Clear input fields
    setFormData({ email: "", password: "" });
  };
  return (
    <div className="flex justify-center text-white items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800 w-[90%] max-w-md">
        <h2 className="text-3xl text-center font-bold mb-6">Login</h2>
        {error && <p className="text-center text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-3 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border p-3 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <button
            type="submit"
            className="bg-amber-500 rounded-lg shadow-lg text-white w-full bwro cursor-pointer flgt hover:bg-amber-600 py-3 transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
