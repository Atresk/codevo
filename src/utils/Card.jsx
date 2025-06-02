import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ title, description, to }) {
  return (
    <div className="card">
      <h3 className="card-title no-image">
        <Link to={to} className="card-link">
          {title}
        </Link>
      </h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
