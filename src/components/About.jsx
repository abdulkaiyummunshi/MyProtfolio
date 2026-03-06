import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Target, Zap, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering high-quality solutions that meet business objectives',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Committed to excellence in every project I undertake',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Get to know me better - my journey, passion, and what drives me
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative z-10">
                <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-primary-400 to-purple-500 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center">
                        <Code2 size={64} className="text-primary-600 dark:text-primary-400" />
                      </div>
                      <p className="text-white text-xl font-semibold">Frontend Developer</p>
                      <p className="text-white/80 text-sm mt-2">Building the web, one pixel at a time</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-900 rounded-full -z-10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full -z-10"
              />
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Professional Summary */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Professional Summary
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate Frontend Developer with expertise in building modern, responsive, and user-centric web applications. With a strong foundation in React.js, JavaScript, and modern CSS frameworks, I transform ideas into seamless digital experiences. My approach combines technical excellence with creative problem-solving to deliver solutions that not only work beautifully but also provide exceptional user experiences.
                </p>
              </div>

              {/* Career Goal */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Career Goal
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To leverage my skills in frontend development to create innovative web solutions that make a real impact. I aim to work with forward-thinking companies and contribute to projects that push the boundaries of web technology while continuously growing as a developer and mentor.
                </p>
              </div>

              {/* Background */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in web development started with curiosity about how websites work. What began as experimenting with HTML and CSS evolved into a deep passion for creating interactive and dynamic user interfaces. Over the years, I've honed my skills through personal projects, freelance work, and continuous learning. Today, I specialize in React.js and modern frontend ecosystems, always staying updated with the latest technologies and best practices.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <feature.icon size={32} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;