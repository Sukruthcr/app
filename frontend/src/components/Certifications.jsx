import React from 'react';
import { Award, Trophy, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Analytics and Visualization',
      organization: 'Accenture',
      description: 'Earned completion certificate from Accenture',
      color: 'purple'
    },
    {
      title: 'Software Engineering Job Simulation',
      organization: 'JPMorgan Chase & Co.',
      description: 'Earned completion certificate from JPMorgan Chase & Co.',
      color: 'blue'
    }
  ];

  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600'
  };

  return (
    <section id="certifications" className="py-20 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Achievements</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Professional certifications and accomplishments</p>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Certifications */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${colorClasses[cert.color]} p-3 rounded-xl flex-shrink-0`}>
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{cert.organization}</p>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathon Achievement */}
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-8 rounded-2xl border-2 border-green-500/50 hover:border-green-400 transition-all">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-xl flex-shrink-0">
                <Trophy className="text-white" size={36} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Hackathon Participation</h3>
                <p className="text-green-400 text-lg font-semibold mb-2">0x.day Hackathon 2025</p>
                <p className="text-gray-300 mb-3">
                  Participated in the prestigious 0x.day Hackathon 2025 at SMVEC Pondicherry with the project <span className="text-cyan-400 font-semibold">"Smart Parking using AI/ML"</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                    AI/ML
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                    Smart Parking
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                    2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;