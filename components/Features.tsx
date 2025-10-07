'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Cloud, 
  Code2, 
  Palette,
  Globe,
  Lock,
  BarChart3
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with server-side rendering and static generation for blazing fast page loads.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Built-in security features including CSRF protection, XSS prevention, and secure headers.'
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Responsive design that looks beautiful on all devices from mobile phones to large displays.'
  },
  {
    icon: Cloud,
    title: 'Cloud Ready',
    description: 'Deploy anywhere with support for Vercel, Netlify, AWS, and traditional hosting platforms.'
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description: 'Clean, maintainable code with TypeScript support and comprehensive documentation.'
  },
  {
    icon: Palette,
    title: 'Customizable',
    description: 'Easily customize colors, fonts, and layouts with Tailwind CSS and theme system.'
  },
  {
    icon: Globe,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices with meta tags, structured data, and semantic HTML.'
  },
  {
    icon: Lock,
    title: 'Privacy Focused',
    description: 'GDPR compliant with cookie consent management and data protection features.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Ready',
    description: 'Easy integration with Google Analytics, Plausible, and other analytics platforms.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 light:from-gray-50 light:to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white light:text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-300 light:text-gray-600">
            A comprehensive template packed with features to jumpstart your next project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative bg-gray-800 light:bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 light:border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-900 light:bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-indigo-400 light:text-indigo-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white light:text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 light:text-gray-600">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
