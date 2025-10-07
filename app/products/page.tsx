'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Web Development Package',
      price: '$2,999',
      originalPrice: '$3,499',
      rating: 4.8,
      reviews: 24,
      description: 'Complete web application development with modern tech stack.',
      features: ['React/Next.js', 'Database Integration', 'API Development', 'Responsive Design']
    },
    {
      id: 2,
      name: 'E-Commerce Platform',
      price: '$4,999',
      originalPrice: '$5,999',
      rating: 4.9,
      reviews: 18,
      description: 'Full-featured online store with payment processing.',
      features: ['Product Management', 'Payment Gateway', 'Order Tracking', 'Admin Dashboard']
    },
    {
      id: 3,
      name: 'Custom API Development',
      price: '$1,499',
      originalPrice: '$1,999',
      rating: 4.7,
      reviews: 31,
      description: 'RESTful API development with documentation.',
      features: ['REST API', 'Authentication', 'Documentation', 'Testing Suite']
    },
    {
      id: 4,
      name: 'Mobile App Development',
      price: '$7,999',
      originalPrice: '$9,999',
      rating: 5.0,
      reviews: 12,
      description: 'Cross-platform mobile applications.',
      features: ['iOS & Android', 'React Native', 'Push Notifications', 'App Store Deployment']
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}