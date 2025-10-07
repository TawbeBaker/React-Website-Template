'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Active Users',
    description: 'Trusted by developers worldwide'
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable and always available'
  },
  {
    icon: Award,
    value: '500+',
    label: 'Projects Built',
    description: 'Success stories and counting'
  },
  {
    icon: Rocket,
    value: '50+',
    label: 'Countries',
    description: 'Global reach and impact'
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-indigo-100">
            Join a growing community of successful projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                </motion.div>
                <div className="text-xl font-semibold text-indigo-100 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-indigo-200">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
