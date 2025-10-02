'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { skills } from '@/lib/data';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        delay: 0.5,
      },
    }),
  };

  const getImagePath = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      javascript: '/javascript.png',
      typescript: '/TypeScript.png',
      html: '/HTML.png',
      css: '/CSS.png',
      react: '/React.png',
      vue: '/Vue.js.png',
      nextjs: '/Next.js.png',
      nuxt: '/Nuxt JS.png',
      ionic: '/Ionic.png',
      tailwind: '/Tailwind CSS.png',
      bootstrap: '/Bootstrap.png',
      sass: '/SASS.png',
      git: '/Git.png',
      github: '/GitHub.png',
      webstorm: '/WebStorm.png',
      figma: '/Figma.png',
    };
    return iconMap[iconName] || '/default-icon.png';
  };

  const skillCategories = {
    languages: skills.filter(skill => skill.category === 'languages'),
    frontend: skills.filter(skill => skill.category === 'frontend'),
    tools: skills.filter(skill => skill.category === 'tools'),
  };

  return (
    <section id="skills" className="section-padding bg-dark-900">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to create amazing web experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="space-y-16">
            {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
              <motion.div key={category} variants={itemVariants} className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 capitalize">
                    {category === 'languages' ? 'Programming Languages' : 
                     category === 'frontend' ? 'Frontend Technologies' : 
                     'Tools & Others'}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -10,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      <div className="glass-effect rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 h-full">
                        {/* Skill Icon */}
                        <div className="relative w-16 h-16 mx-auto mb-4">
                          <Image
                            src={getImagePath(skill.icon || '')}
                            alt={skill.name}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Skill Name */}
                        <h4 className="font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                          {skill.name}
                        </h4>

                        {/* Progress Bar */}
                        <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
                          <motion.div
                            custom={skill.level}
                            variants={progressVariants}
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          ></motion.div>
                        </div>

                        {/* Skill Level */}
                        <span className="text-sm text-gray-400">
                          {skill.level}%
                        </span>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'OOP', 'Data Structures', 'Algorithms', 'Design Patterns',
                'REST APIs', 'WebSockets', 'Responsive Design', 'UI/UX',
                'Version Control', 'Agile Development', 'Testing', 'Performance Optimization'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 border border-white/10 hover:border-primary-500/50"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 glass-effect rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Fast Development</h4>
                <p className="text-sm text-gray-400">Efficient coding practices and modern tools for rapid development</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Beautiful Design</h4>
                <p className="text-sm text-gray-400">Creating visually appealing and user-friendly interfaces</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Performance</h4>
                <p className="text-sm text-gray-400">Optimized code for fast loading and smooth user experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
