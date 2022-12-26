import React, { useState, useEffect } from 'react';

const carTank = {
    'car1': 30,
    'car2': 35,
    'car3': 40,
    'car4': 45,
};

const fuel = [1.10, 1.22, 1.47, 1.77];

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function AverageCostPerCar() {
    const [averageCost, setAverageCost] = useState(0);

    useEffect(() => {
        async function calculateAverageCost() {
            const daysInMonth = getDaysInMonth(2, 2021);
            let totalFuelCost = 0;
            let totalFuelCapacity = 0;
            for (const car of ['car1', 'car4']) {
                const consumption = fuel[Object.keys(carTank).indexOf(car)];
                const fuelCost = consumption * 100 * 2.50 / 100;
                totalFuelCost += fuelCost * daysInMonth;
                totalFuelCapacity += carTank[car];
            }
            setAverageCost(totalFuelCost / totalFuelCapacity);
        }

        calculateAverageCost();
    }, []);

    return (
        <>
            <div className='text-start' style={{height: '200px'}}>
                <div className='py-2'><b>What is the average cost for one liter for car1 and car 4 if they work for 1 month?</b></div>
                <p>Average cost per liter: {averageCost}</p>
            </div>
        </>

    );
}

export default AverageCostPerCar;