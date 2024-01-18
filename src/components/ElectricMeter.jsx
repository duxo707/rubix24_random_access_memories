import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons/faSun';

const ElectricMeter = () => {
    const [energyConsumed, setEnergyConsumed] = useState(0);
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [weatherInfo, setWeatherInfo] = useState({ icon: '', title: '', temp: '' });

    const API_KEY = 'YOUR_WEATHER_API_KEY';

    useEffect(() => {
        // Simulating real-time updates to energy consumption every second
        const energyInterval = setInterval(() => {
            setEnergyConsumed((prevEnergy) => prevEnergy + Math.random() * 10);
        }, 1000);

        // Fetch current date and time
        const updateDateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZoneName: 'short',
            };
            setCurrentDateTime(now.toLocaleString('en-US', options));
        };

        // Fetch weather data (replace with a real API call)
        const fetchWeatherData = async () => {
            try {
                // Replace 'YOUR_CITY' with the actual city name
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY&appid=${API_KEY}&units=metric`
                );
                const data = await response.json();

                if (data.cod && data.cod === '404') {
                    // Handle city not found
                    console.error('City not found');
                } else {
                    setWeatherInfo({
                        icon: data.weather[0].icon,
                        title: data.weather[0].main,
                        temp: `${data.main.temp}°C`,
                    });
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Initial fetch
        updateDateTime();
        fetchWeatherData();

        // Set intervals for date/time and weather updates
        const dateTimeInterval = setInterval(updateDateTime, 1000);
        const weatherInterval = setInterval(fetchWeatherData, 60000); // Update weather every minute

        // Clear intervals on component unmount
        return () => {
            clearInterval(energyInterval);
            clearInterval(dateTimeInterval);
            clearInterval(weatherInterval);
        };
    }, []);

    return (
        <div className="electric-meter-container mt-20 flex flex-wrap gap-10">

            {/* LEFT box */}
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-[#150b25] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-[#ede1be]"
                    >
                        <p>{currentDateTime}</p>
                    </div>
                </motion.div>
            </Tilt>

            {/* Display the energy consumption */}
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    className="electric-meter p-4 relative"
                    style={{
                        background: 'linear-gradient(180deg, #000 0%, #150b25 100%)',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        overflow: 'hidden',
                    }}
                >
                {/* <div className="wire red"></div>
                <div className="wire yellow"></div>
                <div className="wire blue"></div>
                <div className="wire green"></div> */}

                {/* Move energy consumed count inside the meter box */}
                <div
                        className="energy-display absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
                        style={{
                            color: '#fff',
                        }}
                    >
                        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', display: 'inline-block', color: '#150b25' }}>
                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Energy Consumed:</p>
                            <h1 style={{ fontWeight: 'bold', fontSize: '36px' }}>{energyConsumed.toFixed(2)} kWh</h1>
                        </div>
                    </div>
                </motion.div>
            </Tilt>

            {/* RIGHT box */}
            <Tilt className="xs:w-[250px] w-full">
                <motion.div
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-[#150b25] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col text-[#ede1be]"
                    >
                        <FontAwesomeIcon
    icon={faSun}
    className="mb-2 text-white"
    style={{ width: '50px', height: '50px' }}
/>

                        <p>27°C</p>
                        <p>SUNNY</p>
                    </div>
                </motion.div>
            </Tilt>

        </div>
    );
};

export default ElectricMeter;
