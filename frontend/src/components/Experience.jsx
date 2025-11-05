import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experience</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Professional journey and contributions</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">App Development Intern</h3>
                <p className="text-cyan-400 text-lg font-semibold mb-2">Plentra Technologies Pvt Ltd</p>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jul 2024 – Aug 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Bangalore</span>
                  </div>
                </div>
              </div>
              <div className="bg-cyan-500/10 p-3 rounded-lg">
                <Briefcase className="text-cyan-400" size={32} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Developed UI/UX improvements for a mobile application using <span className="text-cyan-400 font-semibold">Flutter</span>, resulting in a <span className="text-green-400 font-semibold">15% increase</span> in user engagement based on A/B testing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Collaborated with a team of 5 developers to optimize application performance, reducing load times by <span className="text-green-400 font-semibold">10%</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">
                  Implemented new features and resolved critical bugs, contributing to the on-time delivery of project modules.
                </p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'React.js', 'Git', 'MySQL'].map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;