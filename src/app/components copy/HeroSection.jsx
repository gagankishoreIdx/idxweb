"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedGradient from './AnimatedGradient';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background gradient */}
      <AnimatedGradient />
      
      {/* Floating 3D objects */}
      <div className="absolute -z-1 inset-0 overflow-hidden opacity-60">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-600-30 blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500 opacity-20 blur-xl animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 rounded-full bg-indigo-600-30 blur-xl animate-float-fast"></div>
      </div>
      
      {/* Content */}
      <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="heading-xl mb-6 max-w-5xl mx-auto">
          <span className="gradient-text">Revolutionary Platform</span> for the 
          <span className="relative ml-3 inline-block">
            Future
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 opacity-90 max-w-3xl mx-auto mb-10">
          Unlock powerful features and seamless experiences with our next-generation platform. 
          Designed for creators, builders, and innovators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link href="/get-started" className="button-primary">
            Get Started
          </Link>
          <Link href="/learn-more" className="button-secondary">
            Learn More
          </Link>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-3xl mx-auto mt-12">
          <div className="glass-card px-4 py-6">
            <h3 className="text-4xl font-bold mb-1 gradient-text">2M+</h3>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="glass-card px-4 py-6">
            <h3 className="text-4xl font-bold mb-1 gradient-text">500+</h3>
            <p className="text-gray-400">Integrations</p>
          </div>
          <div className="glass-card px-4 py-6">
            <h3 className="text-4xl font-bold mb-1 gradient-text">99.9%</h3>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="glass-card px-4 py-6">
            <h3 className="text-4xl font-bold mb-1 gradient-text">24/7</h3>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white-30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white opacity-70 rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
}