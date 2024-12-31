import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  icon?: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

export default function CTAButton({ children, variant, icon, to, onClick }: CTAButtonProps) {
  const baseClasses = "px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors w-full sm:w-auto";
  const variantClasses = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-white text-black hover:bg-gray-100"
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}