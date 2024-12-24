'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '@/store/authSlice';

export default function Topbar() {
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.auth.user);

  // Refs for each dropdown and the buttons that toggle them
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({
    signIn: null,
    account: null,
    currency: null,
  });

  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({
    signIn: null,
    account: null,
    currency: null,
  });

  // Toggle dropdown visibility
  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !Object.values(dropdownRefs.current).some((dropdown) =>
          dropdown?.contains(event.target as Node)
        ) &&
        !Object.values(buttonRefs.current).some((button) =>
          button?.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null); // Close all dropdowns
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const signout = async () => {
    try {
      const response = await fetch(`${baseURL}/api/auth/signout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        dispatch(logout());
        alert('Sign out successful!');
      } else {
        const errorData = await response.json();
        alert(`Sign out failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Sign out failed due to a network error.');
    }
  };

  const   signin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the form from reloading the page

    const response = await fetch(`${baseURL}/api/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include', // Include cookies
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(login({ id: data.user.id, username: data.user.username }));
    } 
  };


  return (
    <div className="relative">
      <div className="flex bg-slate-900 text-slate-200 w-screen justify-around relative z-20">
        {/* Sign-In Dropdown */}
        <div className="relative">
          <button
            ref={(el) => {
              buttonRefs.current.signIn = el;
            }}
            onClick={() => handleDropdownToggle('signIn')}
            className="hover:bg-slate-700 px-4 py-2 rounded-md"
          >
            {user ? user.username : 'Sign In'}
          </button>
          {openDropdown === 'signIn' && (
            <div
              ref={(el) => {
                dropdownRefs.current.signIn = el;
              }}
              className="absolute top-full mt-2 bg-slate-800 p-4 rounded-md shadow-lg w-64 z-20"
            >
              {user ? (
                <button onClick={signout} className="hover:underline">
                  Sign out
                </button>
              ) : (
                <form className="space-y-4" onSubmit={signin}>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Username</label>
                    <input
                      type="text"
                      placeholder="Enter your Username"
                      className="w-full px-3 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 rounded-md bg-slate-700 text-white border border-slate-600"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
                  >
                    Sign in
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Account Dropdown */}
        <div className="relative">
          <button
            ref={(el) => {
              buttonRefs.current.account = el;
            }}
            onClick={() => handleDropdownToggle('account')}
            className="hover:bg-slate-700 px-4 py-2 rounded-md"
          >
            Account
          </button>
          {openDropdown === 'account' && (
            <div
              ref={(el) => {
                dropdownRefs.current.account = el;
              }}
              className="absolute top-full mt-2 bg-slate-800 p-4 rounded-md shadow-lg w-40 z-20"
            >
              <ul className="space-y-2">
                <li>
                  <Link href="/profile" className="hover:underline">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="hover:underline">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/logout" className="hover:underline">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Currency Dropdown */}
        <div className="relative">
          <button
            ref={(el) => {
              buttonRefs.current.currency = el;
            }}
            onClick={() => handleDropdownToggle('currency')}
            className="hover:bg-slate-700 px-4 py-2 rounded-md"
          >
            Currency
          </button>
          {openDropdown === 'currency' && (
            <div
              ref={(el) => {
                dropdownRefs.current.currency = el;
              }}
              className="absolute top-full mt-2 bg-slate-500 p-4 rounded-md shadow-lg w-40 z-20"
            >
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left hover:bg-cyan-600 px-3 py-1 rounded-md">
                    USD - US Dollar
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:bg-cyan-600 px-3 py-1 rounded-md">
                    EUR - Euro
                  </button>
                </li>
                <li>
                  <button className="w-full text-left hover:bg-cyan-600 px-3 py-1 rounded-md">
                    GBP - British Pound
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
