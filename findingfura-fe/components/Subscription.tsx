'use client';
import { useSubscribeMutation } from '@/redux/slices/subscriptionApi';
import React, { useState, FormEvent } from 'react';

const SubscriptionForm: React.FC = () => {
  const [subscribe, { isLoading, isSuccess, isError }] = useSubscribeMutation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await subscribe(formData).unwrap();
      alert('Subscription successful!');
    } catch (error) {
      alert('Subscription failed!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-l from-[#AA163F] to-[#f3d465] rounded-lg shadow-md hover:scale-105 ease-in-out duration-300">
      <h2 className="text-xl text-white text-center mb-4">
        Subscribe to our weekly blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First and Last Name */}
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
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
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {/* Phone Number */}
        <div>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full text-[#AA163F] bg-white py-2 px-4 rounded-md hover:bg-opacity-40 hover:text-[#AA163F]"
        >
          {isLoading ? 'Submitting...' : 'Subscribe'}
        </button>
        {/* Success and Error Messages */}
        {isSuccess && (
          <p className="text-green-600 text-center">Successfully subscribed!</p>
        )}
        {isError && (
          <p className="text-white text-center">Already Subscribed😊</p>
        )}
      </form>
    </div>
  );
};

export default SubscriptionForm;
