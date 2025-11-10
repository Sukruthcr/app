import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Download } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sukruthcr8269@gmail.com',
      link: 'mailto:sukruthcr8269@gmail.com',
      color: 'cyan'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6363107451',
      link: 'tel:+916363107451',
      color: 'green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/sukruth-cr-7061a0257',
      color: 'blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Sukruthcr',
      link: 'https://github.com/Sukruthcr',
      color: 'purple'
    }
  ];

  const colorClasses = {
    cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1f2e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">Let's connect and discuss opportunities</p>
        
        <div className="max-w-4xl mx-auto">
          {/* Resume Download Button */}
          <div className="mb-8 text-center">
            <a
              href="https://customer-assets.emergentagent.com/job_personal-showcase-72/artifacts/nr4tjkpc_Resume%20%28p%29.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              <Download size={24} />
              Download Resume
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-br ${colorClasses[item.color]} p-3 rounded-xl`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">{item.label}</h3>
                      <p className="text-gray-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-cyan-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-300 mb-6">Bangalore, Karnataka, India</p>
            <p className="text-gray-400 text-sm">
              Open to opportunities in AI/ML, Full Stack Development, and Robotics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;