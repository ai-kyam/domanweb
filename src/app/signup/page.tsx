'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [displayname, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, displayname, password, phone }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setError('');
    } else {
      setMessage('');
      setError(data.message || 'Signup failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 mt-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="displayname" className="block text-sm font-medium text-gray-600">Display Name:</label>
            <input
              id="displayname"
              type="text"
              value={displayname}
              onChange={(e) => setDisplayname(e.target.value)}
              required
              className="w-full p-3 mt-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your display name"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone:</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 mt-2 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your phone number"
            />
          </div>

          <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
            Sign Up
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              className="text-indigo-600 hover:text-indigo-700"
              onClick={() => router.push('/signin')}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
