import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ZipCheckPage from './ZipCheckPage'; // agar same folder me hai

const HomePage = () => {
  const [zip, setZip] = useState('');
  const [result, setResult] = useState('');

  const handleCheck = () => {
    if (!zip) return;
    const resultObj = window.zipAvailability?.checkAvailability(zip); // agar globally accessible hai
    if (resultObj?.available) {
      setResult(`Yes! Service is available in your area. Provider: ${resultObj.provider}`);
    } else {
      setResult("Sorry, service is not available in your ZIP code yet.");
    }
  };

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#f9fafb',
      textAlign: 'center'
    }}>
      <h1>Welcome to PowerChoice Energy</h1>
      <p>Check ZIP code availability and choose the best plan for you!</p>
      
      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Enter ZIP code" 
          value={zip} 
          onChange={(e) => setZip(e.target.value)} 
          style={{ padding: '10px', fontSize: '16px', width: '200px' }}
        />
        <button 
          onClick={handleCheck} 
          style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
        >
          Check
        </button>
      </div>
      
      {result && <p>{result}</p>}

      <Link to="/plans"><button style={{ marginTop: '30px', padding: '10px 20px', fontSize: '16px' }}>View Plans</button></Link>
    </div>
  );
};

export default HomePage;
