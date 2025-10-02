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
    { label: 'Happy Clients', value: '5+', icon: Users },
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
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Passionate about creating exceptional user experiences through clean, efficient, and modern web applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I specialize in building responsive web applications using modern frameworks like Vue.js, React, and Next.js. 
                  My approach combines technical expertise with a keen eye for design, ensuring that every project not only 
                  functions flawlessly but also provides an exceptional user experience.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I&apos;m not coding, I enjoy staying up-to-date with the latest web technologies, contributing to open-source 
                  projects, and continuously learning new skills to enhance my development capabilities.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary-500/10 rounded-lg">
                        <highlight.icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{highlight.title}</h3>
                        <p className="text-sm text-gray-300 mb-1">{highlight.description}</p>
                        <p className="text-xs text-gray-400">{highlight.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg w-fit mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="text-3xl font-bold gradient-text mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold mb-8">What I Do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Frontend Development', description: 'Building responsive and interactive user interfaces' },
                { title: 'Component Architecture', description: 'Creating reusable and maintainable components' },
                { title: 'Performance Optimization', description: 'Ensuring fast and efficient web applications' },
                { title: 'Modern Frameworks', description: 'Working with Vue.js, React, and Next.js' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                >
                  <h4 className="font-semibold text-white mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
