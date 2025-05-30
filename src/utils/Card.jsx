import React from 'react';
import './Card.css';

export default function Card({ title, description, image = null }) {
  return (
    <div className="card">
      {image && (
        <div className="card-header">
          <img src={image} alt="icon" className="card-img" />
          <h3 className="card-title">{title}</h3>
        </div>
      )}
      {!image && <h3 className="card-title no-image">{title}</h3>}
      <p className="card-description">{description}</p>
    </div>
  );
}
