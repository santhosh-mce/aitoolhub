import { Tool } from '@/lib/data';
import { Star, ArrowRight } from 'lucide-react';

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-xl text-gray-900">{tool.name}</h3>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-500 bg-amber-50 px-2.5 py-1 rounded-md">
          <Star className="w-4 h-4 fill-amber-500" />
          {tool.rating}
        </span>
      </div>
      
      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-4 w-fit">
        {tool.category}
      </span>

      <p className="text-gray-600 text-sm mb-6 flex-grow">
        {tool.description}
      </p>

      <div className="bg-gray-50 rounded-lg p-3 mb-6">
        <div className="text-sm text-gray-900 font-medium mb-2 pr-2 border-b border-gray-200 pb-2">Features:</div>
        <ul className="text-sm text-gray-600 space-y-1">
          {tool.features.slice(0, 3).map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <span className="text-sm font-medium text-gray-900">
          Pricing: <span className="text-gray-500 font-normal">{tool.pricingType}</span>
        </span>
        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
          Visit Tool <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
