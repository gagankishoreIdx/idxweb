"use client";

import { useState, useRef, useEffect } from 'react';
import { useTilt } from '../hooks/useScrollAnimation';

const Card3D = ({ className = '', children, maxTilt = 15, glareOpacity = 0.1 }) => {
  const { ref, style } = useTilt();
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setGlarePosition({ x, y });
  };
  
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl transition-all duration-200 ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Content */}
      <div
        className="relative z-10 p-6 h-full w-full transition-transform duration-200"
        style={{
          transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)',
        }}
      >
        {children}
      </div>
      
      {/* Glass reflection effect */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x * 100}% ${glarePosition.y * 100}%, rgba(255,255,255,${glareOpacity}) 0%, rgba(255,255,255,0) 60%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      
      {/* Card edge effect */}
      <div
        className="absolute inset-0 rounded-xl border border-white/10"
        style={{
          transform: 'translateZ(-1px)',
        }}
      />
    </div>
  );
};

// 3D Card with flip effect
export const FlipCard = ({ front, back, className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div
      className={`perspective cursor-pointer w-full h-full ${className}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
        }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          {front}
        </div>
        
        {/* Back of card */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

// Card with floating 3D elements
export const FloatingElementsCard = ({ children, elementsCount = 5, className = '' }) => {
  const containerRef = useRef(null);
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Generate random floating elements
    const newElements = Array.from({ length: elementsCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 10,
      opacity: Math.random() * 0.1 + 0.05,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    
    setElements(newElements);
  }, [elementsCount]);
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating elements */}
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute rounded-full"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            background: `rgba(255, 255, 255, ${element.opacity})`,
            animation: `float ${element.duration}s ease-in-out ${element.delay}s infinite alternate`,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default Card3D;