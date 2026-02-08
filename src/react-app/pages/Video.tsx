export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Demonstration Video
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Watch the complete ink preparation process
        </p>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Video Demonstration
              </h3>
              <p className="text-gray-600 max-w-md">
                A video demonstrating the complete ink preparation process would be embedded here. 
                This would show each step in detail with proper safety measures.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Placeholder for educational video content
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">What You'll Learn</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Proper handling of chemicals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Mixing techniques and timing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Safety precautions in detail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600">✓</span>
                <span>Color changes during reaction</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Video Highlights</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▶</span>
                <span>Close-up views of each step</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▶</span>
                <span>Real-time chemical reactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▶</span>
                <span>Expert commentary and tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">▶</span>
                <span>Final product demonstration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
