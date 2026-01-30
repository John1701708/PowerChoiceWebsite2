import React, { useState } from 'react';
import { electricityPlans, gasPlans, bundleDiscount } from '../mockData';
import { Link } from 'react-router-dom';

const PlansPage = () => {
  const [showElectricity, setShowElectricity] = useState(true);

  return (
    <div className="container">
      <h1>Our Plans</h1>
      <div>
        <button onClick={() => setShowElectricity(true)}>Electricity</button>
        <button onClick={() => setShowElectricity(false)}>Gas</button>
      </div>
      {bundleDiscount.enabled && <p>{bundleDiscount.message}</p>}
      <div>
        {(showElectricity ? electricityPlans : gasPlans).map(plan => (
          <div key={plan.id} className="plan-card">
            <h2>{plan.name}</h2>
            <p>Rate: {plan.rate} {plan.unit}</p>
            <p>Contract: {plan.contractLength}</p>
            <ul>
              {plan.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <Link to="/enroll"><button>Enroll Now</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansPage;