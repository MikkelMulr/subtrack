import React from 'react';
import './Services.css';

const ServiceItem = () => {
  return (
    <div className="Services-list-item">
      <header className="list-item-icon">
        <h2>Icon 1</h2>
      </header>
      <div className="list-item-details">
        <h2>Service Name</h2>
        <p>Monthly price: $9.99</p>
      </div>
      <div className="list-item-btns">
        <button className="list-item-btn btn-green"><i class="fas fa-plus"></i> Add</button>
        <button className="list-item-btn btn-red"><i class="fas fa-ban"></i> Remove</button>
      </div>
    </div>
  );
}

export default ServiceItem;