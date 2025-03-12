"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Hook to animate elements when they come into view
 * @param {Object} options Configuration options
 * @param {number} options.threshold Threshold for intersection observer
 * @param {boolean} options.triggerOnce Whether to trigger only once
 * @param {number} options.delay Animation delay in ms
 * @param {string} options.from Starting transform/opacity values
 * @param {string} options.to End transform/opacity values
 * @returns {Object} Ref and animation classes
 */
export function useAnimateInView({
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  from = 'opacity-0 translate-y-12',
  to = 'opacity-100 translate-y-0'
}) {
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const animationClasses = `transition-all duration-700 ease-out transform ${visible ? to : from}`;

  return { ref, animationClasses, isVisible: visible };
}

/**
 * Hook to stagger animations for a list of items
 * @param {Object} options Configuration options
 * @param {number} options.threshold Threshold for intersection observer
 * @param {boolean} options.triggerOnce Whether to trigger only once
 * @param {number} options.baseDelay Base delay before animations start in ms
 * @param {number} options.staggerDelay Delay between each item in ms
 * @returns {Object} Ref, function to get animation classes for an item
 */
export function useStaggeredAnimation({
  threshold = 0.1,
  triggerOnce = true,
  baseDelay = 0,
  staggerDelay = 100
}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (inView) {
      let timers = [];
      
      // Clear any existing timers
      timers.forEach(timer => clearTimeout(timer));
      timers = [];
      
      const newVisibleItems = [];
      
      // Function to add items with delay
      const addItem = (index) => {
        const timer = setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
          newVisibleItems.push(index);
        }, baseDelay + (index * staggerDelay));
        
        timers.push(timer);
      };
      
      // Start with empty array and add items one by one
      setVisibleItems([]);
      
      // Schedule additions
      for (let i = 0; i < 100; i++) { // Arbitrary large number
        addItem(i);
      }
      
      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    }
  }, [inView, baseDelay, staggerDelay]);

  const getAnimationClass = (index, from = 'opacity-0 translate-y-12', to = 'opacity-100 translate-y-0') => {
    return `transition-all duration-700 ease-out transform ${
      visibleItems.includes(index) ? to : from
    }`;
  };

  return { ref, getAnimationClass, isVisible: (index) => visibleItems.includes(index) };
}