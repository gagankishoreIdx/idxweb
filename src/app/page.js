"use client";

import { useEffect, useState } from 'react';
import { ScrollProgressBar } from './components/ScrollIndicator';
import Link from 'next/link';
import { GradientBackground } from './components/AnimatedBackground';
import Card3D from './components/Card3D';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-xl font-medium text-white">Loading IDX Wallet</div>
        </div>
      </div>
    );
  }
  
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <ScrollProgressBar color="bg-blue-500" height="h-1" />
      
      
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 flex items-center min-h-screen">
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Next-Gen</span> iDX Wallet for Web3
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Secure, intuitive, and powerful. IDX Wallet gives you complete control over your digital assets with cutting-edge security and a seamless user experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/download" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg transition-all font-medium">
                    Download Now
                  </Link>
                  <Link href="/learn" className="px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors font-medium border border-gray-700">
                    Learn More
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-gray-900"></div>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-semibold">10,000+</span> users trust IDX Wallet
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative animate-fade-in">
                <div className="absolute -inset-4 bg-blue-500 bg-opacity-20 rounded-lg blur-xl"></div>
                <div className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden p-2">
                  {/* Placeholder wallet interface image */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">Wallet Interface Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              IDX Wallet redefines what you can expect from a blockchain wallet with these powerful features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Multi-Chain Support",
                description: "Seamlessly manage assets across Bitcoin, Ethereum, Solana, and multiple other blockchains in one unified interface.",
                icon: "globe"
              },
              {
                title: "Bank-Grade Security",
                description: "Advanced encryption, biometric authentication, and hardware security module integration keep your assets safe.",
                icon: "shield"
              },
              {
                title: "DeFi Integration",
                description: "Access decentralized exchanges, lending protocols, and yield farming opportunities directly from your wallet.",
                icon: "chart"
              },
              {
                title: "Smart Contract Interaction",
                description: "Effortlessly interact with dApps and smart contracts with our intuitive interface and built-in contract analyzer.",
                icon: "code"
              },
              {
                title: "NFT Portfolio",
                description: "View, manage, and showcase your NFT collection with our beautiful gallery view and instant market valuation.",
                icon: "image"
              },
              {
                title: "Cross-Device Sync",
                description: "Access your wallet from any device with secure cloud synchronization that never compromises your private keys.",
                icon: "sync"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 text-blue-400"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Security Section */}
      <section id="security" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enterprise-Grade <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Security</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your security is our top priority. IDX Wallet incorporates multiple layers of protection to ensure your assets remain safe.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Non-Custodial Architecture",
                    description: "You maintain complete control of your private keys at all times – we never have access to your funds."
                  },
                  {
                    title: "Secure Enclave Technology",
                    description: "Private keys are stored in your device's secure enclave, isolated from the operating system."
                  },
                  {
                    title: "Advanced Transaction Verification",
                    description: "Every transaction is verified for suspicious activity and analyzed for potential smart contract vulnerabilities."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto p-8">
                  <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-30 animate-pulse"></div>
                    <div className="absolute inset-4 bg-gray-800 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Military-Grade Encryption</h3>
                        <p className="text-gray-400">AES-256 encryption and secure element technology protect your digital assets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500 bg-opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-600 bg-opacity-30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience the Future of iDX Wallets?
                </h2>
                <p className="text-gray-300 mb-6">
                  Download IDX Wallet today and take control of your digital assets with unparalleled security and ease of use.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/download" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg transition-all font-medium">
                    Download Now
                  </Link>
                  <Link href="/contact" className="px-6 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors font-medium border border-gray-600">
                    Contact Team
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Ecosystem Section */}
       <section id="ecosystem" className="py-20 relative">
        <div className="absolute inset-0 -z-10">
          <GradientBackground
            colors={['#1e1b4b', '#0f172a', '#0f172a', '#1e1b4b']}
            speed={1}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ecosystem</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              IDX Wallet is more than just a wallet. It's an entire ecosystem designed to enhance your crypto experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "IDX Swap",
                description: "Exchange tokens at the best rates with our built-in DEX aggregator",
                icon: "swap"
              },
              {
                title: "IDX Bridge",
                description: "Move assets between blockchains seamlessly with low fees",
                icon: "bridge"
              },
              {
                title: "IDX Staking",
                description: "Earn passive income by staking your assets directly in your wallet",
                icon: "staking"
              },
              {
                title: "IDX Explorer",
                description: "Browse and interact with dApps in our secure built-in browser",
                icon: "explorer"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 text-white"></div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Roadmap Section */}
       <section id="roadmap" className="py-20 relative">
        <div className="absolute inset-0 -z-10">
          <GradientBackground
            colors={['#0f172a', '#1e1b4b', '#312e81', '#1e1b4b']}
            speed={1}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Roadmap</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our vision for the future of IDX Wallet and the upcoming features we're working on
            </p>
          </div>
          
          <div className="relative flex flex-col max-w-3xl mx-auto">
            {/* Central line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>
            
            {/* Roadmap items */}
            {[
              {
                title: "Q1 2023: Launch & Core Features",
                description: "Initial release with multi-chain support, secure key management, and basic transaction capabilities",
                status: "Completed"
              },
              {
                title: "Q2 2023: DeFi Integration",
                description: "Integration with popular DEXs, lending protocols, and yield farming platforms",
                status: "Completed"
              },
              {
                title: "Q3 2023: NFT Support & Portfolio Tracking",
                description: "Enhanced NFT gallery, collection management, and comprehensive portfolio analytics",
                status: "Completed"
              },
              {
                title: "Q4 2023: Cross-Chain Bridge",
                description: "Seamless asset transfers between different blockchains with competitive fees",
                status: "In Progress"
              },
              {
                title: "Q1 2024: Institutional Features",
                description: "Multi-signature support, enhanced security features, and enterprise-grade access controls",
                status: "Planned"
              },
              {
                title: "Q2 2024: Mobile App 2.0",
                description: "Complete redesign of the mobile experience with advanced features and improved performance",
                status: "Planned"
              }
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-2 md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-12 md:pr-12 md:text-right' : 'md:ml-12 md:pl-12 md:text-left'
                } w-full md:w-1/2`}>
                  <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      item.status === 'Completed' ? 'bg-green-500 bg-opacity-20 text-green-400' :
                      item.status === 'In Progress' ? 'bg-blue-500 bg-opacity-20 text-blue-400' :
                      'bg-purple-500 bg-opacity-20 text-purple-400'
                    }`}>
                      {item.status}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Testimonials Section */}
       <section id="community" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by the Community
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Join thousands of crypto enthusiasts who have made IDX Wallet their go-to digital asset manager
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "IDX Wallet has completely transformed how I interact with DeFi protocols. The interface is intuitive and the security features give me peace of mind.",
                author: "Alex Thompson",
                role: "DeFi Investor"
              },
              {
                quote: "As someone who collects NFTs across multiple blockchains, IDX Wallet has been a game-changer. I can view my entire collection in one place.",
                author: "Sophia Rodriguez",
                role: "NFT Collector"
              },
              {
                quote: "The cross-chain capabilities are incredible. I can manage my entire crypto portfolio without constantly switching between different wallets.",
                author: "Michael Chen",
                role: "Crypto Trader"
              }
            ].map((testimonial, index) => (
              <Card3D key={index} className="h-full bg-gray-800 border border-gray-700 p-6">
                <div className="mb-4 text-blue-400">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </Card3D>
            ))}
          </div>
          
          {/* Stats section within testimonials */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "100+", label: "Supported Blockchains" },
              { number: "10,000+", label: "Active Users" },
              { number: "$100M+", label: "Assets Managed" },
              { number: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* Supported Tokens Section */}
        <section id="tokens" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Tokens</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              IDX Wallet supports a wide range of cryptocurrencies and tokens across multiple blockchains
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {/* Token logos */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <div key={index} className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 border border-gray-700">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
                </div>
                <span className="text-gray-300 text-sm">Token {index}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/tokens" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              View all supported tokens
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
     
    </main>
  );
}