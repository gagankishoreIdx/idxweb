import React from 'react';

const CryptoTokensGrid = () => {
  // Popular crypto tokens with their icons and names
  const tokens = [
    { name: "Bitcoin", symbol: "BTC", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg" },
    { name: "Ethereum", symbol: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
    { name: "Solana", symbol: "SOL", icon: "https://cryptologos.cc/logos/solana-sol-logo.svg" },
    { name: "Cardano", symbol: "ADA", icon: "https://cryptologos.cc/logos/cardano-ada-logo.svg" },
    { name: "Polkadot", symbol: "DOT", icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg" },
    { name: "Chainlink", symbol: "LINK", icon: "https://cryptologos.cc/logos/chainlink-link-logo.svg" },
    { name: "Polygon", symbol: "MATIC", icon: "https://cryptologos.cc/logos/polygon-matic-logo.svg" },
    { name: "Avalanche", symbol: "AVAX", icon: "https://cryptologos.cc/logos/avalanche-avax-logo.svg" },
    { name: "Uniswap", symbol: "UNI", icon: "https://cryptologos.cc/logos/uniswap-uni-logo.svg" },
    { name: "Binance Coin", symbol: "BNB", icon: "https://cryptologos.cc/logos/bnb-bnb-logo.svg" },
    { name: "Cosmos", symbol: "ATOM", icon: "https://cryptologos.cc/logos/cosmos-atom-logo.svg" },
    { name: "Tezos", symbol: "XTZ", icon: "https://cryptologos.cc/logos/tezos-xtz-logo.svg" }
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 p-4 bg-gray-900 rounded-lg">
      {tokens.map((token, index) => (
        <div key={index} className="flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 border border-gray-700 p-2">
            {/* Using placeholder images because external images aren't allowed */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
              <span className="font-bold text-white text-xs">{token.symbol}</span>
            </div>
          </div>
          <span className="text-gray-300 text-sm">{token.name}</span>
          <span className="text-gray-400 text-xs">{token.symbol}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoTokensGrid;