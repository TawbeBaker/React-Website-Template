'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Next.js 15',
      excerpt: 'Explore the latest features in Next.js 15 and how they can improve your development workflow.',
      author: 'Baker Tech Team',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: 2,
      title: 'The Future of E-Commerce: Trends to Watch in 2025',
      excerpt: 'Discover the emerging trends shaping the future of online retail and digital commerce.',
      author: 'Sarah Johnson',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'E-Commerce'
    },
    {
      id: 3,
      title: 'Optimizing React Performance: Best Practices',
      excerpt: 'Learn essential techniques to improve your React application\'s performance and user experience.',
      author: 'Mike Chen',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'React'
    },
    {
      id: 4,
      title: 'Building Scalable APIs with Node.js',
      excerpt: 'A comprehensive guide to creating robust and scalable backend APIs using Node.js.',
      author: 'Baker Tech Team',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Backend'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                  {post.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}