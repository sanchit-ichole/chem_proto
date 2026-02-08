import { advantages, disadvantages } from "@/react-app/data/content";
import { CheckCircle, XCircle } from "lucide-react";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Advantages & Disadvantages
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Understanding the pros and cons of iron gall ink
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Advantages */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Advantages</h2>
            </div>
            
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Disadvantages */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Disadvantages</h2>
            </div>
            
            <ul className="space-y-4">
              {disadvantages.map((disadvantage, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{disadvantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overall Assessment</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Iron gall ink represents an important piece of chemical and historical heritage. 
            While modern synthetic inks have surpassed it in many practical applications, 
            understanding its preparation provides valuable insights into both chemistry and history.
          </p>
          <p className="text-gray-600 leading-relaxed">
            For educational purposes, artistic applications, and historical reenactments, 
            iron gall ink remains a fascinating subject of study. The advantages of permanence 
            and historical authenticity make it worthwhile for specific use cases, though 
            users should be aware of its limitations for everyday writing tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
