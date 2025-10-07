'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Baker Tech Website Template?',
    answer: 'Baker Tech is a modern, fully-featured website template built with Next.js, React, and Tailwind CSS. It includes everything you need to launch a professional website, from landing pages to blog posts, e-commerce features, and more.',
  },
  {
    question: 'Can I use this template for commercial projects?',
    answer: 'Yes! This template is open source and available for both personal and commercial use. You can customize it freely to match your brand and requirements.',
  },
  {
    question: 'Does it support dark mode?',
    answer: 'Absolutely! The template includes a fully functional dark mode system that respects user preferences and allows manual toggling. The dark mode state persists across sessions using localStorage.',
  },
  {
    question: 'Is it mobile responsive?',
    answer: 'Yes, the template is built with a mobile-first approach. All components are fully responsive and optimized for various screen sizes, from smartphones to large desktop displays.',
  },
  {
    question: 'What technologies are included?',
    answer: 'The template uses Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion for animations, React Hook Form with Zod validation, and many other modern tools and libraries.',
  },
  {
    question: 'How do I deploy the template?',
    answer: 'The template supports static export and can be deployed to any hosting platform. It works great with Vercel, Netlify, GitHub Pages, AWS S3, and traditional web hosts. Just run npm run build and deploy the output.',
  },
  {
    question: 'Is SEO optimization included?',
    answer: 'Yes! The template includes comprehensive SEO features including meta tags, Open Graph tags, structured data, semantic HTML, and sitemap generation capabilities.',
  },
  {
    question: 'Can I customize the design?',
    answer: 'Definitely! The template is highly customizable. You can easily modify colors, fonts, layouts, and components using Tailwind CSS classes and the theme configuration.',
  },
  {
    question: 'Do you provide support?',
    answer: 'While this is an open-source template, we provide documentation, code comments, and community support. For custom development or consulting, please contact us.',
  },
  {
    question: 'Are there any dependencies I should know about?',
    answer: 'The template uses well-maintained, popular packages. All dependencies are listed in package.json and are regularly updated for security and compatibility.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900 light:bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white light:text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 light:text-gray-600">
            Everything you need to know about the template
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-800 light:bg-white rounded-lg shadow-md overflow-hidden border border-gray-700 light:border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 light:hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-white light:text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 light:text-gray-500 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-300 light:text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 light:text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 light:bg-indigo-500 light:hover:bg-indigo-600 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
