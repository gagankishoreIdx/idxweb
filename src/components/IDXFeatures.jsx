import React from 'react';
import { RefreshCw, ArrowLeftRight, Layers, Coins, Compass } from 'lucide-react';

const IDXFeatures = () => {
  const features = [
    {
      title: "IDX Swap",
      description: "Exchange tokens at the best rates with our built-in DEX aggregator",
      icon: <ArrowLeftRight className="w-6 h-6 text-blue-400" />
    },
    {
      title: "IDX Bridge",
      description: "Move assets between blockchains seamlessly with low fees",
      icon: <Layers className="w-6 h-6 text-blue-400" />
    },
    {
      title: "IDX Staking",
      description: "Earn passive income by staking your assets directly in your wallet",
      icon: <Coins className="w-6 h-6 text-blue-400" />
    },
    {
      title: "IDX Explorer",
      description: "Browse and interact with dApps in our secure built-in browser",
      icon: <Compass className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">IDX Wallet Ecosystem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </div>
  );
};

export default IDXFeatures;