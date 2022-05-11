import React, {useState} from "react";
import Constants from "../Constants";

/**
 * a component which handles a form to add Location to the list
 * @param props list a list of Location class
 * addToList is a function to add to the list
 * errors in case of errors show them on the form
 * checkInput a function to validate the input in the form
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form(props) {
    const [inputs, setInputs] = useState({});
    // a reducer to hold all the inputs

    /**
     * to add a parameter to the inputs
     * @param event
     */
    const handleChange = (event) => {
        const name = event.target.name;
        const userInput = event.target.value;
        setInputs(values => ({...values, [name]: userInput}));
    };

    /**
     * happens when the user presses submit form
     * @param event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.checkInput(inputs)){ // if valid
            props.addToList(inputs); // submit
        }
    };


    return (
        <div>
            <form className="border p-3" onSubmit={handleSubmit}>
                <h5>{Constants.messages.addLocation}</h5>
                <div className="mb-3 col">
                    <label htmlFor="locationName" className="form-label">Name:</label>
                    <input type="text"
                           name="locationName"
                           className="form-control"
                           id="locationName"
                           onChange={handleChange}
                           required
                    />
                    <p className={props.errors.locationName ? 'alert alert-danger' : ""}> {props.errors.locationName}</p>

                </div>

                <div className="mb-3 col">
                    <label htmlFor="latitude" className="form-label">Latitude:</label>
                    <input type="number"
                           className="form-control"
                           id="latitude"
                           name="latitude"
                           value={inputs.latitude || ""}
                           onChange={handleChange}
                           required
                    />
                    <p className={props.errors.latitude ? 'alert alert-danger' : ""}> {props.errors.latitude}</p>

                </div>

                <div className="mb-3 col">
                    <label htmlFor="longitude" className="form-label">Longitude:</label>
                    <input type="number"
                           className="form-control"
                           id="longitude"
                           name="longitude"
                           value={inputs.longitude || ""}
                           onChange={handleChange}
                           required
                    />
                    <p className={props.errors.longitude ? 'alert alert-danger' : ""}> {props.errors.longitude}</p>

                </div>

                <button type="submit" className="btn btn-primary">{Constants.messages.addLocation}</button>
            </form>
        </div>

    );
}
