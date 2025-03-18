"use client";

import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function AboutUsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-transparent to-black-40" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <div className={`relative transition-all duration-1000 ease-out transform ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Placeholder for actual image - in a real project, use a proper image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500-10 to-indigo-600-30 backdrop-blur-sm">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
              </div>
              
              {/* Abstract shapes */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-600-40 to-indigo-600-40 blur-lg"></div>
              <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500-30 to-cyan-500-30 blur-lg"></div>
              
              {/* Stats floating on top */}
              <div className="absolute top-1/4 left-0 glass-card p-4 shadow-xl">
                <h4 className="text-2xl font-bold mb-1 gradient-text">15+</h4>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              
              <div className="absolute bottom-1/4 right-0 glass-card p-4 shadow-xl">
                <h4 className="text-2xl font-bold mb-1 gradient-text">200+</h4>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
              
              <div className="absolute bottom-0 left-1/4 glass-card p-4 shadow-xl">
                <h4 className="text-2xl font-bold mb-1 gradient-text">50M+</h4>
                <p className="text-sm text-gray-400">Active Users</p>
              </div>
            </div>
          </div>
          
          {/* Content side */}
          <div className={`transition-all duration-1000 ease-out transform ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <h2 className="heading-lg mb-6">
              Revolutionizing <span className="gradient-text">Digital Experiences</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6">
              We're a team of passionate innovators dedicated to creating cutting-edge solutions 
              that empower businesses and individuals alike.
            </p>
            
            <p className="text-gray-400 mb-8">
              Founded in 2010, our mission has always been to push the boundaries of what's 
              possible in the digital landscape. We combine advanced technology with human-centered 
              design to deliver experiences that are not just functional, but transformative.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Innovation-First Approach</h3>
                  <p className="text-gray-400">We continuously explore emerging technologies and methodologies to stay ahead.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Customer-Centric Philosophy</h3>
                  <p className="text-gray-400">Everything we build starts with understanding our users' needs and challenges.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Global Reach, Local Impact</h3>
                  <p className="text-gray-400">Our solutions are used worldwide but tailored to meet local market needs.</p>
                </div>
              </div>
            </div>
            
            <button className="button-primary">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}