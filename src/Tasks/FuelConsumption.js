import React, { useState, useEffect } from 'react';

const carTank = {
    'car1': 40,
    'car2': 50,
    'car3': 60,
    'car4': 70,
};

const fuel = [1.10, 1.22, 1.47, 1.77];

function FuelConsumption() {
    const [consumption, setConsumption] = useState({});

    useEffect(() => {
        async function calculateConsumption() {
            const consumption = {};
            for (const car in carTank) {
                let calc = 0;
                const valueTank = carTank[car];
                for (let i = 0; i < 12; i++) {
                    const kk = i % 4;
                    const valeuFuel = fuel[kk];
                    calc += valueTank * valeuFuel;
                }
                consumption[car] = calc;
            }
            setConsumption(consumption);
        }

        calculateConsumption();
    }, []);

    return (
        <>
            <div className='text-start ' style={{ height: '200px' }}>
                <div className='py-2'><b>What is the average cost for one liter for car1 and car 4 if they work for 1 month?</b></div>
                <ul>
                    {Object.entries(consumption).map(([car, value]) => (
                        <li key={car}>{car}: {value}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default FuelConsumption;
