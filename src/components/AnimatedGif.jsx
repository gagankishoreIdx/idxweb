"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const AnimatedGif = ({
  src,
  alt,
  width,
  height,
  className = '',
  effect = 'none', // 'fade', 'zoom', 'slide', 'blur', 'none'
  lazyLoad = true,
  priority = false,
  onClick,
  blurDataURL,
  loop = true,
  autoPlay = true,
  controls = false,
  containerClassName = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // For observer-based lazy loading (if enabled)
    if (!lazyLoad || priority) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, [lazyLoad, priority]);

  // Determine appropriate effect classes
  const getEffectClasses = () => {
    switch (effect) {
      case 'fade':
        return `transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`;
      case 'zoom':
        return `transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-95'}`;
      case 'slide':
        return `transition-transform duration-1000 ${isLoaded ? 'translate-y-0' : 'translate-y-8'}`;
      case 'blur':
        return `transition-all duration-1000 ${isLoaded ? 'blur-none' : 'blur-md'}`;
      default:
        return '';
    }
  };

  // For GIFs that should be displayed as video elements for better performance
  const useVideoElement = src?.endsWith('.gif') && (controls || !autoPlay);

  if (useVideoElement) {
    return (
      <div ref={imgRef} className={`relative overflow-hidden ${containerClassName}`}>
        <video
          width={width}
          height={height}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted
          playsInline
          className={`${className} ${getEffectClasses()}`}
          onClick={onClick}
        >
          <source src={src} type="video/mp4" />
          {alt}
        </video>
      </div>
    );
  }

  // If it's a Next.js Image component (GIF loaded as image)
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${containerClassName}`}>
      {(isLoaded || priority) && (
        <Image
          src={src}
          alt={alt || "Animated GIF"}
          width={width}
          height={height}
          className={`${className} ${getEffectClasses()}`}
          onClick={onClick}
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          priority={priority}
          unoptimized={true} // Important for GIFs to work properly
        />
      )}
    </div>
  );
};

// GIF with hover effect (plays on hover)
export const HoverGif = ({
  staticSrc, // Static image shown by default
  gifSrc,   // GIF shown on hover
  alt,
  width,
  height,
  className = '',
  containerClassName = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? gifSrc : staticSrc}
        alt={alt || "Interactive GIF"}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${className}`}
        unoptimized={true}
      />
    </div>
  );
};

// GIF with click to play/pause functionality
export const ClickGif = ({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = ''
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  return (
    <div className={`relative overflow-hidden cursor-pointer ${containerClassName}`} onClick={togglePlay}>
      <video
        ref={videoRef}
        width={width}
        height={height}
        loop
        muted
        playsInline
        className={className}
      >
        <source src={src} type="video/mp4" />
        {alt}
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default AnimatedGif;