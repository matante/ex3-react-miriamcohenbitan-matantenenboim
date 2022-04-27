import {useState} from "react";

export default function Form(props) {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addLocation(event);
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
                        // value={inputs.locationName || ""} todo ask solange why
                           onChange={handleChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="latitude" className="form-label">Latitude:</label>
                    <input type="number"
                           className="form-control"
                           id="latitude"
                           name="latitude"
                           value={inputs.latitude || ""}
                           onChange={handleChange}
                    />
                </div>

                <div className="mb-3 col">
                    <label htmlFor="longitude" className="form-label">Longitude:</label>
                    <input type="number"
                           className="form-control"
                           id="longitude"
                           name="longitude"
                           value={inputs.longitude || ""}

                           onChange={handleChange}
                    />
                </div>


                <button type="submit" className="btn btn-primary">Add Location ☻☺♥☻!</button>

            </form>
            <button type="text" className="btn btn-primary" onClick={() => {
                for (let i = 0; i < props.list.length; i++){console.log(props.list[i])}
            } }>clickme</button>
        </div>

    );
}
