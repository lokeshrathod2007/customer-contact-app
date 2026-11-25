import React, { useState } from 'react';
import CustomerCard from './CustomerCard';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  function handleAdd() {
    if (!name.trim() || !mobile.trim() || !email.trim()) {
      setError('All fields are required. Please fill in every field.');
      return;
    }
    if (mobile.length !== 10 || isNaN(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    const newCustomer = {
      id: Date.now(),
      name: name,
      mobile: mobile,
      email: email,
    };
    setCustomers([...customers, newCustomer]);
    setName('');
    setMobile('');
    setEmail('');
    setError('');
  }

  function handleDelete(id) {
    setCustomers(customers.filter(c => c.id !== id));
  }

  return (
    <div className="app">

      <div className="header">
        <h1>Customer Contact Management System</h1>
      </div>

      <div className="form-section">
        <h2>Add New Customer</h2>

        <div className="form-group">
          <label>Customer Name</label>
          <input
            type="text"
            placeholder="Enter customer name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            placeholder="Enter 10-digit mobile number"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            maxLength={10}
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button className="btn-add" onClick={handleAdd}>+ Add Customer</button>
      </div>

      <div className="list-section">
        <div className="list-header">
          <h2>Customer Records</h2>
          <span className="count">{customers.length} customer(s)</span>
        </div>

        {customers.length === 0 ? (
          <div className="empty">
            <p>No customer records available.</p>
            <p>Add a customer using the form above.</p>
          </div>
        ) : (
          customers.map(customer => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

    </div>
  );
}

export default App;
