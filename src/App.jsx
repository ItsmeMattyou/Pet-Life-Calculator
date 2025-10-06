import React from 'react';
import CalculatorCard from './components/CalculatorCard';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pet-pink via-pet-blue to-pet-purple">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce-slow"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-18 h-18 bg-white rounded-full animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="pt-8 pb-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-2 drop-shadow-lg">
              🐾 Pet Life Calculator
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-inter">
              Discover your pet's age in pet years!
            </p>
          </div>
        </header>

        {/* Main Calculator */}
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <CalculatorCard />
        </main>

        {/* Footer */}
        <footer className="pb-8">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-block">
              <p className="text-white/90 font-inter text-sm">
                🐾 Pet Life Calculator by <span className="font-semibold">Your Name</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

