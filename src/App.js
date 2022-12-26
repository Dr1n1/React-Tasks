import './App.css';
import AverageCostPerCar from './Tasks/AverageCostPerCar';
import FuelConsumption from './Tasks/FuelConsumption';
import FuelCost from './Tasks/FuelCost';
import WeeksCar1CanDrive from './Tasks/WeeksCar1CanDrive';
import MinimumMonthlyCost from './Tasks/MinimumMonthlyCost';

function App() {
  return (
    <div className="App container">
      <div className='row my-5'>
        <div className='col-6 py-2'>
          <div className="borderoftasks">

            <AverageCostPerCar />
          </div>
        </div>
        <div className='col-6 py-2'>
          <div className="borderoftasks">

            <FuelConsumption />
          </div>
        </div>
        <div className='col-6 py-2'>
          <div className="borderoftasks">

            <FuelCost />
          </div>
        </div>
        <div className='col-6 py-2'>
          <div className="borderoftasks">

            <WeeksCar1CanDrive />
          </div>
        </div>
        <div className='col py-2'>
          <div className="borderoftasks">

            <MinimumMonthlyCost />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
