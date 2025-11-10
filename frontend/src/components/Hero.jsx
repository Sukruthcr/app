import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0f1419] pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTk2ZjMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNi0yLjY4NiA2LTZWMEg0MHY0YzAgMy4zMTQtMi42ODYgNi02IDZIM1Y0SDBoNHYyNGgxNnYySDBoMTh2MkgyMHYyaDI0djJIMjB2MmgyNHYySDE2djJoMjh2MTBoLTR2LTJoLTJ2NGgydjRoMnYtMmgydjJoNHYyaDJ2LTZoNFYzNmg0djJoMnYtMmgydjJoMnYtMmg0di0yaDJ2LTJoLTJ2LTJoMnYtMmgtMnYtMmgydi0yaC00di0yaC0ydi0yaC0ydi0yaC0ydi0yaC0ydi0yaC0ydi0yaDJ2LTJoNHYtNmgtNHYtMmg0di0yaC00djJoLTJ2LTZoMnYtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2Mmgtc3YtMmgtMnYyaC0ydi02aDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-cyan-400 mx-auto shadow-xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_personal-showcase-72/artifacts/7kcflefa_IMG_20251025_104215_330.jpg" 
                alt="Sukruth CR" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Sukruth CR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-3">
            AI & Robotics Engineer | Full Stack & AI Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            B.Tech 4th Year Student at Presidency University specializing in AI & Robotics with a passion for building intelligent solutions
          </p>
          
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <a
              href="https://github.com/Sukruthcr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sukruth-cr-7061a0257"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
          
          <div className="flex justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span className="text-sm">sukruthcr8269@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span className="text-sm">6363107451</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;