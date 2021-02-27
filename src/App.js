import React, { useEffect, useState } from "react";
import Nav from './components/nav/nav';
import Home from './components//home/home';
import Car from './components/cars/car';
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
      <div className="">
        <Home/>
      </div>
      <div className="row m-2 p-3">
      { cars.map((car, index) =>
      (
          <Car key={car._id} car={car}/>
      )
      )}
      </div>
    </div>
  );
};
export default App;
