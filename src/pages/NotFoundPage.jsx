import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <Link to="/"><button>Go Home</button></Link>
    </div>
  );
};

export default NotFoundPage;