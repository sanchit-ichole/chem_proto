import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/react-app/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=400&h=400&fit=crop"
              alt="Ink"
              className="w-48 h-48 mx-auto rounded-full shadow-2xl object-cover border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-up">
            Preparation of Ink
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up-delay">
            Discover the art and science of traditional ink making. 
            Learn about the chemicals, process, and history behind creating your own writing ink.
          </p>
          
          <div className="flex gap-4 justify-center animate-slide-up-delay-2">
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/experiment">
              <Button size="lg" variant="outline">
                Try Experiment
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🧪</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Natural Ingredients</h3>
            <p className="text-gray-600 text-sm">
              Learn about the natural chemicals used in traditional ink making
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚗️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Step-by-Step Guide</h3>
            <p className="text-gray-600 text-sm">
              Follow our detailed process to prepare your own ink at home
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-600 text-sm">
              Try our virtual experiment to see the process in action
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
