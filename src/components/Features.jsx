"use client";

import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FeatureCard from '../components/FeatureCard';

export default function FeatureSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: "sparkles",
      title: "AI-Powered Analytics",
      description: "Leverage the power of artificial intelligence to gain insights from your data and make informed decisions.",
      delay: 100,
    },
    {
      icon: "shield",
      title: "Enterprise Security",
      description: "Rest easy with our industry-leading security measures that protect your sensitive data and privacy.",
      delay: 200,
    },
    {
      icon: "chart",
      title: "Real-time Dashboard",
      description: "Monitor your performance with beautiful, interactive dashboards that update in real-time.",
      delay: 300,
    },
    {
      icon: "globe",
      title: "Global Infrastructure",
      description: "Our distributed network ensures fast, reliable access from anywhere in the world, with 99.9% uptime.",
      delay: 400,
    },
    {
      icon: "integration",
      title: "Seamless Integrations",
      description: "Connect with your favorite tools and services through our extensive API and integration library.",
      delay: 500,
    },
    {
      icon: "support",
      title: "24/7 Priority Support",
      description: "Get help when you need it with our dedicated customer support team available around the clock.",
      delay: 600,
    },
  ];

  return (
    <section ref={ref} className="section-padding" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            <span className="gradient-text">Powerful Features</span> For Modern Teams
          </h2>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto">
            Our platform provides everything you need to streamline your workflow, 
            boost productivity, and scale your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isVisible={inView}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}