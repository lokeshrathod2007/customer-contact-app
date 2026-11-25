import React from 'react';

function CustomerCard({ customer, onDelete }) {
  return (
    <div className="customer-card">
      <div className="card-info">
        <h3>{customer.name}</h3>
        <p><span className="label">Mobile:</span> {customer.mobile}</p>
        <p><span className="label">Email:</span> {customer.email}</p>
      </div>
      <button className="btn-delete" onClick={() => onDelete(customer.id)}>
        Delete
      </button>
    </div>
  );
}

export default CustomerCard;
