'use client'
import React, { useState } from 'react';

const SubscriptionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   console.log("Form submitted:", formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
    
    // Add your submit logic here
  };

  return (
    <div className="max-w-md text-white bg-white p-6 backdrop-blur-lg bg-opacity-40 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300 m-20 mx-auto">
      <h2 className="text-xl text-center mb-4">Subscribe to our Weekly Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex space-x-2'>
          <input
            type="text"
            name="firstName"
            placeholder='First Name'     
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#AA163F] text-white py-2 px-4 rounded-md hover:border-2 hover:border-[#aa163f] hover:bg-white hover:text-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
