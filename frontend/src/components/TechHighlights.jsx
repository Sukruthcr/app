import React from 'react';
import { Zap, Code, Cpu } from 'lucide-react';

const TechHighlights = () => {
  const highlights = [
    {
      icon: Cpu,
      text: 'AI & Robotics engineer skilled in real-time intelligent systems',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Code,
      text: 'Full-stack developer experienced in scalable web & mobile apps',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      text: 'Proficient in Python, React.js, and Flutter with hands-on project experience',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Cpu,
      text: 'Strong background in ML, NLP, and automation',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Highlights</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Key strengths and expertise</p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${highlight.color} p-3 rounded-xl flex-shrink-0`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {highlight.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;