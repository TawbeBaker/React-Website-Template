import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
        <div className="bg-white p-8 rounded-lg shadow">
          <p className="text-gray-600 mb-4">
            This is a versatile website template built with Next.js and Tailwind CSS.
            It serves as a starting point for various types of websites including blogs,
            e-commerce sites, forums, and more.
          </p>
          <p className="text-gray-600">
            Customize the content, styling, and functionality to fit your needs.
            The template is designed to be easily extensible and deployable.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}