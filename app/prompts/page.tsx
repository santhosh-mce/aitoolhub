'use client';

import { useState } from 'react';
import { prompts } from '@/lib/data';
import { Copy, Check } from 'lucide-react';

export default function PromptsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">AI Prompt Library</h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Get better results from ChatGPT, Claude, and Gemini with our curated collection of expert prompts for coding, writing, and marketing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {prompts.map(prompt => (
          <div key={prompt.id} className="bg-white border text-left border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md mb-2 inline-block">
                  {prompt.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{prompt.title}</h2>
              </div>
            </div>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl flex-grow mb-4 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
              {prompt.content}
            </div>

            <button 
              suppressHydrationWarning
              onClick={() => copyToClipboard(prompt.content, prompt.id)}
              className="w-full py-3 inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition-colors mt-auto"
            >
              {copiedId === prompt.id ? (
                <>
                  <Check className="w-5 h-5 mr-2 text-green-600" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" /> Copy Prompt
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
