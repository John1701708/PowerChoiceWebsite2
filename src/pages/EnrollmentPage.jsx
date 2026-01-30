import React, { useState } from 'react';

const EnrollmentPage = () => {
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xjkpaewv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zip })
    }).then(() => setSubmitted(true));
  };

  return (
    <div className="container">
      <h1>Enroll Now</h1>
      {submitted ? <p>Thank you! We will contact you soon.</p> : (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Enter ZIP code" 
            value={zip} 
            onChange={e => setZip(e.target.value)} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EnrollmentPage;