import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | AI Tools Hub',
  description: 'Learn more about AI Tools Hub, your go-to directory for discovering the best AI tools, prompts, and comparisons.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 animate-in fade-in duration-500">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About AI Tools Hub</h1>
      <div className="prose prose-lg text-gray-700 max-w-none">
        <p>
          Welcome to AI Tools Hub. We are dedicated to helping users discover the latest AI tools, 
          AI prompts, and software comparisons to enhance their productivity and creativity.
        </p>
        <p>
          Our goal is to provide useful, accurate, and up-to-date information about AI technology. 
          With the rapid advancement in artificial intelligence, it can be overwhelming to find the 
          right tools for your specific needs. That's why we curate, categorize, and review the best 
          AI applications currently available.
        </p>
        <h2>What We Offer</h2>
        <ul>
          <li><strong>AI Tools Directory:</strong> Discover hundreds of AI tools across various categories like writing, coding, image generation, and productivity.</li>
          <li><strong>AI Prompts:</strong> Learn how to properly interact with large language models using our curated prompts library.</li>
          <li><strong>Comparisons:</strong> Read detailed comparisons between popular AI tools to decide which one is right for you.</li>
          <li><strong>Blog:</strong> Stay informed with our latest articles on AI trends, news, and guides.</li>
        </ul>
        <p>
          Whether you are a developer, content creator, marketer, or student, AI Tools Hub is here 
          to be your comprehensive guide in the evolving landscape of Artificial Intelligence.
        </p>
      </div>
    </div>
  );
}
