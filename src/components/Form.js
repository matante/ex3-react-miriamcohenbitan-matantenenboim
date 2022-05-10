import React, {useState} from "react";

export default function Form(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const userInput = event.target.value;
        setInputs(values => ({...values, [name]: userInput}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.checkInput(inputs)){
            props.addLocation(inputs);
        }
    }


    return (
        <div>

            <form className="border p-3" onSubmit={handleSubmit}>
                {/*// todo: responsive*/}
                <h5>Add location:</h5>
                <div className="mb-3 col">
                    <label htmlFor="locationName" className="form-label">Name:</label>
                    <input type="text"
                           name="locationName"
                           className="form-control"
                           id="locationName"
                           //value={inputs.locationName || ""} todo ask solange why
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


                <button type="submit" className="btn btn-primary">Add Location</button>

            </form>


        </div>

    );
}
