'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Code, 
  Rocket, 
  Users, 
  CheckCircle
} from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: 'Discovery & Research',
    description: 'We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.',
    details: [
      'Stakeholder interviews',
      'Market research',
      'Competitor analysis',
      'Technical requirements gathering'
    ],
    duration: '1-2 weeks',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Creating wireframes, mockups, and detailed project plans to ensure we\'re aligned before development begins.',
    details: [
      'User experience design',
      'Visual design mockups',
      'Technical architecture',
      'Project timeline creation'
    ],
    duration: '2-3 weeks',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    icon: Code,
    title: 'Development',
    description: 'Building your project using modern technologies and best practices, with regular updates and feedback sessions.',
    details: [
      'Frontend development',
      'Backend development',
      'Database design',
      'API integration'
    ],
    duration: '4-12 weeks',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    icon: CheckCircle,
    title: 'Testing & QA',
    description: 'Comprehensive testing across devices and browsers to ensure everything works perfectly before launch.',
    details: [
      'Functionality testing',
      'Performance optimization',
      'Cross-browser testing',
      'Mobile responsiveness'
    ],
    duration: '1-2 weeks',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    icon: Rocket,
    title: 'Launch & Deployment',
    description: 'Deploying your project to production with proper monitoring and ensuring everything runs smoothly.',
    details: [
      'Production deployment',
      'Performance monitoring',
      'Security configuration',
      'Launch support'
    ],
    duration: '1 week',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 6,
    icon: Users,
    title: 'Support & Maintenance',
    description: 'Ongoing support, updates, and maintenance to keep your project running at peak performance.',
    details: [
      'Bug fixes and updates',
      'Performance monitoring',
      'Security updates',
      'Feature enhancements'
    ],
    duration: 'Ongoing',
    color: 'from-yellow-500 to-orange-500'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-16 last:mb-0"
              >
                {/* Connecting Line */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent hidden lg:block transform -translate-x-1/2" />
                )}

                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Step Number */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-medium mb-4`}>
                        <span>Step {step.id}</span>
                        <span>•</span>
                        <span>{step.duration}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + detailIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Icon Circle */}
                  <div className="flex-shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow group cursor-pointer`}
                    >
                      <IconComponent className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 glass-effect">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Why This Process Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Clear Communication
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Regular updates and feedback loops ensure you&apos;re always in the know
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Predictable Results
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Structured approach minimizes risks and ensures quality delivery
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Collaborative Approach
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Your input and feedback are valued throughout the entire process
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
