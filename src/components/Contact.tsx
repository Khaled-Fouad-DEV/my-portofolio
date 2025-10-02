'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '@/lib/data';

const Contact = () => {
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


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/50 overflow-hidden">
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Ready to transform your ideas into reality? I&apos;m here to help you build something amazing. 
              Whether it&apos;s a new website, web application, or you need consultation on your project, 
              let&apos;s discuss how we can work together to achieve your goals.
            </motion.p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Details Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative overflow-hidden"
              >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative glass-effect rounded-2xl p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {info.label}
                  </h3>
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links & CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="relative overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 rounded-3xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-48 max-w-full"></div>
            
            <div className="relative glass-effect rounded-3xl p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Let&apos;s Build Something <span className="gradient-text">Amazing</span>
              </h3>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always excited to discuss new opportunities and innovative projects. 
                Whether you have a specific project in mind, need technical consultation, 
                or just want to explore potential collaborations, I&apos;d love to hear from you!
              </p>

              {/* Social Links */}
              <div className="mb-10">
                <h4 className="text-xl font-semibold mb-6 text-white">Connect With Me</h4>

              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:khaled.fouadv9@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send me an email</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/Khaled-Fouad-DEV"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View my work</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
