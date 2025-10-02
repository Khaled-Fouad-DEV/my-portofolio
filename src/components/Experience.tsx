'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Code, Users, Zap } from 'lucide-react';
import { experiences } from '@/lib/data';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const rightItemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const getCompanyIcon = (company: string) => {
    switch (company.toLowerCase()) {
      case 'teleoceans':
        return <Code className="w-6 h-6" />;
      case 'freelancer':
        return <Users className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" className="section-padding bg-dark-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              My professional journey in frontend development, showcasing growth and expertise across different roles.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={index % 2 === 0 ? itemVariants : rightItemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.3, duration: 0.5 }}
                      className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/25"
                    >
                      {getCompanyIcon(experience.company)}
                    </motion.div>
                    
                    {/* Current Badge */}
                    {experience.current && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 0.7 + index * 0.3, duration: 0.3 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                      >
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </motion.div>
                    )}
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 glass-effect rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {experience.position}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary-400 font-medium">
                          <span>{experience.company}</span>
                          {experience.current && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm mt-2 sm:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 mb-6">
                      {experience.description.map((desc, descIndex) => (
                        <motion.p
                          key={descIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.3 + descIndex * 0.1, duration: 0.4 }}
                          className="text-gray-300 leading-relaxed flex items-start space-x-2"
                        >
                          <span className="text-primary-400 mt-2 flex-shrink-0">•</span>
                          <span>{desc}</span>
                        </motion.p>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 1 + index * 0.3 + techIndex * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm rounded-full border border-primary-500/20 hover:bg-primary-500/20 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Education</h3>
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">
                    B.Sc. in Computer Science
                  </h4>
                  <p className="text-primary-400 font-medium mb-2">
                    Port Said University, Egypt
                  </p>
                  <p className="text-gray-400 text-sm mb-3">
                    September 2019 – May 2023
                  </p>
                  <p className="text-gray-300">
                    Graduated with <span className="text-primary-400 font-semibold">Very Good with Honors</span>. 
                    Gained strong foundation in computer science fundamentals, programming concepts, 
                    and software development methodologies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification Section */}
          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-2xl font-bold text-center mb-8">Certification</h3>
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <ExternalLink className="w-6 h-6 text-primary-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">
                    ITI Scholarship
                  </h4>
                  <p className="text-primary-400 font-medium mb-2">
                    Information Technology Institute
                  </p>
                  <p className="text-gray-300 mb-3">
                    Achieved <span className="text-primary-400 font-semibold">first place in group</span> for 
                    outstanding technical and collaborative skills. Built multiple interactive web applications 
                    using modern front-end tools and libraries.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Responsive Design', 'UI/UX Principles', 'Version Control'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 text-sm rounded-full border border-primary-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
