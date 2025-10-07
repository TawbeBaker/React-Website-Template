'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-16 bg-indigo-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to the Baker Tech Community!
          </h2>
          <p className="text-xl text-indigo-100">
            Thank you for subscribing. You&apos;ll receive our latest updates and insights directly in your inbox.
          </p>
        </div>
      </motion.section>
    );
  }

  return (
    <section className="py-16 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="h-12 w-12 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Baker Tech
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Get the latest insights on web development, technology trends, and exclusive content delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          <p className="text-sm text-indigo-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}