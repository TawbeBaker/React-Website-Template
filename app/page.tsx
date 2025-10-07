'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ShoppingCart, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Newsletter from '../components/Newsletter';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import BlogPreview from '../components/BlogPreview';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 light:bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold text-white light:text-gray-900 mb-6"
          >
            Welcome to Baker Tech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-gray-300 light:text-gray-600 max-w-3xl mx-auto"
          >
            Innovative solutions for modern web development, e-commerce, and digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/get-started" className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 light:bg-indigo-500 light:hover:bg-indigo-600 transition-all shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/about" className="inline-flex items-center px-8 py-4 border-2 border-gray-600 light:border-gray-300 text-lg font-medium rounded-lg text-white light:text-gray-900 hover:bg-gray-800 light:hover:bg-gray-50 transition-colors">
              Learn More
            </Link>
          </motion.div>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-gray-800 light:bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 light:border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-900 light:bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-indigo-400 light:text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white light:text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-300 light:text-gray-600 mb-4">Custom web applications built with modern technologies and best practices.</p>
              <Link href="/about" className="text-indigo-400 light:text-indigo-600 hover:text-indigo-300 light:hover:text-indigo-700 inline-flex items-center font-medium">Learn more →</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-gray-800 light:bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 light:border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-900 light:bg-indigo-100 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-indigo-400 light:text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white light:text-gray-900 mb-2">E-Commerce</h3>
              <p className="text-gray-300 light:text-gray-600 mb-4">Complete online stores with payment integration and inventory management.</p>
              <Link href="/products" className="text-indigo-400 light:text-indigo-600 hover:text-indigo-300 light:hover:text-indigo-700 inline-flex items-center font-medium">View Products →</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="bg-gray-800 light:bg-white overflow-hidden shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 light:border-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-900 light:bg-indigo-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-indigo-400 light:text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white light:text-gray-900 mb-2">Community</h3>
              <p className="text-gray-300 light:text-gray-600 mb-4">Forums and discussion platforms to build engaged communities.</p>
              <Link href="/forum" className="text-indigo-400 light:text-indigo-600 hover:text-indigo-300 light:hover:text-indigo-700 inline-flex items-center font-medium">Join Discussion →</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <Portfolio />
      <BlogPreview />
      <FAQ />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  );
}
