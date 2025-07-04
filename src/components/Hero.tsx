import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"></div>
      
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-zinc-400 text-sm font-light tracking-[0.2em] uppercase">
              Full Stack Developer
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight leading-none tracking-tight">
              <span className="block text-white">Yudho</span>
              <span className="block text-zinc-500">Satrio</span>
            </h1>
          </div>
          
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Every line of code and pixel has a reason. No fluff, just function.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white text-black text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:bg-zinc-100"
            >
              Get In Touch
              <span className="absolute inset-0 border border-white group-hover:border-zinc-300 transition-colors duration-300"></span>
            </a>
            <a
              href="#projects"
              className="group relative px-8 py-4 border border-zinc-700 text-white text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:border-zinc-500"
            >
              View Work
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300"></span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-8 pt-12">
            <a
              href="https://github.com/kenzonuts"
              className="text-zinc-600 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/gunawan-yudho-satrio-645700298/"
              className="text-zinc-600 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="Yudhothepublic@gmail.com"
              className="text-zinc-600 hover:text-white transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-zinc-600 hover:text-white transition-colors duration-300 animate-bounce">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;