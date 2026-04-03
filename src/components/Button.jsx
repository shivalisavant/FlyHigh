import React from 'react';

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseClasses = "px-6 py-3 font-label font-bold rounded-md transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-tr from-primary to-on-primary-container text-white shadow-[0_0_15px_rgba(255,176,202,0.4)] hover:shadow-[0_0_25px_rgba(255,176,202,0.6)] hover:-translate-y-0.5",
    secondary: "bg-surface-container-highest text-primary hover:bg-surface-bright",
    tertiary: "bg-transparent text-primary hover:bg-primary/10"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
