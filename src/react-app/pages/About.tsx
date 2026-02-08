export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          About Ink
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">History & Background</h2>
            <p className="text-gray-600 leading-relaxed">
              Ink has been an essential tool for writing and documentation for thousands of years. 
              The earliest inks date back to ancient Egypt and China, where carbon-based inks were 
              used for writing on papyrus and silk. Iron gall ink, which we'll be preparing, became 
              the standard writing ink in Europe from the 12th to the 19th century.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is Iron Gall Ink?</h2>
            <p className="text-gray-600 leading-relaxed">
              Iron gall ink is a purple-black or brown-black ink made from iron salts and tannic 
              acids derived from vegetable sources. It was the most important ink in the Western 
              world for over 1,400 years. The ink was used by Leonardo da Vinci, Johann Sebastian 
              Bach, and for writing many of the world's most important historical documents.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">The Science Behind It</h2>
            <p className="text-gray-600 leading-relaxed">
              The chemical reaction between tannic acid and ferrous sulfate creates a dark, 
              permanent pigment. When these two substances combine, they form ferrotannate complexes 
              that darken when exposed to oxygen. This creates the characteristic blue-black color 
              of iron gall ink. The gum arabic acts as a binder, controlling the ink's flow and 
              preventing it from bleeding on paper.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Modern Applications</h2>
            <p className="text-gray-600 leading-relaxed">
              While synthetic inks dominate today's market, iron gall ink is still valued by 
              calligraphers, artists, and historians for its unique properties and historical 
              authenticity. Understanding its preparation provides insight into both chemistry 
              and the history of human communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
