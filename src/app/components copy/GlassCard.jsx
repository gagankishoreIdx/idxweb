"use client";

import { forwardRef } from 'react';

const GlassCard = forwardRef(({ 
  children, 
  className = '',
  bordered = true,
  padding = 'default',
  hover = false,
  onClick,
  ...props 
}, ref) => {
  // Base classes for glass effect
  const baseClasses = "bg-white-5 backdrop-blur-md rounded-2xl";
  
  // Border classes
  const borderClasses = bordered ? "border border-white-10" : "";
  
  // Padding classes
  const paddingClasses = {
    none: "",
    sm: "p-4",
    default: "p-6",
    lg: "p-8",
    xl: "p-10"
  };
  
  // Hover effect classes
  const hoverClasses = hover 
    ? "transition-all duration-300 hover:bg-white-10 hover:shadow-lg" 
    : "";
  
  // Click effect
  const clickClasses = onClick ? "cursor-pointer active:scale-98" : "";
  
  // Combine all classes
  const allClasses = `${baseClasses} ${borderClasses} ${paddingClasses[padding] || paddingClasses.default} ${hoverClasses} ${clickClasses} ${className}`;
  
  return (
    <div className={allClasses} ref={ref} onClick={onClick} {...props}>
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;