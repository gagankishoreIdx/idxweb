// app/components/StatsShowcase.jsx
"use client";

export default function StatsShowcase() {
  const stats = [
    { number: "100+", label: "Supported Blockchains" },
    { number: "10,000+", label: "Active Users" },
    { number: "$100M+", label: "Assets Managed" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            {stat.number}
          </div>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}