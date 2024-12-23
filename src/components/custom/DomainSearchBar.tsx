'use client';

import { useState } from 'react';

export default function DomainSearchBar() {
  const [domain, setDomain] = useState<string>('');
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = () => {
    // This is where you'd call the domain search API
    // For now, let's just log the domain input
    if (domain) {
      setSearchResult(`Searching for domain: ${domain}`);
      console.log(`Searching for domain: ${domain}`);
    } else {
      setSearchResult('Please enter a domain name to search');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 space-y-4">
      <h2 className="text-2xl text-gray-800">Search Domain Names</h2>

      <div className="relative w-96">
        <input
          type="text"
          placeholder="Enter domain name..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {searchResult && (
        <p className="text-gray-700 mt-4">{searchResult}</p>
      )}
    </div>
  );
}
