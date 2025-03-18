"use client";

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function PricingSection() {
  const [annually, setAnnually] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects.",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "24/7 support",
        "1 team member",
        "5GB storage",
        "Standard integrations"
      ],
      cta: "Get Started",
      popular: false,
      delay: 100
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and businesses.",
      monthlyPrice: 79,
      annualPrice: 64,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "Up to 10 team members",
        "50GB storage",
        "Premium integrations",
        "Custom reporting",
        "API access"
      ],
      cta: "Get Started",
      popular: true,
      delay: 200
    },
    {
      name: "Enterprise",
      description: "Tailored solutions for large organizations.",
      monthlyPrice: 199,
      annualPrice: 159,
      features: [
        "Unlimited everything",
        "Enterprise analytics",
        "Dedicated support team",
        "Unlimited team members",
        "500GB storage",
        "All integrations",
        "Advanced security",
        "Custom development",
        "Onboarding assistance"
      ],
      cta: "Contact Sales",
      popular: false,
      delay: 300
    }
  ];

  return (
    <section ref={ref} className="section-padding" id="pricing">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300/90 max-w-3xl mx-auto mb-10">
            Choose the perfect plan for your needs. No hidden fees or surprises.
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm ${!annually ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setAnnually(!annually)}
              className="relative w-16 h-8 bg-gray-800 rounded-full p-1 transition-colors"
            >
              <span 
                className={`absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-transform transform ${
                  annually ? 'translate-x-8' : 'translate-x-0'
                }`} 
              />
            </button>
            <span className={`text-sm ${annually ? 'text-white' : 'text-gray-400'}`}>
              Annually <span className="text-xs text-green-400 ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const [visible, setVisible] = useState(false);
            
            useEffect(() => {
              if (inView) {
                const timer = setTimeout(() => {
                  setVisible(true);
                }, plan.delay);
                
                return () => clearTimeout(timer);
              }
            }, [inView]);
            
            return (
              <div 
                key={index}
                className={`glass-card border ${
                  plan.popular ? 'border-purple-500/50' : 'border-white/10'
                } rounded-2xl overflow-hidden transition-all duration-700 transform ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-center py-2">
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-sora font-semibold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ${annually ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 ml-2">/ month</span>
                    
                    {annually && (
                      <div className="text-green-400 text-sm mt-1">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={plan.popular ? "/signup" : "/contact"} 
                    className={`block text-center py-3 px-6 rounded-full font-medium ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg' 
                        : 'bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10'
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}