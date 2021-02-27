import React from 'react'

const Car = (props) => {
    const { marca, fabrication_time } = props.car

    return (
        <div className="p-3 col-md-3">
            <div className="card  justify-content-center">
                <div className="d-flex justify-content-end">
                    <i className="fa fa-trash mx-2 btn btn-danger" aria-hidden="true"></i>
                    <i className="fa fa-pencil mx-2 btn btn-warning" aria-hidden="true"></i>
                </div>
                <p>{marca}</p>
                <p>{fabrication_time}</p>
                <button className="btn btn-primary">
                    <i className="fa fa-save mx-2" aria-hidden="true"></i>
                </button>

            </div>
        </div>
    )
}
export default Car