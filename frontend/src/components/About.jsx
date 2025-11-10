import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate AI and Robotics enthusiast currently pursuing my B.Tech in Information Science and Engineering at Presidency University. With a strong foundation in both artificial intelligence and full-stack development, I enjoy creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in technology has been driven by curiosity and a desire to solve complex problems. From building intelligent parking systems to creating AI-powered chatbots, I'm constantly exploring new ways to leverage AI and software development to make a positive impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm also exploring generative AI and robotics automation to create intelligent, adaptive systems.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <GraduationCap className="text-cyan-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-gray-300 font-medium">B.Tech in Information Science & Engineering</p>
                  <p className="text-gray-400">Presidency University, Bangalore</p>
                  <p className="text-gray-400">Specialization: AI & Robotics</p>
                  <p className="text-cyan-400 font-semibold mt-2">Expected 2026 | CGPA: 8.4</p>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 font-medium">Pre-University</p>
                    <p className="text-gray-400">Narayana PU College, Bangalore</p>
                    <p className="text-cyan-400 font-semibold">2022 | Percentage: 81.17%</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <Target className="text-blue-400" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Focus Areas</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Artificial Intelligence & Machine Learning</li>
                    <li>• Natural Language Processing</li>
                    <li>• Full Stack Web Development</li>
                    <li>• Robotics & Automation</li>
                    <li>• Mobile App Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;