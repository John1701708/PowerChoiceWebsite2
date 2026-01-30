import React, { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xjkpaewv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(() => setSubmitted(true));
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      {submitted ? <p>Thank you! We will reply soon.</p> : (
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name:e.target.value})} required/>
          <input type="email" placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email:e.target.value})} required/>
          <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({...formData, message:e.target.value})} required/>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactPage;