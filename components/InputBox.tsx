'use client';
import React from 'react';

interface InputBoxProps {
    id: string;
    name: string;
    type: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: any) => void;
    isRequired?: boolean;
    value: string;
}

const InputBox: React.FC<InputBoxProps> = ({ id, name, type, placeholder, className, onChange, isRequired = false }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={`mt-1 block w-full text-gray-900 rounded-md border border-gray-300  px-3 py-2 text-sm focus:ring-offset-0 shadow-none placeholder:text-gray-400 ${className}`}
            onChange={onChange}
            required={isRequired}
        />
    );
};

export default InputBox;
