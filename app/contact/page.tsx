import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AI Tools Hub',
  description: 'Get in touch with the AI Tools Hub team. We would love to hear from you.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8">
        Have a question, suggestion, or want to report an issue? We'd love to hear from you.
        Please fill out the form below or reach out to us via email.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button 
              type="button" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Connect</h3>
            <p className="text-gray-700 mb-4">
              You can also reach out to us directly through email for partnership inquiries, submissions, or general questions.
            </p>
            <div className="mb-6">
              <strong className="block text-gray-900 mb-1">Email:</strong>
              <a href="mailto:contact@aitoolshub.example.com" className="text-blue-600 hover:underline">contact@aitoolshub.example.com</a>
            </div>
            <div>
              <strong className="block text-gray-900 mb-1">Mailing Address:</strong>
              <p className="text-gray-700">
                123 AI Boulevard<br />
                Tech District<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
