"use client";

import { useRef, useEffect, useState } from 'react';
import { useParallax } from '../hooks/useScrollAnimation';

const ParallaxSection = ({
  backgroundImage,
  backgroundSpeed = 0.2,
  children,
  className = '',
  height = "100vh",
  overlayColor = "rgba(0, 0, 0, 0.5)"
}) => {
  const containerRef = useRef(null);
  const { style: parallaxStyle } = useParallax(backgroundSpeed);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial window height
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...parallaxStyle,
          height: `${parseInt(height) + windowHeight * backgroundSpeed}px`
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 w-full h-full" 
        style={{ backgroundColor: overlayColor }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

// Multi-layer parallax section with different speeds
export const MultiLayerParallax = ({ layers, children, className = '' }) => {
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Parallax Layers */}
      {layers.map((layer, index) => {
        const { image, speed = 0.2, opacity = 1 } = layer;
        const { style } = useParallax(speed);
        
        return (
          <div 
            key={index}
            className="absolute inset-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${image})`,
              opacity,
              zIndex: index,
              ...style
            }}
          />
        );
      })}
      
      {/* Content */}
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

// Text parallax component where different parts of text move at different speeds
export const TextParallax = ({ text, className = '' }) => {
  // Split text into words
  const words = text.split(' ');
  
  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        // Generate a slightly different parallax speed for each word
        const speed = 0.1 + (index % 5) * 0.05;
        const { style } = useParallax(speed);
        
        return (
          <span
            key={index}
            className="inline-block mr-2 mb-2"
            style={style}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};

export default ParallaxSection;