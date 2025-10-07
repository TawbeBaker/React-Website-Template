import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Get Started</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Setup Guide</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Clone this repository</li>
            <li>Install dependencies: <code className="bg-gray-100 px-2 py-1 rounded">npm install</code></li>
            <li>Start development server: <code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code></li>
            <li>Customize the content in the <code className="bg-gray-100 px-2 py-1 rounded">app/</code> directory</li>
            <li>Deploy to your preferred platform</li>
          </ol>
          <div className="mt-6">
            <Link href="/" className="text-indigo-600 hover:text-indigo-500">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}