import React, { useEffect, useState } from "react";
import Nav from './components/nav/nav';
import "./App.css";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    let url = "http://127.0.0.1:4000/car";
    let response = await fetch(url);
    let res = await response.json();
    let carlist = res.cars
    setCars(() => carlist);
  };


  return (
    <div className="App">
      <div className="navigation">
        <Nav/>
      </div>
      { cars.map((car, index) =>
      (
        <div key={car._id} className='card'>
          <p>{car.marca}</p>
          <p>{car.fabrication_time}</p>
        </div>
      )
      )}

    </div>
  );
};
export default App;
