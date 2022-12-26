import React, { useState, useEffect } from 'react';

const pricePerWeek = [1.1, 1.22, 1.47, 1.77];

function FuelCost() {
    const [cars, setCars] = useState([
        { car: 1, liters: 30, weeks: 4, total: 0 },
        { car: 2, liters: 35, weeks: 4, total: 0 },
        { car: 3, liters: 40, weeks: 6, total: 0 },
        { car: 4, liters: 45, weeks: 6, total: 0 },
    ]);

    useEffect(() => {
        async function calculateFuelCost() {
            const updatedCars = cars.map((car) => {
                let total = 0;
                for (let i = 0; i < car.weeks; i++) {
                    const k = i % 4;
                    total += car.liters * pricePerWeek[k];
                }
                return { ...car, total };
            });
            setCars(updatedCars);
        }

        calculateFuelCost();
    }, []);

    return (
        <>
            <div className='text-start p-3' style={{ height: '200px' }}>
                <div className='py-2 '><b> If Car 1 and Car2 work for 1 month and Car3 and Car4 work for 1.5months how much $ do they spend in total?</b></div>
                <ul>
                    {cars.map((car) => (
                        <li key={car.car}>{`Car ${car.car}: ${car.total}`}</li>
                    ))}

                </ul>
            </div>
        </>
    );
}

export default FuelCost;
