import React, { useState, useEffect } from 'react';
import Form from './component/Form';
import RecordsList from './component/RecordsList';
import Tabs from './component/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('form');
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
  }, []);

  // Extracting emails from records
  const existingEmails = records.map(record => record.email);

  const handleFormSubmit = (data) => {
    // Check for duplicate email before adding new record
    if (existingEmails.includes(data.email)) {
      alert("This email is already registered.");
      return;
    }
    const newRecord = {
      ...data,
      id: Date.now(), // Unique ID for each record
    };
    let updatedRecords = [...records, newRecord];
    if (updatedRecords.length > 50) {
      updatedRecords = updatedRecords.slice(-50);
    }
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  const clearRecords = () => {
    setRecords([]);
    localStorage.removeItem('records');
  };

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((record) => record.id !== id);
    setRecords(updatedRecords);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-gray-100 to-gray-900">
      <header className="w-full max-w-2xl bg-blue-600 text-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-semibold text-center">Form & Records Management</h1>
      </header>
      <main className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'form' ? (
          <Form onSubmit={handleFormSubmit} existingEmails={existingEmails} />
        ) : (
          <RecordsList
            records={records}
            clearRecords={clearRecords}
            deleteRecord={deleteRecord}
          />
        )}
      </main>
    </div>
  );
}

export default App;
