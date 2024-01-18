import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, ElectricMeter, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  // const actualData = [6, 13, 32, 11, 43];
  // const predictedData = [6, 13, 32, 11, 43];

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-b from-[#fbfff1] via-[#64B5F6] to-[#0D47A1]">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <ElectricMeter />
        {/* <BatteryMeter />         */}
        {/* <About /> */}
        <Works />

        <div className="relative z-0">
          <Experience />
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
