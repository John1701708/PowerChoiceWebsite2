export const zipCodeAvailability = {
  checkAvailability: (zip) => {
    const availableZips = ['10001','10002','10003'];
    return {
      available: availableZips.includes(zip),
      provider: availableZips.includes(zip) ? 'PowerChoice Provider' : null,
    };
  },
};

export const electricityPlans = [
  { id: 1, name: '12 Month Plan', type: 'electricity', rate: '$0.10', unit: 'per kWh', contractLength: '12 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: true },
  { id: 2, name: '24 Month Plan', type: 'electricity', rate: '$0.09', unit: 'per kWh', contractLength: '24 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: false },
  { id: 3, name: '36 Month Plan', type: 'electricity', rate: '$0.08', unit: 'per kWh', contractLength: '36 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: false },
];

export const gasPlans = [
  { id: 4, name: '12 Month Plan', type: 'gas', rate: '$0.06', unit: 'per therm', contractLength: '12 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: true },
  { id: 5, name: '24 Month Plan', type: 'gas', rate: '$0.05', unit: 'per therm', contractLength: '24 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: false },
  { id: 6, name: '36 Month Plan', type: 'gas', rate: '$0.04', unit: 'per therm', contractLength: '36 Months', features: ['Fixed Rate', 'No Hidden Fees'], popular: false },
];

export const bundleDiscount = {
  enabled: true,
  message: 'Save up to 10% when you bundle electricity & gas plans!',
};