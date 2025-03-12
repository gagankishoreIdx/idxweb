// app/components/TokenGrid.jsx
"use client";

import Link from 'next/link';

export default function TokenGrid() {
  // In a real app, you would fetch these from your API
  const tokens = [
    { id: 1, name: "Bitcoin" },
    { id: 2, name: "Ethereum" },
    { id: 3, name: "Solana" },
    { id: 4, name: "Cardano" },
    { id: 5, name: "Polkadot" },
    { id: 6, name: "Avalanche" },
    { id: 7, name: "Polygon" },
    { id: 8, name: "Binance Coin" },
    { id: 9, name: "Chainlink" },
    { id: 10, name: "Uniswap" },
    { id: 11, name: "Cosmos" },
    { id: 12, name: "Tezos" }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {tokens.map((token) => (
          <div key={token.id} className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 border border-gray-700">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
            <span className="text-gray-300 text-sm">{token.name}</span>
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
  );
}