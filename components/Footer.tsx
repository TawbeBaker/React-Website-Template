import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 light:bg-gray-50 border-t border-gray-800 light:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold text-white light:text-gray-900 mb-4 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                Baker Tech
              </h3>
            </Link>
            <p className="text-gray-400 light:text-gray-600 mb-6 leading-relaxed max-w-md">
              Innovative solutions for modern web development, e-commerce, and digital experiences.
              Building the future of the web, one project at a time.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 light:bg-gray-200 text-gray-400 light:text-gray-600 hover:bg-indigo-600 hover:text-white light:hover:bg-indigo-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 light:bg-gray-200 text-gray-400 light:text-gray-600 hover:bg-indigo-600 hover:text-white light:hover:bg-indigo-600 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 light:bg-gray-200 text-gray-400 light:text-gray-600 hover:bg-indigo-600 hover:text-white light:hover:bg-indigo-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:hello@bakertech.com"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 light:bg-gray-200 text-gray-400 light:text-gray-600 hover:bg-indigo-600 hover:text-white light:hover:bg-indigo-600 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white light:text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="group text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center"
                >
                  <span>Home</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="group text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center"
                >
                  <span>About</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="group text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center"
                >
                  <span>Products</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="group text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center"
                >
                  <span>Blog</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="group text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors flex items-center"
                >
                  <span>Contact</span>
                  <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white light:text-gray-900 uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-400 light:text-gray-600">Web Development</li>
              <li className="text-gray-400 light:text-gray-600">E-Commerce Solutions</li>
              <li className="text-gray-400 light:text-gray-600">API Development</li>
              <li className="text-gray-400 light:text-gray-600">Mobile Apps</li>
              <li className="text-gray-400 light:text-gray-600">Consulting</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white light:text-gray-900 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 light:border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 light:text-gray-600 text-sm text-center md:text-left">
              &copy; {currentYear} Baker Tech. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 light:text-gray-600 hover:text-indigo-400 light:hover:text-indigo-600 transition-colors">
                Cookies
              </Link>
            </div>
            <p className="text-gray-400 light:text-gray-600 text-sm flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}