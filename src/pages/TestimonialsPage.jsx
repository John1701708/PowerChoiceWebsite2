import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    { name: 'Alice', feedback: 'PowerChoice helped me save a lot on my electricity bill!' },
    { name: 'Bob', feedback: 'Easy to enroll and great customer service.' },
    { name: 'Charlie', feedback: 'Highly recommend their 36-month plan for long-term savings.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h1>
        {testimonials.map((t, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <p className="text-gray-800 mb-2">"{t.feedback}"</p>
            <p className="font-semibold text-gray-900">- {t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;