"use client";

import { forwardRef } from 'react';
import Link from 'next/link';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '',
  fullWidth = false,
  as = 'button',
  ...props 
}, ref) => {
  // Base classes
  const baseClasses = "font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg focus:ring-purple-500 active:scale-95 text-white",
    secondary: "bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm focus:ring-white/30 active:scale-95",
    outline: "border border-white/20 hover:bg-white/5 focus:ring-white/30 active:scale-95",
    ghost: "hover:bg-white/5 focus:ring-white/30 active:scale-95"
  };
  
  // Width classes
  const widthClasses = fullWidth ? "w-full" : "";
  
  // Combine all classes
  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClasses} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={allClasses} ref={ref} {...props}>
        {children}
      </Link>
    );
  }
  
  // Render as custom element if specified
  const Component = as;
  return (
    <Component className={allClasses} ref={ref} {...props}>
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;