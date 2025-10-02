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
      redux: '/Redux.png',
      tailwind: '/Tailwind CSS.png',
      bootstrap: '/Bootstrap.png',
      sass: '/SASS.png',
      shadcn: '/shadcn.png',
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
    <section id="skills" className="section-padding bg-dark-900 overflow-hidden">
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

                <div className={`grid gap-6 ${
                  categorySkills.length === 4 
                    ? 'grid-cols-2 sm:grid-cols-4' 
                    : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                }`}>
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

          {/* Why Choose Me Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 relative overflow-hidden"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-600/5 rounded-3xl"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 max-w-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 max-w-full"></div>
            
            <div className="relative glass-effect rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-16">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl lg:text-5xl font-bold mb-6"
                >
                  Why Choose <span className="gradient-text">Me?</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  I bring a unique combination of technical expertise, creative problem-solving, and collaborative spirit to every project.
                </motion.p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Fast Development */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="relative group"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8 text-center">
                    {/* Image with floating background */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                      <div className="relative w-48 h-48 mx-auto">
                        <Image
                          src="/why-choose-me-1.png"
                          alt="Fast Development"
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      Fast Development
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Efficient coding practices and modern tools enable me to deliver high-quality solutions quickly, 
                      meeting tight deadlines without compromising on quality.
                    </p>
                  </div>
                </motion.div>

                {/* Team Collaboration */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="relative group"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8 text-center">
                    {/* Image with floating background */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                      <div className="relative w-48 h-48 mx-auto">
                        <Image
                          src="/why-choose-me-2.png"
                          alt="Team Collaboration"
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      Team Collaboration
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Strong communication skills and collaborative mindset make me an ideal team player, 
                      working seamlessly with designers, developers, and stakeholders.
                    </p>
                  </div>
                </motion.div>

                {/* Project Management */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="relative group"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative p-8 text-center">
                    {/* Image with floating background */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                      <div className="relative w-48 h-48 mx-auto">
                        <Image
                          src="/why-choose-me-3.png"
                          alt="Project Management"
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                      Project Management
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      From concept to deployment, I manage projects efficiently with clear communication, 
                      organized workflows, and attention to detail throughout the development process.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Additional Benefits */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h5 className="font-bold text-white mb-2 text-lg">Goal-Oriented</h5>
                  <p className="text-sm text-gray-400">Focused on achieving project objectives</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h5 className="font-bold text-white mb-2 text-lg">Problem Solver</h5>
                  <p className="text-sm text-gray-400">Creative solutions to complex challenges</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h5 className="font-bold text-white mb-2 text-lg">Responsive Design</h5>
                  <p className="text-sm text-gray-400">Mobile-first approach to development</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h5 className="font-bold text-white mb-2 text-lg">Modern Tech</h5>
                  <p className="text-sm text-gray-400">Latest frameworks and best practices</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
