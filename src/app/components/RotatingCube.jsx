"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const RotatingCube = ({
  size = 200,
  images = [],
  autoRotate = true,
  rotationSpeed = 5,
  className = '',
  onFaceClick
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [activeFace, setActiveFace] = useState(0);
  
  // Handle auto rotation
  useEffect(() => {
    if (!autoRotate || isMouseDown) return;
    
    const interval = setInterval(() => {
      setRotation(prev => ({
        ...prev,
        y: (prev.y + rotationSpeed) % 360
      }));
    }, 100);
    
    return () => clearInterval(interval);
  }, [autoRotate, rotationSpeed, isMouseDown]);
  
  // Mouse handlers for manual rotation
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    
    const deltaX = e.clientX - lastMousePosition.x;
    const deltaY = e.clientY - lastMousePosition.y;
    
    setRotation(prev => ({
      x: (prev.x - deltaY * 0.5) % 360,
      y: (prev.y + deltaX * 0.5) % 360
    }));
    
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  
  // Determine active face based on rotation
  useEffect(() => {
    const x = ((rotation.x % 360) + 360) % 360;
    const y = ((rotation.y % 360) + 360) % 360;
    
    if (x < 45 || x > 315) {
      // Top face
      setActiveFace(0);
    } else if (x > 135 && x < 225) {
      // Bottom face
      setActiveFace(1);
    } else if (y > 45 && y < 135) {
      // Right face
      setActiveFace(2);
    } else if (y > 225 && y < 315) {
      // Left face
      setActiveFace(3);
    } else if (y >= 315 || y <= 45) {
      // Front face
      setActiveFace(4);
    } else {
      // Back face
      setActiveFace(5);
    }
  }, [rotation]);
  
  // Ensure we have 6 faces
  const faceImages = Array(6).fill(null).map((_, i) => images[i] || null);
  
  return (
    <div 
      className={`perspective-${size} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div 
        className="relative w-full h-full preserve-3d transition-transform duration-200"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 4 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(4, faceImages[4])}
        >
          {faceImages[4] ? (
            <Image
              src={faceImages[4]}
              alt="Front face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Front</span>
          )}
        </div>
        
        {/* Back face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 5 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `rotateY(180deg) translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(5, faceImages[5])}
        >
          {faceImages[5] ? (
            <Image
              src={faceImages[5]}
              alt="Back face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Back</span>
          )}
        </div>
        
        {/* Top face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 0 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `rotateX(90deg) translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(0, faceImages[0])}
        >
          {faceImages[0] ? (
            <Image
              src={faceImages[0]}
              alt="Top face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Top</span>
          )}
        </div>
        
        {/* Bottom face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 1 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(1, faceImages[1])}
        >
          {faceImages[1] ? (
            <Image
              src={faceImages[1]}
              alt="Bottom face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Bottom</span>
          )}
        </div>
        
        {/* Right face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 2 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `rotateY(90deg) translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(2, faceImages[2])}
        >
          {faceImages[2] ? (
            <Image
              src={faceImages[2]}
              alt="Right face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Right</span>
          )}
        </div>
        
        {/* Left face */}
        <div 
          className={`absolute w-full h-full backface-hidden flex items-center justify-center bg-gray-900 border border-gray-800 ${activeFace === 3 ? 'ring-2 ring-purple-500' : ''}`}
          style={{
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`
          }}
          onClick={() => onFaceClick && onFaceClick(3, faceImages[3])}
        >
          {faceImages[3] ? (
            <Image
              src={faceImages[3]}
              alt="Left face"
              width={size}
              height={size}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <span className="text-white">Left</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RotatingCube;