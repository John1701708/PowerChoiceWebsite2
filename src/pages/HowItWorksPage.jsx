import React from 'react';
import { CheckCircle, Clock, CreditCard } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CheckCircle className="mx-auto w-12 h-12 text-blue-600 mb-4"/>
            <h2 className="font-bold text-xl mb-2">Check ZIP Code</h2>
            <p className="text-gray-700">Enter your ZIP code to see available plans in your area.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Clock className="mx-auto w-12 h-12 text-blue-600 mb-4"/>
            <h2 className="font-bold text-xl mb-2">Choose a Plan</h2>
            <p className="text-gray-700">Select from electricity, gas, or bundle plans that match your needs.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <CreditCard className="mx-auto w-12 h-12 text-blue-600 mb-4"/>
            <h2 className="font-bold text-xl mb-2">Enroll & Save</h2>
            <p className="text-gray-700">Fill out your details and enjoy reliable energy with great savings.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;