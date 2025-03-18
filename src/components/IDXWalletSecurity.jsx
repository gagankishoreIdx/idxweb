import React from 'react';
import { Key, Shield, CircuitBoard, AlertTriangle, Lock } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      title: "Non-Custodial Architecture",
      description: "You maintain complete control of your private keys at all times – we never have access to your funds.",
      icon: <Key className="w-4 h-4 text-white" />
    },
    {
      title: "Secure Enclave Technology",
      description: "Private keys are stored in your device's secure enclave, isolated from the operating system.",
      icon: <CircuitBoard className="w-4 h-4 text-white" />
    },
    {
      title: "Advanced Transaction Verification",
      description: "Every transaction is verified for suspicious activity and analyzed for potential smart contract vulnerabilities.",
      icon: <AlertTriangle className="w-4 h-4 text-white" />
    }
  ];

  return (
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
              {securityFeatures.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0 mt-1 flex items-center justify-center">
                    {item.icon}
                  </div>
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
                        <Lock className="w-12 h-12 text-white" />
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
  );
};

export default SecuritySection;