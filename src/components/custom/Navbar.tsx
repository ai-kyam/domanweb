'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    // Clear any scheduled close actions to prevent premature dropdown close
    if (closeTimeout) clearTimeout(closeTimeout);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    // Delay closing the dropdown by 300ms (you can adjust this as needed)
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 300); 
    setCloseTimeout(timeout);
  };

  return (
    <div className="flex justify-end text-black py-5 w-screen px-6 relative">
      {/* Navigation Menu */}
      <div className="flex space-x-8">
        {/* Item One */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('itemOne')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:bg-cyan-600 px-4 py-2 rounded-md">
            Item One
          </button>
          {hoveredItem === 'itemOne' && (
            <div className="absolute top-full mt-2 bg-slate-500 p-4 rounded-md shadow-lg z-10">
              <Link href="/link1" className="block px-3 py-2 hover:bg-cyan-600 rounded-md">
                Link 1
              </Link>
              <Link href="/link2" className="block px-3 py-2 hover:bg-cyan-600  rounded-md">
                Link 2
              </Link>
            </div>
          )}
        </div>

        {/* Item Two */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('itemTwo')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:bg-cyan-600 px-4 py-2 rounded-md">
            Item Two
          </button>
          {hoveredItem === 'itemTwo' && (
            <div className="absolute top-full mt-2 bg-slate-500 p-4 rounded-md shadow-lg z-10">
              <Link href="/link3" className="block px-3 py-2 hover:cyan-600 rounded-md">
                Link 3
              </Link>
              <Link href="/link4" className="block px-3 py-2 hover:bg-cyan-600 rounded-md">
                Link 4
              </Link>
            </div>
          )}
        </div>

        {/* Account */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter('account')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:bg-cyan-600 px-4 py-2 rounded-md">
            Account
          </button>
          {hoveredItem === 'account' && (
            <div className="absolute top-full mt-2 bg-slate-500 p-4 rounded-md shadow-lg z-10">
              <Link href="/profile" className="block px-3 py-2 hover:bg-cyan-600 rounded-md">
                Profile
              </Link>
              <Link href="/dashboard" className="block px-3 py-2 hover:bg-cyan-600 rounded-md">
                Dashboard
              </Link>
              <Link href="/logout" className="block px-3 py-2 hover:bg-cyan-600 rounded-md">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Documentation */}
      <div className="flex">
        <Link href="/docs" className="hover:bg-cyan-600 px-4 py-2 rounded-md">
          Documentation
        </Link>
      </div>
    </div>
  );
}
