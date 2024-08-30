import React, { useState } from 'react';
import Edit from './EditRecord.js';

function RecordsList({ records, clearRecords, deleteRecord }) {
  const [editingRecord, setEditingRecord] = useState(null);

  const handleEditClick = (record) => {
    setEditingRecord(record);
  };

  const handleUpdate = (updatedRecord) => {
    const updatedRecords = records.map((r) =>
      r.id === updatedRecord.id ? updatedRecord : r
    );
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setEditingRecord(null);
  };

  const handleCancel = () => {
    setEditingRecord(null);
  };

  return (
    <div>
      {editingRecord ? (
        <Edit record={editingRecord} onUpdate={handleUpdate} onCancel={handleCancel} />
      ) : (
        <div>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record.id}>
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{record.name}</td>
                  <td className="px-4 py-2 border">{record.email}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleEditClick(record)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={clearRecords}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          >
            Clear All Records
          </button>
        </div>
      )}
    </div>
  );
}

export default RecordsList;
