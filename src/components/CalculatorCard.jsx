import React, { useState } from 'react';
import { Calendar, Calculator, Heart, Clock, Calendar as CalendarIcon } from 'lucide-react';
import { calculatePetAge, formatDate, getAnimalEmoji, getAnimalDisplayName } from '../utils/calculateAge';

const CalculatorCard = () => {
  const [animalType, setAnimalType] = useState('');
  const [dogSize, setDogSize] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    // Validation
    if (!animalType) {
      setError('Please select an animal type');
      return;
    }

    if (animalType === 'dog' && !dogSize) {
      setError('Please select a dog size');
      return;
    }

    if (!birthDate) {
      setError('Please select a birth date');
      return;
    }

    const selectedDate = new Date(birthDate);
    const today = new Date();

    if (selectedDate > today) {
      setError('Birth date cannot be in the future');
      return;
    }

    try {
      const ageResult = calculatePetAge(selectedDate, animalType, dogSize);
      setResult({
        ...ageResult,
        animalType,
        dogSize,
        birthDate: selectedDate
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setAnimalType('');
    setDogSize('');
    setBirthDate('');
    setResult(null);
    setError('');
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pet-pink to-pet-purple rounded-full mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-poppins font-semibold text-gray-800 mb-2">
            Pet Life Calculator
          </h2>
          <p className="text-gray-600 text-sm">
            Discover your pet's age in pet years!
          </p>
        </div>

        <div className="space-y-4">
          {/* Animal Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Animal Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAnimalType('cat');
                  setDogSize('');
                }}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  animalType === 'cat'
                    ? 'border-pet-pink bg-pet-pink/10 text-pet-pink'
                    : 'border-gray-200 hover:border-pet-pink/50'
                }`}
              >
                <div className="text-2xl mb-1">🐱</div>
                <div className="text-sm font-medium">Cat</div>
              </button>
              <button
                type="button"
                onClick={() => setAnimalType('dog')}
                className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                  animalType === 'dog'
                    ? 'border-pet-blue bg-pet-blue/10 text-pet-blue'
                    : 'border-gray-200 hover:border-pet-blue/50'
                }`}
              >
                <div className="text-2xl mb-1">🐕</div>
                <div className="text-sm font-medium">Dog</div>
              </button>
            </div>
          </div>

          {/* Dog Size Selection */}
          {animalType === 'dog' && (
            <div className="animate-fadeIn">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Dog Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['small', 'medium', 'large'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setDogSize(size)}
                    className={`p-2 rounded-lg border-2 transition-all duration-200 text-xs font-medium ${
                      dogSize === size
                        ? 'border-pet-blue bg-pet-blue/10 text-pet-blue'
                        : 'border-gray-200 hover:border-pet-blue/50'
                    }`}
                  >
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Birth Date Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Birth Date
            </label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pet-purple focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-pet-purple to-pet-pink text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate Pet Age</span>
          </button>

          {/* Reset Button */}
          {(animalType || birthDate || result) && (
            <button
              onClick={resetForm}
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
            >
              Reset
            </button>
          )}
        </div>
        </div>

        {/* Results Card */}
        {result ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 animate-fadeIn">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pet-green to-pet-blue rounded-full mb-4">
              <span className="text-3xl">
                {getAnimalEmoji(result.animalType, result.dogSize)}
              </span>
            </div>
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-2">
              {getAnimalDisplayName(result.animalType, result.dogSize)} Age Results
            </h3>
          </div>

          <div className="space-y-4">
            {/* Birth Date */}
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <CalendarIcon className="w-5 h-5 text-pet-purple" />
              <div>
                <div className="text-sm text-gray-600">Birth Date</div>
                <div className="font-medium text-gray-800">
                  {formatDate(result.birthDate)}
                </div>
              </div>
            </div>

            {/* Age Results */}
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pet-pink/10 to-pet-purple/10 rounded-lg border border-pet-pink/20">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-pet-pink" />
                  <div>
                    <div className="text-sm text-gray-600">Days</div>
                    <div className="font-semibold text-gray-800">{result.days}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pet-blue/10 to-pet-green/10 rounded-lg border border-pet-blue/20">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-pet-blue" />
                  <div>
                    <div className="text-sm text-gray-600">Months</div>
                    <div className="font-semibold text-gray-800">{result.months}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pet-green/10 to-pet-pink/10 rounded-lg border border-pet-green/20">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pet-green" />
                  <div>
                    <div className="text-sm text-gray-600">Years</div>
                    <div className="font-semibold text-gray-800">{result.years}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="p-4 bg-gradient-to-r from-pet-purple/5 to-pet-pink/5 rounded-lg border border-pet-purple/20">
              <div className="text-sm text-gray-600 mb-1">💡 Fun Fact</div>
              <div className="text-sm text-gray-700">
                Your {getAnimalDisplayName(result.animalType, result.dogSize).toLowerCase()} is {result.years} pet years old! 
                That's equivalent to {result.humanDays} human days of love and joy.
              </div>
            </div>
          </div>
          </div>
        ) : (
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex items-center justify-center">
            <div className="text-center text-white/60">
              <div className="text-4xl mb-4">🐾</div>
              <p className="text-lg font-medium">Calculate to see results</p>
              <p className="text-sm">Your pet's age will appear here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorCard;

