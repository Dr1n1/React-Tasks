import React, { useState, useEffect } from 'react';

const carTank = {
  'car1': 30,
  'car2': 35,
  'car3': 40,
  'car4': 45,
};

const fuel = [1.10, 1.22, 1.47, 1.77];

function WeeksCar1CanDrive() {
  const [weeks, setWeeks] = useState(0);

  useEffect(() => {
    async function calculateWeeksCar1CanDrive() {
      let weeksCar1CanDrive = 0;
      while (weeksCar1CanDrive < 4) {
        weeksCar1CanDrive++;
        const costOfFuel = carTank.car1 * fuel[0] * weeksCar1CanDrive;
        if (costOfFuel > carTank.car4 * fuel[3] * 4) {
          break;
        }
      }
      setWeeks(weeksCar1CanDrive);
    }

    calculateWeeksCar1CanDrive();
  }, []);

  return (
    <>

      <div className='text-start p-3' style={{ height: '200px' }}>
        <div className='py-2'><b>How much more weeks ac Car1 drive within the same budget as Car4 spends for 1 month?</b></div>
        <p>
          {`Car 1 can drive for around ${weeks} weeks with the same budget as car 4 spends in a month.`}
        </p>
      </div>
    </>
  );
}

export default WeeksCar1CanDrive;
