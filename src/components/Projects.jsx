import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Laundry from '../image/project/laundre.png'

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Laundry & Dry Cleaning',
      description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment integration.',
      image: Laundry,
      techStack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'BootStrap', "Gsap"],
      liveUrl: 'https://abdulkaiyummunshi.github.io/Laundry/',
      githubUrl: 'https://github.com/abdulkaiyummunshi/Laundry',
      category: 'Frontend',
    },
    {
      id: 2,
      title: ' MiBitcoinCasa',
      description: 'A platform where property meets Bitcoin. Owners who accept it. People who live on it. Direct and simple.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      techStack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'BootStrap', "Gsap"],
      liveUrl: 'https://abdulkaiyummunshi.github.io/MiBitcoinCase/index.html',
      githubUrl: 'https://github.com/abdulkaiyummunshi/MiBitcoinCase',
      category: 'frontend',
    },
    {
      id: 3,
      title: 'Find Holistic Care',
      description: 'The trusted directory for personal vettted holistic health practitionerrs,services, and products acriss the U.S.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      techStack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'BootStrap', "Gsap"],
      liveUrl: 'https://abdulkaiyummunshi.github.io/holistic-project/index.html',
      githubUrl: 'https://github.com/abdulkaiyummunshi/holistic-project',
      category: 'frontend',
    },
    {
      id: 4,
      title: 'AVA Academy',
      description: 'The AVA Academy transforms aspiring professionals into elite Virtual Executive Assistants (EAs) trained to deliver real-world results',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      techStack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'jQuery', 'BootStrap', "Gsap"],
      liveUrl: 'https://abdulkaiyummunshi.github.io/avaAcademy/',
      githubUrl: 'https://github.com/abdulkaiyummunshi/avaAcademy',
      category: 'Frontend',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-1 group-hover:opacity-100 transition-opacity duration-300 h-full items-end"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors flex items-center justify-center text-sm gap-2 h-10 w-['fit-content']"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 h-10"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    <a href={project.liveUrl} target='_blank'>
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/abdulkaiyummunshi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All Projects
              <Github size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;