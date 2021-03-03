import React, { useState } from "react";

const Car = (props) => {
  const [showInput, setShowInput] = useState(false);
  const { marca, fabrication_time } = props.car;

  return (
    <div className="p-3 col-md-3">
      <div className="card justify-content-center p-1">
        <div className="d-flex justify-content-around">
          <i
            className="fa fa-heart mx-2 btn btn-outline-danger"
            aria-hidden="true"
          ></i>
          <i
            className="fa fa-pencil mx-2 btn btn-warning"
            aria-hidden="true"
            onClick={() => setShowInput(!showInput)}
          ></i>
          <i className="fa fa-trash mx-2 btn btn-danger" aria-hidden="true"></i>
        </div>
        <p className="py-3">{marca}</p>
        {showInput ? (
          <input className="form-control text-center" value={marca} />
        ) : (
          ""
        )}
        <p>{fabrication_time}</p>
        {showInput ? (
          <input
            className="form-control text-center"
            value={fabrication_time}
          />
        ) : (
          ""
        )}
        <button className="btn btn-primary mt-2">
          <i className="fa fa-save mx-2" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
export default Car;

