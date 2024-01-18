// Importing React and necessary hooks
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from "react-parallax-tilt"
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

// ElectricMeter component
const ElectricMeter = () => {
    // State to store the current energy consumption
    const [energyConsumed, setEnergyConsumed] = useState(0);

    // Simulating real-time updates to energy consumption every second
    useEffect(() => {
        const interval = setInterval(() => {
            // Simulated increase in energy consumption
            setEnergyConsumed((prevEnergy) => prevEnergy + Math.random() * 10);
        }, 1000);

        // Clear the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="electric-meter-container mt-20 flex flex-wrap gap-10">
            {/* LEFT box */}
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.5, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-[#111111] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                    >
                        <p className="text-[#ede1be] text-[20px] font-bold text-center">LEFT</p>
                    </div>
                </motion.div>
            </Tilt>

            {/* Display the energy consumption */}
            <motion.div
                className="electric-meter p-4"
                style={{
                    background: 'linear-gradient(180deg, #000 0%, #111 100%)',
                    borderRadius: '10px',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <div className="wire red"></div>
                <div className="wire yellow"></div>
                <div className="wire blue"></div>
                <div className="wire green"></div>

                {/* Move energy consumed count inside the meter box */}
                <div
                    className="energy-display"
                    style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <p>Energy Consumed:</p>
                    <h1>{energyConsumed.toFixed(2)} kWh</h1>
                </div>
            </motion.div>

            {/* RIGHT box */}
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.5, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-[#111111] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                    >
                        <p className="text-[#ede1be] text-[20px] font-bold text-center">RIGHT</p>
                    </div>
                </motion.div>
            </Tilt>
        </div>
    );
};

export default ElectricMeter;
