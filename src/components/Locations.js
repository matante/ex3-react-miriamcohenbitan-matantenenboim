import React, {useState, useEffect} from 'react';
import Location from "../Location"
import Form from "./Form";
import List from "./List";
import EditableList from "./EditableList";
import Constants from "../Constants";


export default function Locations(props) {
    const [errors, setErrors] = useState({locationName: "", latitude: "", longitude: ""}); // tell which error (empty = no error)
    const addLocation = (inputs) => {

        const locationName = inputs.locationName.trim();
        const latitude = parseFloat(inputs.latitude.trim());
        const longitude = parseFloat(inputs.longitude.trim());

        props.setLocationsList(oldList => [...oldList, new Location(locationName, latitude, longitude)]);

    }
    const isAlreadyAppears = (locationName) => {
        for (const location of props.locationsList) {
            if (location.getName() === locationName) {
                setErrors({...errors, locationName: "Name is already exists"});
                return true;
            }
        }
        setErrors({...errors, locationName: ""});
        return false;
    }
    const isInRange = (type, value, min, max) => {

        if (value < min || value > max) {
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
        const v2 = isInRange("latitude", latitude, Constants.latitude.min, Constants.latitude.max);
        const v3 = isInRange("longitude", longitude, Constants.longitude.min, Constants.longitude.max);
        return locationName && v1 && v2 && v3; // todo add bootstrap required

    }

    const deleteLocation = (otherLocation) => {
        props.setLocationsList(props.locationsList.filter(location => location.name !== otherLocation.name));
    }


    return (
        <>
            <Form list={props.locationsList} addLocation={addLocation} errors={errors} checkInput={checkInput}/>
            <br/>
            {/*<List list={props.locationsList} action={deleteLocation} actionText={"Delete Location"}*/}
            {/*      buttonColor={"danger"} listType={"deletable"}/>*/}
            <EditableList list={props.locationsList} action={deleteLocation}
                          actionText={"Delete Location"} buttonColor={"danger"}
            />
        </>
    );
}
