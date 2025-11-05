import React from 'react';
import { Code2, Brain, Database, Wrench, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'cyan',
      skills: ['Python (Proficient)', 'Java (Intermediate)', 'JavaScript (Intermediate)', 'PHP', 'HTML/CSS']
    },
    {
      title: 'AI/ML & Frameworks',
      icon: Brain,
      color: 'blue',
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'scikit-learn', 'NLTK']
    },
    {
      title: 'Development Tools',
      icon: Database,
      color: 'purple',
      skills: ['React.js', 'Node.js', 'Flask', 'Flutter', 'REST APIs', 'Tailwind CSS']
    },
    {
      title: 'Database & Tools',
      icon: Wrench,
      color: 'green',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'VS Code', 'Docker']
    }
  ];

  const coursework = [
    'Object Oriented Programming',
    'Database Management Systems',
    'Machine Learning',
    'Operating Systems',
    'Computer Networks',
    'Data Structures & Algorithms'
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        {/* Coursework Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 p-3 rounded-xl">
              <BookOpen className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Relevant Coursework</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="bg-gray-900/50 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors border border-gray-700 hover:border-orange-500/50"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;