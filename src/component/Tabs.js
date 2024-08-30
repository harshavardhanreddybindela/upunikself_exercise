import React from 'react';

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        className={`p-2 rounded-md focus:outline-none ${activeTab === 'form' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setActiveTab('form')}
      >
        Form
      </button>
      <button
        className={`p-2 rounded-md focus:outline-none ${activeTab === 'records' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        onClick={() => setActiveTab('records')}
      >
        Records
      </button>
    </div>
  );
}
