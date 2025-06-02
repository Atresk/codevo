import React from 'react';
import './Glitch.css';

export default function Glitch({ children, as = 'span', className = '', ...props }) {
  const Tag = as;
  return (
    <Tag
      className={`glitch-on-hover ${className}`}
      data-glitch={typeof children === 'string' ? children : ''}
      {...props}>
      {children}
    </Tag>
  );
}
