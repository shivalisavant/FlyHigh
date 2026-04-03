import React from 'react';

const InputField = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-label text-on-surface-variant text-sm uppercase tracking-wider">{label}</label>}
      <input 
        className="w-full bg-surface-container-high text-on-surface p-3 font-body rounded-t-md border-b-2 border-transparent transition-all duration-300 outline-none focus:border-tertiary focus:shadow-[0_4px_10px_-2px_rgba(0,219,233,0.3)] placeholder:text-on-surface-variant/50"
        {...props}
      />
    </div>
  );
};

export default InputField;
