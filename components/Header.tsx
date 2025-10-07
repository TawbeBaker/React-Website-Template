'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
    { name: 'Forum', href: '/forum' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-gray-900 light:bg-white shadow-sm light:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white light:text-gray-900">
              Baker Tech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  currentPath === item.href
                    ? 'text-indigo-400 light:text-indigo-600'
                    : 'text-gray-300 light:text-gray-500 hover:text-white light:hover:text-gray-900'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 light:from-indigo-50 light:to-purple-50 border border-gray-600 light:border-indigo-200 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out group"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="sr-only">Switch theme</span>
              <div className="relative w-6 h-6">
                {/* Sun Icon - visible in dark mode */}
                <Sun 
                  className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : 'rotate-90 scale-0 opacity-0'
                  }`}
                  strokeWidth={2.5}
                />
                {/* Moon Icon - visible in light mode */}
                <Moon 
                  className={`absolute inset-0 h-6 w-6 text-indigo-400 light:text-indigo-600 transition-all duration-500 ${
                    theme === 'light' 
                      ? 'rotate-0 scale-100 opacity-100' 
                      : '-rotate-90 scale-0 opacity-0'
                  }`}
                  strokeWidth={2.5}
                />
              </div>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 light:text-gray-500 hover:text-white light:hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 light:border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    currentPath === item.href
                      ? 'text-indigo-400 light:text-indigo-600'
                      : 'text-gray-300 light:text-gray-500 hover:text-white light:hover:text-gray-900'
                  } block px-3 py-2 text-base font-medium transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}