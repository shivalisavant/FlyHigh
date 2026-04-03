import React from 'react';

const GlassPanel = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`bg-surface-container-highest/60 backdrop-blur-[24px] ring-1 ring-inset ring-surface-bright/20 rounded-2xl p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassPanel;
