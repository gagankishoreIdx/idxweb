"use client";

import { useEffect, useRef } from 'react';

export default function AnimatedGradient() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create gradient points
    const points = [
      { x: canvas.width * 0.2, y: canvas.height * 0.2, dx: 0.2, dy: 0.3, radius: canvas.width * 0.3, color: [124, 58, 237, 0.4] }, // Purple
      { x: canvas.width * 0.8, y: canvas.height * 0.3, dx: -0.1, dy: 0.2, radius: canvas.width * 0.4, color: [79, 70, 229, 0.3] }, // Indigo
      { x: canvas.width * 0.5, y: canvas.height * 0.8, dx: 0.15, dy: -0.25, radius: canvas.width * 0.5, color: [6, 182, 212, 0.35] }, // Cyan
    ];
    
    // Animation function
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each gradient point
      points.forEach(point => {
        // Move point
        point.x += point.dx;
        point.y += point.dy;
        
        // Boundary check
        if (point.x < 0 || point.x > canvas.width) point.dx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.dy *= -1;
        
        // Create radial gradient
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius
        );
        
        gradient.addColorStop(0, `rgba(${point.color[0]}, ${point.color[1]}, ${point.color[2]}, ${point.color[3]})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    render();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-1 opacity-80"
    />
  );
}