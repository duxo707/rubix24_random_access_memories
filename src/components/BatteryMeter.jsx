// import React, { useEffect } from 'react';
// import './YourStylesheet.css'; // Replace with the path to your CSS file

// const BatteryMeter = () => {
//   useEffect(() => {
//     const c = new BatteryMeter('.battery');
//     const healthInput = document.getElementById('health');

//     healthInput?.addEventListener('input', () => {
//       c.adjustHealth(+healthInput.value / 100);
//     });
//   }, []);

//   return (
//     <main>
//       <div className="battery-container">
//         <svg className="battery" viewBox="0 0 100 100" width="100px" height="100px">
//           {/* ... SVG content ... */}
//         </svg>
//       </div>
//       <form onSubmit={() => false}>
//         <label htmlFor="health">Health</label>
//         <div>
//           <input id="health" name="health" type="number" value="100" min="0" max="100" step="1" />
//           %
//         </div>
//       </form>
//     </main>
//   );
// };

// export default BatteryMeter;

// class BatteryMeter {
//   health = 1;

//   constructor(el) {
//     this.el = document.querySelector(el);
//     this.init();
//   }

//   get healthReadable() {
//     return `${Math.round(this.health * 100)}%`;
//   }

//   init() {
//     this.adjustHealth(this.health);
//   }

//   adjustHealth(value) {
//     this.health = Math.max(Math.min(value, 1), 0);
//     this.updateDisplay();
//   }

//   updateDisplay() {
//     // fill
//     this.el.style.setProperty('--percent', this.health);

//     // color code
//     const critical = 'battery--critical';
//     const low = 'battery--low';
//     const hideSymbols = 'battery--hide-symbols';

//     this.el.classList.remove(critical, low, hideSymbols);

//     if (this.health <= 0.1) this.el.classList.add(critical);
//     else if (this.health <= 0.2) this.el.classList.add(low);

//     // hide the plus and minus if there’s not enough room
//     if (this.health <= 0.09) this.el.classList.add(hideSymbols);

//     // display the value in percent
//     const value = this.el.querySelector('[data-value]');
//     if (value) value.innerHTML = this.healthReadable;
//   }
// }
