import { useState } from "react";
import { Button } from "@/react-app/components/ui/button";
import { Card, CardContent } from "@/react-app/components/ui/card";

export default function ExperimentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [mixing, setMixing] = useState(false);

  const steps = [
    { 
      title: "Add Tannic Acid", 
      color: "bg-amber-200",
      instruction: "Pour tannic acid into the beaker"
    },
    { 
      title: "Add Water", 
      color: "bg-blue-200",
      instruction: "Add distilled water and observe the solution"
    },
    { 
      title: "Add Ferrous Sulfate", 
      color: "bg-gray-400",
      instruction: "Slowly add ferrous sulfate and watch the reaction"
    },
    { 
      title: "Add Gum Arabic", 
      color: "bg-yellow-100",
      instruction: "Mix in gum arabic solution"
    },
    { 
      title: "Ink Ready!", 
      color: "bg-gray-800",
      instruction: "Your ink is complete!"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setMixing(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setMixing(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setMixing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Virtual Experiment
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Try making ink virtually! Click through each step to see the process
        </p>
        
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Step {currentStep + 1}: {steps[currentStep].title}
              </h2>
              <p className="text-gray-600">{steps[currentStep].instruction}</p>
            </div>
            
            {/* Beaker Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                {/* Beaker */}
                <div className="w-48 h-64 border-4 border-gray-300 rounded-b-3xl bg-gradient-to-b from-transparent to-white/50 relative overflow-hidden">
                  {/* Liquid */}
                  <div 
                    className={`absolute bottom-0 w-full transition-all duration-1000 ${steps[currentStep].color} ${mixing ? 'animate-pulse' : ''}`}
                    style={{ 
                      height: `${(currentStep + 1) * 20}%`,
                      opacity: 0.7
                    }}
                  >
                    {mixing && (
                      <div className="absolute inset-0 bg-white/30 animate-ping"></div>
                    )}
                  </div>
                  
                  {/* Measurement marks */}
                  <div className="absolute inset-0 flex flex-col justify-around px-2">
                    {[100, 75, 50, 25].map((mark) => (
                      <div key={mark} className="flex items-center gap-1">
                        <div className="w-4 h-px bg-gray-400"></div>
                        <span className="text-xs text-gray-500">{mark}ml</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Pouring animation when mixing */}
                {mixing && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-12 bg-gradient-to-b from-gray-400 to-transparent animate-bounce"></div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-full h-2 mx-1 rounded-full transition-all duration-500 ${
                      index <= currentStep 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
                        : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              {currentStep < steps.length - 1 ? (
                <Button 
                  onClick={handleNext} 
                  disabled={mixing}
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                >
                  {mixing ? 'Mixing...' : 'Add Next Ingredient'}
                </Button>
              ) : (
                <Button 
                  onClick={handleReset}
                  size="lg"
                  variant="outline"
                >
                  Start Over
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This is a simplified visualization of the ink preparation process</p>
        </div>
      </div>
    </div>
  );
}
