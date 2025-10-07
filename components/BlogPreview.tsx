'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15: A Complete Guide',
    excerpt: 'Learn how to build modern web applications with the latest features in Next.js 15, including server components and improved performance.',
    author: {
      name: 'Sarah Johnson',
      avatar: 'SJ'
    },
    date: '2025-10-05',
    readTime: '8 min read',
    category: 'Tutorial',
    image: '/api/placeholder/800/400'
  },
  {
    id: 2,
    title: 'Dark Mode Best Practices for Web Applications',
    excerpt: 'Implementing dark mode the right way: from design considerations to technical implementation and user preferences.',
    author: {
      name: 'Mike Chen',
      avatar: 'MC'
    },
    date: '2025-10-03',
    readTime: '6 min read',
    category: 'Design',
    image: '/api/placeholder/800/400'
  },
  {
    id: 3,
    title: 'Building Scalable React Applications',
    excerpt: 'Best practices and patterns for building large-scale React applications that are maintainable and performant.',
    author: {
      name: 'Baker Tech Team',
      avatar: 'BT'
    },
    date: '2025-10-01',
    readTime: '10 min read',
    category: 'Development',
    image: '/api/placeholder/800/400'
  }
];

export default function BlogPreview() {
  return (
    <section className="py-20 bg-gray-900 light:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white light:text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-300 light:text-gray-600">
            Insights, tutorials, and updates from our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-800 light:bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 light:border-gray-100"
            >
              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                  Featured Image
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gray-900/90 light:bg-white/90 text-white light:text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white light:text-gray-900 mb-3 group-hover:text-indigo-400 light:group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-300 light:text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {post.author.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white light:text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-gray-400 light:text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700 light:border-gray-100">
                  <div className="flex items-center text-sm text-gray-400 light:text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-indigo-400 light:text-indigo-600 hover:text-indigo-300 light:hover:text-indigo-500 font-medium text-sm group"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
