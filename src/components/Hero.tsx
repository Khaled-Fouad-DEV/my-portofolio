'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center backdrop-blur-sm"
      >
        <span className="text-2xl">⚛️</span>
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center backdrop-blur-sm"
        style={{ animationDelay: '1s' }}
      >
        <span className="text-xl">💚</span>
      </motion.div>
      
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 w-14 h-14 bg-primary-500/10 rounded-full flex items-center justify-center backdrop-blur-sm"
        style={{ animationDelay: '2s' }}
      >
        <span className="text-xl">⚡</span>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium mb-4 border border-primary-500/20">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-300"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>
              
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <motion.a
                href="https://github.com/Khaled-Fouad"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/khaled-fouad/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
              
              <motion.a
                href="mailto:khaled.fouadv9@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-300 hover:text-white" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div 
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary-500/20 shadow-2xl"
              >
                <Image
                  src="/MyImage.jpg"
                  alt="Khaled Fouad - Frontend Developer"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
              </motion.div>

              {/* Floating Elements around Image */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary-500/30 rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary-500/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
