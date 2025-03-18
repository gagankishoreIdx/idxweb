import React from 'react';
import { Globe, Shield, LineChart, Code, Image, RefreshCw } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Multi-Chain Support",
      description: "Seamlessly manage assets across Bitcoin, Ethereum, Solana, and multiple other blockchains in one unified interface.",
      icon: <Globe className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Bank-Grade Security",
      description: "Advanced encryption, biometric authentication, and hardware security module integration keep your assets safe.",
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: "DeFi Integration",
      description: "Access decentralized exchanges, lending protocols, and yield farming opportunities directly from your wallet.",
      icon: <LineChart className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Smart Contract Interaction",
      description: "Effortlessly interact with dApps and smart contracts with our intuitive interface and built-in contract analyzer.",
      icon: <Code className="w-6 h-6 text-blue-400" />
    },
    {
      title: "NFT Portfolio",
      description: "View, manage, and showcase your NFT collection with our beautiful gallery view and instant market valuation.",
      icon: <Image className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Cross-Device Sync",
      description: "Access your wallet from any device with secure cloud synchronization that never compromises your private keys.",
      icon: <RefreshCw className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            IDX Wallet redefines what you can expect from a blockchain wallet with these powerful features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;