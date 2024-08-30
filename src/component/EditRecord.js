import React, { useState } from 'react';

function EditForm({ record, onUpdate, onCancel }) {
  const [formData, setFormData] = useState(record);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      {/* Assuming your record has fields like 'name', 'email', etc. */}
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      {/* Add other fields as needed */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save
        </button>
      </div>
    </form>
  );
}

function Edit({ record, onUpdate, onCancel }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Edit Record</h2>
      <EditForm record={record} onUpdate={onUpdate} onCancel={onCancel} />
    </div>
  );
}

export default Edit;
