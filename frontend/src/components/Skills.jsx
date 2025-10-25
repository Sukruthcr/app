import React from 'react';
import { Code2, Brain, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'cyan',
      skills: ['JavaScript', 'Python', 'Java', 'HTML/CSS', 'SQL']
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'blue',
      skills: ['TensorFlow', 'scikit-learn', 'Machine Learning', 'Deep Learning', 'Computer Vision']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Database,
      color: 'purple',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'green',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker']
    }
  ];

  const colorClasses = {
    cyan: 'from-cyan-500 to-cyan-600 border-cyan-500/50 hover:border-cyan-400',
    blue: 'from-blue-500 to-blue-600 border-blue-500/50 hover:border-blue-400',
    purple: 'from-purple-500 to-purple-600 border-purple-500/50 hover:border-purple-400',
    green: 'from-green-500 to-green-600 border-green-500/50 hover:border-green-400'
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Technologies and tools I work with</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[category.color]} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900/50 px-3 py-2 rounded-lg text-gray-300 text-sm hover:bg-gray-700/50 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;