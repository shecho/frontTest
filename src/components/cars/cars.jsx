import React, { useEffect, useState } from "react";
import Car from "./car";
import Sidebar from "../sidebar/sidebar";

const Cars = () => {
  let [cars, setCars] = useState([]);
  let [updateData, setUpdateData] = useState({});
  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    let url = "http://127.0.0.1:4000/car";
    let response = await fetch(url);
    let res = await response.json();
    let carlist = res.cars;

    setCars(() => carlist);
  };

  const handleUpdateInput = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    console.log(setUpdateData);
  };
  return (
    <>
      <div className="row m-2 p-3">
        <div>
          <Sidebar />
        </div>
        {cars.map((car) => (
          <Car key={car._id} car={car} handleUpdateInput={handleUpdateInput} />
        ))}
      </div>
    </>
  );
};
export default Cars;
