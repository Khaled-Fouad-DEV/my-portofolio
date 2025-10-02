'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code, Users, Target, Lightbulb } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const stats = [
    { label: 'Years Experience', value: '2+', icon: Code },
    { label: 'Projects Completed', value: '10+', icon: Target },
    { label: 'Technologies', value: '15+', icon: Lightbulb },
    { label: 'Happy Clients', value: '13+', icon: Users },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: personalInfo.education.degree,
      details: `${personalInfo.education.university} • ${personalInfo.education.grade}`,
    },
    {
      icon: Award,
      title: 'Certification',
      description: personalInfo.certification.title,
      details: 'First place in group for outstanding technical skills',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50 overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">       
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Passionate about creating exceptional user experiences through clean, efficient, and modern web applications. 
              I combine technical expertise with creative problem-solving to deliver solutions that make a real impact.
            </motion.p>
          </motion.div>

          {/* Main Content Section */}
          <div className="mb-20">
            {/* Bio Section */}
            <motion.div 
              variants={itemVariants}
              className="relative mb-16 overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 rounded-3xl"></div>
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 max-w-full"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 max-w-full"></div>
              
              <div className="relative glass-effect rounded-3xl p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-white mb-8">My Story</h3>
                  <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                    <p>
                      {personalInfo.bio}
                    </p>
                    <p>
                      I specialize in building responsive web applications using modern frameworks like Vue.js, React, and Next.js. 
                      My approach combines technical expertise with a keen eye for design, ensuring that every project not only 
                      functions flawlessly but also provides an exceptional user experience.
                    </p>
                    <p>
                      When I&apos;m not coding, I enjoy staying up-to-date with the latest web technologies, contributing to open-source 
                      projects, and continuously learning new skills to enhance my development capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats and Highlights Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Stats Section */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-effect rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group"
                    >
                      <div className="p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                        className="text-3xl font-bold gradient-text mb-2"
                      >
                        {stat.value}
                      </motion.div>
                      <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Highlights Section */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">Education & Achievements</h3>
                <div className="space-y-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.title}
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, y: -3 }}
                      className="glass-effect rounded-2xl p-6 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <highlight.icon className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-300 font-medium mb-2">{highlight.description}</p>
                          <p className="text-sm text-gray-400">{highlight.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* What I Do Section */}
          <motion.div 
            variants={itemVariants}
            className="relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 max-w-full"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-600/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 max-w-full"></div>
            
            <div className="relative glass-effect rounded-3xl p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">What I Do</h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  I specialize in creating modern, efficient, and user-friendly web applications that deliver exceptional experiences.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { 
                    title: 'Frontend Development', 
                    description: 'Building responsive and interactive user interfaces with modern frameworks',
                    icon: '🎨'
                  },
                  { 
                    title: 'Component Architecture', 
                    description: 'Creating reusable and maintainable components for scalable applications',
                    icon: '🧩'
                  },
                  { 
                    title: 'Performance Optimization', 
                    description: 'Ensuring fast loading times and smooth user experiences',
                    icon: '⚡'
                  },
                  { 
                    title: 'Modern Frameworks', 
                    description: 'Working with Vue.js, React, Next.js, and cutting-edge technologies',
                    icon: '🚀'
                  },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="group text-center"
                  >
                    <div className="glass-effect rounded-2xl p-8 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 h-full">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
