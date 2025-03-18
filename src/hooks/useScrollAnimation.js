"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {string} options.animation - Animation class to apply
 * @param {number} options.delay - Delay in ms before animation starts
 * @param {boolean} options.once - Whether to trigger the animation only once
 * @returns {Object} - Ref and classes to apply
 */
export default function useScrollAnimation({
  animation = 'fade-in',
  delay = 0,
  once = true
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const checkVisibility = useCallback(() => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Check if element is in viewport
    const isInViewport = (
      rect.top <= windowHeight * 0.75 && 
      rect.bottom >= 0
    );
    
    // If element is visible and (we want repeated animations or it hasn't animated yet)
    if (isInViewport && (!once || !hasAnimated)) {
      // Use setTimeout for delay
      if (delay) {
        setTimeout(() => {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        }, delay);
      } else {
        setIsVisible(true);
        if (once) setHasAnimated(true);
      }
    } else if (!isInViewport && !once) {
      // Reset visibility for repeated animations
      setIsVisible(false);
    }
  }, [delay, once, hasAnimated]);

  useEffect(() => {
    // Check visibility initially
    checkVisibility();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
    
    // Cleanup
    return () => window.removeEventListener('scroll', checkVisibility);
  }, [checkVisibility]);

  // Animation classes based on visibility
  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return { ref, animationClass, isVisible };
}

/**
 * Hook for parallax scrolling effect
 * @param {number} speed - Parallax speed factor
 * @returns {Object} - Ref and style to apply
 */
export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!ref.current) return;
    const scrollY = window.scrollY;
    setOffset(scrollY * speed);
  }, [speed]);

  useEffect(() => {
    // Initialize
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const style = {
    transform: `translateY(${offset}px)`
  };

  return { ref, style };
}
export function useTilt(maxTilt = 15) {
    const ref = useRef(null);
    const [style, setStyle] = useState({});
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / width;
        const y = (e.clientY - top - height / 2) / height;
  
        setStyle({
          transform: `rotateX(${y * maxTilt}deg) rotateY(${x * maxTilt}deg)`,
        });
      };
  
      const handleMouseLeave = () => {
        setStyle({ transform: "rotateX(0) rotateY(0)" });
      };
  
      if (ref.current) {
        ref.current.addEventListener("mousemove", handleMouseMove);
        ref.current.addEventListener("mouseleave", handleMouseLeave);
      }
  
      return () => {
        if (ref.current) {
          ref.current.removeEventListener("mousemove", handleMouseMove);
          ref.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }, [maxTilt]);
  
    return { ref, style };
  }