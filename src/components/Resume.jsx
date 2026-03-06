import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Eye, X, GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'World University of Bangladesh',
      location: 'Dhaka, Bangladesh',
      period: '2026 - Present',
      gpa: 'in-process/4.0',
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Ashek Ali Khan High School & College',
      location: 'Chandpur, Bangladesh',
      period: '2021 - 2023',
      gpa: '5.0/5.0',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Kashimpur Puran High School',
      location: 'Chandpur, Bangladesh',
      period: '2019 - 2021',
      gpa: '4.11/5.0',
    },
  ];

const certifications = [
  {
    name: 'Professional Web Design Course',
    issuer: 'Creative IT Institute',
    date: '2024',
    credentialId: "CIT CH RWD - 2403",
    topics: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
  },
  {
    name: 'React & Next.js Course',
    issuer: 'Learn with Sumit',
    date: '2025',
    credentialId: "LWSCTXN-L0PY8ZP7",
    topics: ['React.js', 'Next.js', 'Modern JavaScript', 'Component Architecture'],
  },
];

  const skillsSummary = [
    'Frontend Development: React.js, Vue.js',
    'CSS Frameworks: Tailwind CSS, Bootstrap, Sass',
    'JavaScript: ES6+, TypeScript, jQuery',
    'Version Control: Git, GitHub, GitLab',
    'Build Tools: Webpack, Vite, npm',
    'Testing: Jest, React Testing Library',
    'Performance Optimization',
    'Responsive Design',
    'Cross-browser Compatibility',
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="section-padding bg-white dark:bg-gray-800">
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
              My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A summary of my education, experience, and skills
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <Eye size={20} />
              Preview Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
              onClick={handlePrint}
            >
              <Download size={20} />
              Download PDF
            </motion.button>
          </motion.div>

          {/* Resume Content */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Abdul Kaiyum Munshi
                </h3>
                <p className="text-xl text-primary-600 dark:text-primary-400 mb-4">
                  Frontend Developer
                </p>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Passionate frontend developer with 2+ years of experience building modern, 
                  responsive web applications. Expert in React.js, Vue.js and modern frontend technologies.
                </p>
              </div>

              {/* Education */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="text-primary-600 dark:text-primary-400" size={28} />
                  Education
                </h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <div className="flex-1">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h5>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex md:flex-col items-center md:items-end gap-2 md:gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <span className="font-medium">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Work Experience Summary */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Briefcase className="text-primary-600 dark:text-primary-400" size={28} />
                  Work Experience Summary
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                     Frontend Developer | Mid-Level
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      AasTech | 01-Feb-2026 – Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      1. Build scalable frontend applications using React.js, Vue.js and modern JavaScript (ES6+).
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      2. Create reusable UI components and maintain component-based architecture.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      3. Optimize performance using lazy loading, code splitting, and best practices.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      4. Collaborate with backend developers to integrate APIs and dynamic data.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      5. Maintain clean, reusable, and well-structured code.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                     6. Lead frontend tasks and mentor junior developers.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                     7. Work closely with designers and backend teams to deliver high-quality products.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Junior Frontend Developer
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      SoftCrafty | 01-Jun-2025 – 31-Jan-2026
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      1. Develop responsive and user-friendly web interfaces using HTML5, CSS3, JavaScript, jQuery, Sass, and Bootstrap.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      2. Convert Figma, Adobe XD, and PSD designs into pixel-perfect webpages.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      3. Optimize website performance and ensure cross-browser compatibility.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      4. Collaborate with backend developers to integrate APIs and dynamic data.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      5. Maintain clean, reusable, and well-structured code.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Frontend Developer (Intern)
                    </h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      SoftCrafty | 01-Feb-2025 - 01-May-2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                     1. Assisted the development team in building responsive web interfaces using HTML, CSS, JavaScript, and jQuery.
                    </p>
                     <p className="text-gray-600 dark:text-gray-400 text-sm">
                     2. Converted Figma/PSD designs into responsive webpages.
                     </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                     3. Fixed UI bugs and improved cross-browser compatibility.
                      </p>
                       <p className="text-gray-600 dark:text-gray-400 text-sm">
                     4. Learned modern frontend workflow and collaborated with senior developers.

                       </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Technical Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {skillsSummary.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="text-primary-600 dark:text-primary-400" size={28} />
                  Certifications
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                    >
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h5>
                      <p className="text-primary-600 dark:text-primary-400 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">
                        {cert.date} | ID: {cert.credentialId}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Resume Preview
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Printable Resume */}
                <div className="print-content">
                  {/* Header */}
                  <div className="text-center mb-8 pb-6 border-b-2 border-primary-500">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      Someone
                    </h3>
                    <p className="text-xl text-primary-600 dark:text-primary-400 mb-3">
                      Frontend Developer
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Dhaka, Bangladesh | someone@email.com | +880 1234-567890
                    </p>
                  </div>

                  {/* Professional Summary */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      Professional Summary
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Passionate and results-driven Frontend Developer with over 5 years of experience 
                      in building modern, responsive, and user-centric web applications. Expert in 
                      React.js, JavaScript, and modern CSS frameworks. Proven track record of delivering 
                      high-quality solutions that enhance user experience and drive business growth. 
                      Strong problem-solving skills with a keen eye for detail and design.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                      Education
                    </h4>
                    {education.map((edu, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h5>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400">
                          {edu.institution}, {edu.location}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          GPA: {edu.gpa}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Work Experience */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                      Work Experience
                    </h4>
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          Senior Frontend Developer
                        </h5>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          2022 - Present
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 mb-2">
                        Tech Solutions Inc., Dhaka
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                        <li>Lead frontend development team of 5 developers</li>
                        <li>Architect and implement scalable React applications</li>
                        <li>Mentor junior developers and conduct code reviews</li>
                        <li>Optimize application performance by 40%</li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          Frontend Developer
                        </h5>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          2020 - 2022
                        </span>
                      </div>
                      <p className="text-primary-600 dark:text-primary-400 mb-2">
                        Digital Agency Pro, Dhaka
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                        <li>Developed responsive web applications using React and Vue.js</li>
                        <li>Implemented modern UI/UX designs with attention to detail</li>
                        <li>Integrated third-party APIs and payment gateways</li>
                        <li>Collaborated with backend team for seamless integration</li>
                      </ul>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                      Technical Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Frontend:
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          React.js, Vue.js, Angular, HTML5, CSS3, JavaScript (ES6+)
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          CSS & Tools:
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Tailwind CSS, Bootstrap, Sass, Webpack, Vite, npm
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Version Control:
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          Git, GitHub, GitLab
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Other:
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          REST APIs, Responsive Design, Performance Optimization
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">
                      Certifications
                    </h4>
                    {certifications.map((cert, index) => (
                      <div key={index} className="mb-3">
                        <h5 className="font-semibold text-gray-900 dark:text-white">
                          {cert.name}
                        </h5>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                          {cert.issuer} | {cert.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrint}
                  className="btn-primary flex items-center gap-2"
                >
                  <Download size={20} />
                  Download PDF
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;