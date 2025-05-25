import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials and fetch a token or user data
    setUser({ ...formData });
    alert('User logged in!');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none"
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full border px-3 py-2 rounded-md shadow-sm focus:outline-none"
            type="password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
