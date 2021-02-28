import React from "react";
import Nav from './components/nav/nav';
import Home from './components//home/home';
import Cars from './components/cars/cars';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navigation">
        <Nav/>
      </div>
      <div className="">
        <Home/>
      </div>
      <Cars/>
    </div>
  );
};
export default App;
