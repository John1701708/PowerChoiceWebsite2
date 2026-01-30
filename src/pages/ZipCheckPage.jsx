import React, { useState } from 'react';
import { zipAvailability } from '../mockData';

const ZipCheckPage = () => {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    if (zipAvailability.includes(zip)) {
      setResult("Yes! Service is available in your area.");
    } else {
      setResult("Sorry, service is not available in your ZIP code yet.");
    }
  };

  return (
    <div className="container">
      <h1>Check ZIP Code Availability</h1>
      <input 
        type="text" 
        placeholder="Enter ZIP code" 
        value={zip} 
        onChange={e => setZip(e.target.value)} 
      />
      <button onClick={handleCheck}>Check</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default ZipCheckPage;