import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <h1>Welcome to PowerChoice Energy</h1>
      <p>Check ZIP code availability and choose the best plan for you!</p>
      <Link to="/plans"><button>View Plans</button></Link>
    </div>
  );
};

export default HomePage;
