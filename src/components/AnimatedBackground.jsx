"use client";

import { useEffect, useRef, useState } from 'react';

// Helper function to convert hex to rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : 
    '255, 255, 255';
};

export function GradientBackground({ 
  particleCount = 50, 
  particleColor = "#6366f1", 
  particleSize = 3,
  linkColor = "#a5b4fc",
  linkDistance = 150, 
  linkOpacity = 0.3,
  speed = 0.5
}) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState([]);

  // Initialize dimensions and particles
  useEffect(() => {
    if (!canvasRef.current) return;

    const updateDimensions = () => {
      const canvas = canvasRef.current;
      const container = canvas.parentElement;
      const width = container.clientWidth;
      const height = container.clientHeight;

      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });

      // Initialize particles
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * particleSize + 1,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
      setParticles(newParticles);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, [particleCount, particleSize, speed]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;

    const ctx = canvasRef.current.getContext('2d');
    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Draw particles and update positions
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > dimensions.width) p.vx *= -1;
        if (p.y < 0 || p.y > dimensions.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(particleColor)}, ${p.opacity})`;
        ctx.fill();

        // Draw links
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            const opacity = (1 - distance / linkDistance) * linkOpacity;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${hexToRgb(linkColor)}, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, particles, particleColor, linkColor, linkDistance, linkOpacity]);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <canvas 
        ref={canvasRef} 
        className="absolute w-full h-full"
      />
    </div>
  );
}

export const WavesBackground = ({
  waveCount = 3,
  baseColor = '#4338ca', // indigo-700
  speed = 2,
  amplitude = 20,
  frequency = 0.01,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [phase, setPhase] = useState(0);

  // Set up canvas dimensions
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    let animationFrameId;
    
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update phase
      setPhase(prev => (prev + 0.01 * speed) % (2 * Math.PI));
      
      // Draw waves
      for (let i = 0; i < waveCount; i++) {
        const heightFactor = 1.2 - i * 0.2; // taller waves in back
        const offsetPhase = phase + i * Math.PI / 6; // offset each wave
        const waveAmplitude = amplitude * (1 - i * 0.2); // decreasing amplitude
        const opacity = 0.1 + i * 0.1; // increasing opacity
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, dimensions.width, 0);
        const baseRgb = hexToRgb(baseColor);
        gradient.addColorStop(0, `rgba(${baseRgb}, ${opacity * 0.5})`);
        gradient.addColorStop(0.5, `rgba(${baseRgb}, ${opacity})`);
        gradient.addColorStop(1, `rgba(${baseRgb}, ${opacity * 0.5})`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, dimensions.height);
        
        // Draw wave path
        for (let x = 0; x < dimensions.width; x++) {
          const y = Math.sin(x * frequency + offsetPhase) * waveAmplitude + 
                   dimensions.height * heightFactor;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(dimensions.width, dimensions.height);
        ctx.closePath();
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, waveCount, baseColor, speed, amplitude, frequency, phase]);
  
  // Helper function to convert hex to rgb
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : '255, 255, 255';
  };
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

// Animated gradient background
export const GradientBackgroundOriginal = ({
  colors = ['#4338ca', '#7c3aed', '#3b82f6', '#8b5cf6'],
  speed = 3,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [time, setTime] = useState(0);
  
  // Set up canvas dimensions
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    let animationFrameId;
    
    const animate = () => {
      setTime(prev => prev + 0.005 * speed);
      
      // Create gradient
      const gradient = ctx.createLinearGradient(
        dimensions.width * (0.5 + 0.5 * Math.sin(time)),
        0,
        dimensions.width * (0.5 + 0.5 * Math.cos(time)),
        dimensions.height
      );
      
      colors.forEach((color, index) => {
        const stop = index / (colors.length - 1);
        gradient.addColorStop(stop, color);
      });
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, colors, speed, time]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

// Noise effect background (static TV-like effect)
export const NoiseBackground = ({
  opacity = 0.05,
  speed = 4,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Set up canvas dimensions
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const updateDimensions = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect();
        canvasRef.current.width = width;
        canvasRef.current.height = height;
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    let animationFrameId;
    
    const animate = () => {
      const imageData = ctx.createImageData(dimensions.width, dimensions.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255 * opacity;
        data[i] = value;     // red
        data[i + 1] = value; // green
        data[i + 2] = value; // blue
        data[i + 3] = 255;   // alpha
      }
      
      ctx.putImageData(imageData, 0, 0);
      
      // Control animation speed
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(animate);
      }, 1000 / speed);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, opacity, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default GradientBackground;