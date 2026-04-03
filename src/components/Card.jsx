import React from 'react';

const Card = ({ children, className = '', recessed = false, ...props }) => {
  const bgColor = recessed ? 'bg-surface' : 'bg-surface-container-low';
  
  return (
    <div className={`rounded-xl p-8 ${bgColor} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
