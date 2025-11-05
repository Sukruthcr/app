import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking',
      description: 'A web application that provides real-time parking availability and predictive analytics using machine learning. Developed with HTML, CSS, JavaScript for front-end, and Python (Flask) for back-end, enabling users to find available parking spots in real-time.',
      technologies: ['Python', 'Flask', 'JavaScript', 'Keras', 'TensorFlow', 'PyTorch'],
      gradient: 'from-cyan-500 to-blue-600',
      highlights: ['Real-time availability updates', 'Predictive analytics with ML', 'User-friendly interface'],
      githubUrl: 'https://github.com/Sukruthcr'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'An intelligent chatbot designed to provide automated responses using NLP techniques. Developed using Python and Natural Language Processing to understand and respond to user queries. Utilized NLTK and machine learning libraries for training on predefined datasets.',
      technologies: ['Python', 'NLP', 'NLTK', 'Machine Learning'],
      gradient: 'from-purple-500 to-pink-600',
      highlights: ['Natural Language Processing', 'Automated query responses', 'Web interface integration'],
      githubUrl: 'https://github.com/Sukruthcr'
    },
    {
      title: 'Future Us Website',
      description: 'A deployed modern responsive website with clean UI/UX. Designed and developed with smooth user experience using React.js and Tailwind CSS. Deployed on Vercel for scalability with modern UI components, animations, and mobile-friendly design.',
      technologies: ['React.js', 'Tailwind CSS', 'Vercel', 'JavaScript'],
      gradient: 'from-green-500 to-teal-600',
      highlights: ['Responsive design', 'Modern UI/UX', 'Deployed on Vercel'],
      githubUrl: 'https://github.com/Sukruthcr',
      liveUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1a1f2e]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Some of my recent work</p>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                  <ul className="grid md:grid-cols-3 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;