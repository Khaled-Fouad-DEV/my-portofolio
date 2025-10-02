'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ExternalLink, Github, Eye, Code, Globe } from 'lucide-react';
import { projects } from '@/lib/data';

const Projects = () => {
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
    hidden: { y: 50, opacity: 0 },
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

  return (
    <section id="projects" className="section-padding bg-dark-900 overflow-hidden">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating my skills in frontend development and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 h-full">
                  {/* Project Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Project Number */}
                    <div className="absolute top-4 left-4 w-10 h-10 bg-primary-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-primary-400 font-bold text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.05, duration: 0.3 }}
                            className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.6 + index * 0.2 + featureIndex * 0.1, duration: 0.4 }}
                            className="text-sm text-gray-400 flex items-start space-x-2"
                          >
                            <span className="text-primary-400 mt-1 flex-shrink-0">•</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 hover:from-primary-500/20 hover:to-primary-600/20 border border-primary-500/20 hover:border-primary-500/40 rounded-xl transition-all duration-300 text-sm font-semibold group"
                        >
                          <Code className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                          <span className="text-primary-300 group-hover:text-primary-200 transition-colors duration-300">
                            View Source Code
                          </span>
                          <ExternalLink className="w-4 h-4 text-primary-400/60 group-hover:text-primary-300/80 transition-colors duration-300" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I&apos;m constantly working on new projects and improving existing ones. 
                Check out my GitHub profile for more repositories and contributions.
              </p>
              <motion.a
                href="https://github.com/Khaled-Fouad-DEV"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 btn-primary"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
