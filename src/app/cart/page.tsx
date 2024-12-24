'use client';

import React, { useState, useEffect } from 'react';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL; // Get base URL from the environment variable

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${baseURL}/api/user/get`, {
          method: 'GET',
          credentials: 'include', // Send cookies for authentication
        });

        if (response.ok) {
          const result = await response.json();
          setCart(result.cart); // Update cart state
        } else if (response.status === 401) {
          alert('Please sign in to view your cart.');
        } else {
          const errorData = await response.json();
          console.error('Error fetching cart:', errorData.message);
        }
      } catch (error) {
        console.error('Network error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/user/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies for authentication
      });

      if (response.ok) {
        alert('Checkout successful!');
        setCart([]); // Clear cart on successful checkout
      } else {
        const errorData = await response.json();
        alert(`Checkout failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Checkout failed due to a network error.');
    }
  };

  if (loading) {
    return <div>Loading your cart...</div>;
  }

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((domain, index) => (
          <li key={index} className="flex justify-between items-center p-4 border rounded">
            <span className="text-lg">{domain}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded"
      >
        Checkout
      </button>
    </div>
  );
};



export default Cart;