// src/pages/FeaturesPage.jsx
import React from 'react';
import './style.css';

const FeaturesPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Our Features</h1>
      <p className="page-description">
        Discover why PowerChoice is the best choice for your needs. Our features are designed to make your experience seamless and efficient.
      </p>

      <div className="features-list">
        <div className="feature-item">
          <h2>Flexible Plans</h2>
          <p>Choose from 12, 24, or 36 month plans to fit your lifestyle.</p>
        </div>

        <div className="feature-item">
          <h2>Easy Enrollment</h2>
          <p>Sign up in minutes with our simple online form.</p>
        </div>

        <div className="feature-item">
          <h2>ZIP Code Check</h2>
          <p>Check service availability instantly by entering your ZIP code.</p>
        </div>

        <div className="feature-item">
          <h2>Secure Billing</h2>
          <p>Your payments are safe with our secure system.</p>
        </div>

        <div className="feature-item">
          <h2>24/7 Support</h2>
          <p>We’re always here to help via phone, email, or chat.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
