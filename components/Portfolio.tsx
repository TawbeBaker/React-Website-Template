'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment integration, inventory management, and admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'E-Commerce'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates and team collaboration features.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Productivity'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization and reporting.',
    image: '/api/placeholder/400/300',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Analytics'
  },
  {
    id: 4,
    title: 'Learning Management System',
    description: 'Online education platform with course management, video streaming, and progress tracking.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'Education'
  }
];

export default function Portfolio() {
  return (
    <section className="py-16 bg-gray-900 light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white light:text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-300 light:text-gray-600">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 light:bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-gray-700 light:bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 light:text-gray-400">
                  <span className="text-sm">Project Image</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white light:text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 light:text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-900 light:bg-indigo-100 text-indigo-200 light:text-indigo-800 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-indigo-400 light:text-indigo-600 hover:text-indigo-300 light:hover:text-indigo-500 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-400 light:text-gray-600 hover:text-gray-300 light:hover:text-gray-500 transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}