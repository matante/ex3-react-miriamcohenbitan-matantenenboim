import React, {useState, useEffect} from 'react';
import Location from "../Location"
import Form from "./Form";
import List from "./List";

export default function Locations() {
    const [locationsList, setLocationsList] = useState([]);
    const [errors, setErrors] = useState({locationName: "", latitude: "", longitude: ""}); // tell which error (empty = no error)

    const addLocation = (inputs) => {

        const locationName = inputs.locationName.trim();
        const latitude = parseFloat(inputs.latitude.trim());
        const longitude = parseFloat(inputs.longitude.trim());

        setLocationsList(oldList => [...oldList, new Location(locationName, latitude, longitude)]);

    }
    const isAlreadyAppears = (locationName) => {
        for (const location of locationsList) {
            if (location.getName() === locationName) {
                setErrors({...errors, locationName: "Name is already exists"});
                return true;
            }
        }
        setErrors({...errors, locationName: ""});
        return false;
    }
    const isInRange = (type, value, min, max) => {

        if (value < min || value > max){
            setErrors(errors => ({...errors, [type]: `Value is not in range [${min}..${max}]`}));
            return false;
        }
        setErrors(errors => ({...errors, [type]: ''}));
        return true;

    }


    const checkInput = (inputs) => {

        const locationName = inputs.locationName.trim();
        const latitude = parseFloat(inputs.latitude.trim());
        const longitude = parseFloat(inputs.longitude.trim());


        const v1 = !isAlreadyAppears(locationName);
        const v2 = isInRange("latitude", latitude, -90, 90);
        const v3 = isInRange("longitude", longitude, -180, 180);
        return locationName && v1 && v2 && v3; // todo add bootstrap required

    }

    const deleteLocation = (otherName) => {
        setLocationsList(locationsList.filter(location => location.name !== otherName));
    }


    return (<>
        <Form list={locationsList} addLocation={addLocation} errors={errors} checkInput={checkInput}/>
        <List list={locationsList} deleteLocation={deleteLocation}/>
    </>);
}
