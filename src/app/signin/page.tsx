'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/store/authSlice';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Get base URL from the environment variable

      const response = await fetch(`${baseURL}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Include cookies
      });

      if (response.ok) {
        const data = await response.json();

        setMessage(data.message);
        setError('');
   
        dispatch(login({ id: data.user.id, username: data.user.username }));
        router.push('/');
      } else {
        const errorData = await response.json();
        setMessage('');
        setError(errorData.message || 'Signup failed');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    } catch (err:any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Sign Up</h1>
        <form onSubmit={handleSignIn} className="space-y-4">
          

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

       

          <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300">
            Sign In
          </button>
        </form>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
        {error && <p className="mt-4 text-center text-red-600">{error}</p>}

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <button
              className="text-indigo-600 hover:text-indigo-700"
              onClick={() => router.push('/signup')}
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

