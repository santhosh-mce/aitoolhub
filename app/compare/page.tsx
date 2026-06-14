import { comparisons } from '@/lib/data';
import { Check, X } from 'lucide-react';

export default function ComparePage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">Compare AI Tools</h1>
        <p className="text-xl text-gray-600">
          Not sure which tool to use? See how the top AI models and applications stack up against each other.
        </p>
      </div>

      <div className="space-y-16">
        {comparisons.map(comparison => (
          <div key={comparison.id} className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-gray-50 border-b border-gray-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 text-center">{comparison.title}</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 md:p-6 bg-white border-b border-r border-gray-100 font-semibold text-gray-700 w-1/4">
                      Feature
                    </th>
                    {comparison.tools.map(tool => (
                      <th key={tool} className="p-4 md:p-6 bg-white border-b border-gray-100 font-bold text-xl text-gray-900 text-center w-auto">
                        {tool}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.features.map((feature, featureIdx) => (
                    <tr key={feature.name} className={featureIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 md:p-6 border-r border-gray-100 font-medium text-gray-900">
                        {feature.name}
                      </td>
                      {feature.values.map((value, valIdx) => (
                        <td key={valIdx} className="p-4 md:p-6 text-center text-gray-700">
                          {value === 'Yes' ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                              <Check className="w-5 h-5" />
                            </span>
                          ) : value === 'No' ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
                              <X className="w-5 h-5" />
                            </span>
                          ) : (
                            <span className="font-medium">{value}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
