import React from 'react';
import { Award, ExternalLink, Github } from 'lucide-react';

const MajorProject = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Major <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Project</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Flagship research and development work</p>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-2xl border-2 border-green-500/50 hover:border-green-400 transition-all overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Arecanut Disease Prediction using CNN</h3>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-500/20 px-4 py-2 rounded-full border border-green-500/50">
                    <span className="text-green-400 font-bold text-xl">93% Accuracy</span>
                  </div>
                  <div className="bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/50">
                    <span className="text-cyan-400 font-semibold">Deep Learning</span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Developed an AI model to detect arecanut leaf diseases with <span className="text-green-400 font-bold">93% accuracy</span> using Convolutional Neural Networks (CNN). This project addresses a critical agricultural challenge by providing early disease detection capabilities.
                </p>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Proposed deployment via mobile app</span> to assist rural farmers in identifying diseases in real-time, enabling timely intervention and reducing crop loss.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 text-lg">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Real-time disease detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>CNN-based image classification</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Mobile app deployment ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Farmer-centric design</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Mobile App Development'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProject;