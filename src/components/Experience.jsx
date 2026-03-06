import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    // {
    //   id: 1,
    //   title: 'Senior Frontend Developer',
    //   company: 'Tech Solutions Inc.',
    //   location: 'Dhaka, Bangladesh',
    //   period: '2022 - Present',
    //   type: 'Full-time',
    //   responsibilities: [
    //     'Lead frontend development team of 5 developers',
    //     'Architect and implement scalable React applications',
    //     'Mentor junior developers and conduct code reviews',
    //     'Optimize application performance and improve load times by 40%',
    //     'Collaborate with UX/UI team to implement pixel-perfect designs',
    //   ],
    // },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'AasTech',
      location: 'Dhaka, Bangladesh',
      period: '01-Feb-2026 - Present',
      type: 'Full-time (Remote)',
      responsibilities: [
        'Develop responsive web applications using React and Vue.js',
        'Implement modern UI/UX designs with attention to detail',
        'Integrate third-party APIs and payment gateways',
        'Work closely with backend team to ensure seamless integration',
        'Participate in agile development processes and sprint planning',
      ],
    },
    {
      id: 3,
      title: 'Junior Frontend Developer',
      company: 'SoftCrafty',
      location: 'Dhaka, Bangladesh',
      period: '01-May-2025 - 31-Jan-2026',
      type: 'Full-time',
      responsibilities: [
        'Build and maintain company websites and web applications',
        'Convert Figma designs into responsive HTML/CSS',
        'Implement interactive features using JavaScript and jQuery',
        'Collaborate with designers to improve user experience',
        'Learn and adopt new technologies and best practices',
      ],
    },
    {
      id: 4,
      title: 'Frontend Developer Intern',
      company: 'SoftCrafty',
      location: 'Dhaka, Bangladesh',
      period: '01-Feb-2025 - 01-May-2025',
      type: 'Internship',
      responsibilities: [
        'Assist in developing client websites and web applications',
        'Learn React.js and modern frontend frameworks',
        'Participate in team meetings and project planning',
        'Fix bugs and implement small features',
        'Gain hands-on experience with version control and agile methodologies',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card p-6 md:p-8 relative"
                    >
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                          {experience.type}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {experience.responsibilities.map((responsibility, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm"
                            >
                              <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;