import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-primary-700 hover:bg-primary-800 text-white shadow-lg shadow-primary-700/30 focus:ring-primary-500",
    secondary: "bg-accent-500 hover:bg-accent-600 text-white shadow-lg shadow-accent-500/30 focus:ring-accent-500",
    outline: "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus:ring-primary-500",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};