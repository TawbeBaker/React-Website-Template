'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Baker Tech transformed our online presence completely. Their attention to detail and technical expertise is unmatched.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, InnovateLab',
    content: 'Working with Baker Tech was a game-changer. They delivered a stunning website that exceeded all our expectations.',
    rating: 5,
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthCo',
    content: 'The team at Baker Tech is professional, responsive, and incredibly talented. Highly recommend their services!',
    rating: 5,
    avatar: 'ER'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-900 light:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white light:text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 light:text-gray-600">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 light:bg-white"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-indigo-400 light:text-indigo-600" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 light:text-gray-600">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white light:text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400 light:text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}