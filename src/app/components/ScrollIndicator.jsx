"use client";

import { useEffect, useState, useCallback } from 'react';

export const ScrollProgressBar = ({ color = 'bg-blue-500', height = 'h-1' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Use useCallback to memoize the handler function
  const handleScroll = useCallback(() => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (windowHeight === 0) return; // Prevent division by zero
    
    const scrolled = window.scrollY;
    const progress = Math.min((scrolled / windowHeight) * 100, 100);
    setScrollProgress(progress);
  }, []);
  
  useEffect(() => {
    // Initialize on mount
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Include the memoized function in dependencies
  
  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${height} bg-gray-800`}>
      <div 
        className={`${height} ${color} transition-all duration-100`} 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

// Mouse scroll indicator for hero sections
export const MouseScrollIndicator = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
        <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
      </div>
      <span className="text-sm text-gray-400 mt-2">Scroll Down</span>
    </div>
  );
};

// Animated arrow scroll indicator
export const ArrowScrollIndicator = ({ className = '' }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex flex-col items-center">
        <svg 
          className="w-6 h-6 text-white animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

// Dot style scroll progress indicator
export const DotScrollIndicator = ({ sections = 5, activeColor = 'bg-blue-500', inactiveColor = 'bg-gray-600' }) => {
  const [activeSection, setActiveSection] = useState(0);
  
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight === 0) return; // Prevent division by zero
    
    const scrolled = window.scrollY;
    const newSection = Math.floor((scrolled / totalHeight) * sections);
    
    setActiveSection(Math.min(newSection, sections - 1));
  }, [sections]);
  
  useEffect(() => {
    // Initialize on mount
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Include the memoized function in dependencies
  
  const scrollToSection = (index) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const sectionHeight = totalHeight / sections;
    
    window.scrollTo({
      top: sectionHeight * index,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-3">
      {Array.from({ length: sections }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === activeSection ? activeColor : inactiveColor
          }`}
          onClick={() => scrollToSection(index)}
          aria-label={`Scroll to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ScrollProgressBar;