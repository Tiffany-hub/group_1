// App.js
import React, { useState } from 'react';
import PaymentProcessorPage from './paymentprocessor1';
import PaymentProcessorPage2 from './paymentprocessor2';

function App() {
  const [showPage2, setShowPage2] = useState(false);

  const handleNextButtonClick = () => {
    setShowPage2(true);
  }

  return (
    <div>
      {showPage2 ? (
        <PaymentProcessorPage2 handleBackButtonClick={() => setShowPage2(false)} />
      ) : (
        <PaymentProcessorPage handleNextButtonClick={handleNextButtonClick} />
      )}
    </div>
  );
}

export default App;
