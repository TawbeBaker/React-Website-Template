import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Forum() {
  const topics = [
    { id: 1, title: 'Welcome to the Forum', author: 'Admin', replies: 5 },
    { id: 2, title: 'General Discussion', author: 'User1', replies: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Forum</h1>
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Topics</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {topics.map((topic) => (
              <div key={topic.id} className="px-6 py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-md font-medium text-gray-900">{topic.title}</h3>
                  <p className="text-sm text-gray-500">by {topic.author}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {topic.replies} replies
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}