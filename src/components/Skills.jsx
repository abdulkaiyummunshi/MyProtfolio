import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 90, icon: '🎨', color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript (ES6+)', level: 88, icon: '⚡', color: 'from-yellow-500 to-orange-500' },
    { name: 'React.js', level: 92, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', level: 90, icon: '🎯', color: 'from-teal-500 to-cyan-500' },
    { name: 'Bootstrap', level: 85, icon: '🅱️', color: 'from-purple-500 to-pink-500' },
    { name: 'Sass', level: 82, icon: '💅', color: 'from-pink-500 to-rose-500' },
    { name: 'jQuery', level: 78, icon: '📜', color: 'from-blue-600 to-blue-800' },
    { name: 'Git & GitHub', level: 88, icon: '🔧', color: 'from-gray-600 to-gray-800' },
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
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card p-6 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Skill Icon */}
                <div className="relative z-10 flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center text-2xl shadow-inner">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative z-10">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm constantly learning and expanding my skill set. Currently exploring advanced React patterns, 
              Next.js, TypeScript, and modern state management solutions. I believe in staying updated with 
              the latest web technologies to deliver the best solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;