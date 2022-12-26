import React, { useState, useEffect } from 'react';

const carTank = {
    'car1': 30,
    'car2': 35,
    'car3': 40,
    'car4': 45,
};

const fuel = [1.10, 1.22, 1.47, 1.77];

function MinimumMonthlyCost() {
    const [minimumMonthlyCosts, setMinimumMonthlyCosts] = useState({});
    const [leastSpendingCars, setLeastSpendingCars] = useState([]);

    useEffect(() => {
        async function calculateMinimumMonthlyCost() {
            function getDaysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }

            function getMinimumMonthlyCost(car, daysInMonth, distance, fuelPrice) {
                const consumption = fuel[Object.keys(carTank).indexOf(car)];
                const fuelCost = consumption * distance * fuelPrice / 100;
                return fuelCost * daysInMonth;
            }

            const daysInMonth = getDaysInMonth(2, 2021);

            const minimumMonthlyCosts = {};
            for (const car in carTank) {
                minimumMonthlyCosts[car] = getMinimumMonthlyCost(car, daysInMonth, 100, 2.50);
            }

            setMinimumMonthlyCosts(minimumMonthlyCosts);

            const sortedCosts = Object.entries(minimumMonthlyCosts).sort((a, b) => a[1] - b[1]);

            const leastSpendingCars = sortedCosts.slice(0, 2).map(entry => entry[0]);
            setLeastSpendingCars(leastSpendingCars);
        }

        calculateMinimumMonthlyCost();
    }, []);

    return (
        <>
            <div className='text-start p-3' style={{ height: '200px' }}>
                <div className='py-2'><b>What is the minimum monthly cost we need for two cars to be operational?</b></div>
                <ul>
                    {Object.entries(minimumMonthlyCosts).map(([car, cost]) => (
                        <li key={car}>{`${car}: ${cost}`}</li>
                    ))}
                </ul>
                <p>{`Cars that can cover one month with the minimum cost are: ${leastSpendingCars.join(', ')}`}</p>
            </div>

        </>
    );
}

export default MinimumMonthlyCost;
