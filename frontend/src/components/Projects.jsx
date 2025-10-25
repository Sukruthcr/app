import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking System',
      description: 'An intelligent parking management system using AI/ML and JavaScript to optimize parking space allocation and reduce search time. Features include real-time availability tracking, automated vehicle detection, and smart routing.',
      technologies: ['AI/ML', 'JavaScript', 'Python', 'Computer Vision', 'IoT'],
      gradient: 'from-cyan-500 to-blue-600',
      highlights: ['Real-time parking detection', 'ML-based predictions', 'Automated space allocation']
    },
    {
      title: 'Future Us',
      description: 'A deployed web application that allows users to write notes today and schedule them to be emailed on future dates. Perfect for creating digital time capsules, setting reminders, and preserving memories.',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Email API'],
      gradient: 'from-purple-500 to-pink-600',
      highlights: ['Scheduled email delivery', 'Note management system', 'Deployed and live'],
      liveUrl: '#'
    },
    {
      title: 'PG Dissertation System',
      description: 'A comprehensive platform designed for final year students to submit their project reports, research papers, and dissertations. Streamlines the submission process with version control, review workflows, and automated notifications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'PDF Processing'],
      gradient: 'from-green-500 to-teal-600',
      highlights: ['Document management', 'Submission workflows', 'Review system']
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