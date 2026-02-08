import { processSteps } from "@/react-app/data/content";

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Preparation Process
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these steps carefully to prepare your own ink
        </p>
        
        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Important Notes</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">⏱️</span>
              <span>Total preparation time: approximately 30-45 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">🌡️</span>
              <span>Work at room temperature (20-25°C) for best results</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">📝</span>
              <span>The ink can be used immediately but improves with aging</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">🔒</span>
              <span>Store in an airtight glass or plastic container</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
