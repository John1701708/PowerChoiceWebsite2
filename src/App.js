// src/App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BillingPage from './pages/BillingPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import EnrollmentPage from './pages/EnrollmentPage';
import FAQPage from './pages/FAQPage';
import HowItWorksPage from './pages/HowItWorksPage';
import NotFoundPage from './pages/NotFoundPage';
import PlansPage from './pages/PlansPage';
import PrivacyPage from './pages/PrivacyPage';
import SupportPage from './pages/SupportPage';
import TermsPage from './pages/TermsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ZipCheckPage from './pages/ZipCheckPage';
import FeaturesPage from './pages/FeaturesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/enrollment" element={<EnrollmentPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/zip-check" element={<ZipCheckPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
