import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Layout, Bug, Smartphone, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly website designs that captivate your audience and enhance brand identity.',
      features: ['UI/UX Design', 'Responsive Layouts', 'Modern Aesthetics', 'Brand Consistency'],
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Building fast, responsive, and interactive web applications using modern technologies like React.js and Vue.js.',
      features: ['React.js', 'Vue.js', 'TypeScript', 'Performance Optimization'],
    },
    {
      icon: Layout,
      title: 'Figma to HTML',
      description: 'Converting Figma designs into pixel-perfect, responsive HTML/CSS code with attention to every detail.',
      features: ['Pixel Perfect', 'Clean Code', 'Responsive', 'Cross-browser'],
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensuring your website looks and functions perfectly on all devices, from desktops to mobile phones.',
      features: ['Mobile-First', 'Tablet Friendly', 'Desktop Optimized', 'Touch Friendly'],
    },
    {
      icon: Bug,
      title: 'UI Bug Fixing',
      description: 'Identifying and fixing UI issues, layout problems, and cross-browser compatibility issues to ensure smooth user experience.',
      features: ['Debugging', 'Cross-browser Fixes', 'Layout Issues', 'Performance Issues'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing website speed and performance to improve user experience and search engine rankings.',
      features: ['Load Time', 'Code Optimization', 'Image Optimization', 'Caching'],
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
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              My <span className="gradient-text">Services</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Professional web development services tailored to your needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card p-8 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-6 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <service.icon size={32} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 md:p-12 max-w-3xl mx-auto bg-gradient-to-br from-primary-500 to-purple-600 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Let's work together to bring your ideas to life. I'm here to help you build amazing web experiences.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;