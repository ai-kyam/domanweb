'use client';

import React, { useState } from 'react';

interface Domain {
  classkey: string;
  status: string;
  costHash?: {
    transfer: string;
    create: string;
    renew: string;
    sellingCurrencySymbol: string;
  };
}

interface DomainData {
  [key: string]: Domain;
}

interface DomainListProps {
  data: DomainData;
}

export const DomainList: React.FC<DomainListProps> = ({ data }) => {
  const [cart, setCart] = useState<string[]>([]);

  const handleCartClick = async (domain: string) => {
    try {
      // Send request to backend to add/remove domain from cart
      const response = await fetch(`/api/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
        credentials: 'include', // Include cookies for authentication
      });

      if (response.ok) {
        const result = await response.json();
        if (result.action === 'added') {
          setCart((prev) => [...prev, domain]);
        } else if (result.action === 'removed') {
          setCart((prev) => prev.filter((item) => item !== domain));
        }
      } else if (response.status === 401) {
        alert('Please sign in to add to cart.');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.message);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <div>
      {Object.entries(data).map(([domain, info]) => (
        <div key={domain} className="flex items-center justify-between mb-3">
          <span className="font-bold text-black">{domain}</span>
          {info.status === 'available' ? (
            <button
              onClick={() => handleCartClick(domain)}
              className={`${
                cart.includes(domain) ? 'bg-red-500' : 'bg-green-500'
              } text-white py-2 px-4 rounded`}
            >
              {cart.includes(domain) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          ) : (
            <button className="bg-gray-500 text-white py-2 px-4 rounded cursor-not-allowed">
              Not Available
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
