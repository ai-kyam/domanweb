'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
 
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
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [cart, setCart] = useState<string[]>([]);  // Local state for cart
  const [error, setError] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.auth.user); // Access the global user state

  // Check user authentication and fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${baseURL}/api/user/get`, {
          method: 'GET',
          credentials: 'include', // Send the cookies with the request
        });

        if (response.ok) {
          const userData = await response.json();
          setCart(userData.cart); // Set user cart
        } else {
          const errorData = await response.json();
          setError(errorData.message || 'Error fetching user data');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Network error occurred');
      }
    };

    fetchUserData();
  }, []);  // Empty array ensures this runs only on initial load

  // Add or remove domain from cart
  const handleCartClick = async (domain: string) => {
    if (!user) {
      // If user is not authenticated, show alert to sign in
      alert('Please sign in to add/remove domains from your cart.');
      return;
    }

   
   if( cart.includes(domain)) {

    try{
      const response = await fetch(`${baseURL}/api/user/cart/remove`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
        credentials: 'include', // Include cookies for authentication
      });
      setCart((prevCart) => prevCart.filter((item) => item !== domain));
      console.log('while removing from cart got this response',response);
      
    }catch(err){
      console.log('error while removing from cart',err);
      
    }
    
   }else{
    try {
      const response = await fetch(`${baseURL}/api/user/cart/add`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
        credentials: 'include', // Include cookies for authentication

      });
      setCart((prevCart) => [...prevCart, domain]);

      console.log('while adding to cart got this response',response);
    }catch(err){
      console.log('error while adding to cart',err);
      
    }
   } 
     

  };

  // Render the domain list
  return (
    <div>
      <h2>Domain List</h2>
      {error && <p>{error}</p>}

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

    cart
      {cart}
    </div>
  );
};

export default DomainList;
