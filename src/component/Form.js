import React, { useState } from 'react';

export default function Form({ onSubmit, existingEmails }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    // Clear any error messages when user starts typing again
    setError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicate emails
    if (existingEmails.includes(formData.email)) {
      setError('Email already in use. Please use a different email.');
      return;
    }

    onSubmit(formData);
    // Reset form data on successful submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-white rounded shadow-md">
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
