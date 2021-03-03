import React, { useState } from "react";

const Car = (props) => {
  const { marca, fabrication_time } = props.car;
  const [showInput, setShowInput] = useState(false);

  const [editForms, setEditForms] = useState({});
  const [favorite, setFavorite] = useState(false);

  const handleFormsInput = (e) => {
    setEditForms({
      ...editForms,
      [e.target.name]: e.target.value,
    });
  };
  const updateData = () => {
    console.log(editForms);
  };
  const deleteCar = () => {
    console.log("deleting Car");
  };
  return (
    <div className="p-3 col-md-3">
      <div className="card justify-content-center p-1">
        <div className="d-flex justify-content-around">
          <i
            onClick={() => setFavorite(!favorite)}
            className={`fa fa-heart mx-2 btn ${
              favorite ? "btn-danger" : "btn-outline-danger"
            }`}
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-pencil mx-2 btn btn-warning"
            aria-hidden="true"
            onClick={() => setShowInput(!showInput)}
          ></i>
          <i
            onClick={() => deleteCar()}
            className="fa fa-trash mx-2 btn btn-danger"
            aria-hidden="true"
          ></i>
        </div>
        <div></div>
        <div>{marca}</div>
        <div className="col-md-8 m-auto">
          {showInput ? (
            <select
              onChange={(e) => handleFormsInput(e)}
              className="form-control text-center"
              name="marca"
              id=""
            >
              <option name="Toyota" value="Toyota">
                Toyota
              </option>
              <option name="Renault" value="Renault">
                Renault
              </option>
              <option name="Chevrolet" value="Chevrolet">
                Chevrolet
              </option>
            </select>
          ) : (
            ""
          )}
          <p className="pt-3">{fabrication_time}</p>
          {showInput ? (
            <input
              className="form-control m-auto"
              type="number"
              onInput={(e) => handleFormsInput(e)}
              name="fabrication_time"
            />
          ) : (
            ""
          )}
        </div>

        <button
          className="btn btn-primary mt-2"
          type="submit"
          onClick={() => updateData()}
        >
          <i className="fa fa-save mx-2" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default Car;
