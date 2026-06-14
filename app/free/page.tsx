import { tools } from '@/lib/data';
import { ToolCard } from '@/components/ToolCard';

export default function FreeToolsPage() {
  const freeTools = tools.filter(t => t.pricingType === 'Free' || t.pricingType === 'Freemium');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Free AI Tools</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Discover powerful AI tools you can use without paying. Browse completely free software and freemium models with generous free tiers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {freeTools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
