import React from 'react';

export default function DataDisplay({ data }) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Submitted Data</h2>
      {data ? (
        <div className="space-y-2">
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Message:</strong> {data.message}</p>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
}
