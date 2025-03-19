'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}


const Button: React.FC<ButtonProps> = ({ label, className, children, ...props }) => {
  return (
    <button className={className} {...props}>
      {children || <></>}
      {label}
    </button>
  );
};

export default Button;

