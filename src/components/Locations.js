import React, {useState} from 'react';
import Location from "../Location";
import Form from "./Form";
import EditableList from "./EditableList";
import Constants from "../Constants";

/**
 * this component manages adding and removing of locations
 * @param props locationsList a list of Location class
 * setLocationsList a function to modify the list
 * @returns {JSX.Element}
 * @constructor
 */
export default function Locations(props) {
    const [errors, setErrors] = useState({locationName: "", latitude: "", longitude: ""});
    // used to tell the form which error occurred (empty = no error)

    /**
     * a simple function which makes a new Location and adds it to the list
     * @param inputs as given from the form. we reach here only after validation
     */
    const addLocation = (inputs) => {

        const {locationName, latitude, longitude} = trimAndParseInputs(inputs);

        props.setLocationsList(oldList => [...oldList, new Location(locationName, latitude, longitude)]);
        //add to the list
    };

    /**
     * check if a location is already in the list
     * @param locationName a name of location
     * @returns {boolean}
     */
    const isAlreadyAppears = (locationName) => {
        for (const location of props.locationsList) {
            if (location.getName() === locationName) {
                setErrors({...errors, locationName: Constants.messages.duplicateLocationError});
                return true;
            }
        }
        setErrors({...errors, locationName: ""});
        return false;
    };

    /**
     * check if a value is in a valid range
     * @param type string of the value (used in the object)
     * @param value the value to check
     * @param min
     * @param max
     * @returns {boolean}
     */
    const isInRange = (type, value, min, max) => {
        if (value < min || value > max) {
            setErrors(errors => ({...errors, [type]: `Value is not in range [${min}..${max}]`}));
            return false;
        }
        setErrors(errors => ({...errors, [type]: ''}));
        return true;
    };

    /**
     * a function which checks if the inputs were valid
     * @param inputs as we get from the user
     * @returns {""|false|boolean}
     */
    const checkInput = (inputs) => {

        const {locationName, latitude, longitude} = trimAndParseInputs(inputs);

        const v1 = !isAlreadyAppears(locationName);
        const v2 = isInRange("latitude", latitude, Constants.latitude.min, Constants.latitude.max);
        const v3 = isInRange("longitude", longitude, Constants.longitude.min, Constants.longitude.max);
        return locationName && v1 && v2 && v3;

    };

    /**
     * gets all inputs from the user, trimming and parsing numbers
     * @param inputs
     * @returns {{locationName: string, latitude: number, longitude: number}}
     */
    const trimAndParseInputs = (inputs) => {
        const locationName = inputs.locationName.trim();
        const latitude = parseFloat(inputs.latitude.trim());
        const longitude = parseFloat(inputs.longitude.trim());
        return {locationName, latitude, longitude};
    };

    /**
     * delete location from the list.
     * keeps only the Location's which their name is not the same as the location received
     * @param otherLocation
     */
    const deleteLocation = (otherLocation) => {
        props.setLocationsList(props.locationsList.filter(location => location.getName() !== otherLocation.getName()));
    };


    return (
        <>
            <Form list={props.locationsList} addToList={addLocation} errors={errors} checkInput={checkInput}/>
            <br/>
            <EditableList list={props.locationsList} action={deleteLocation}
                          actionText={Constants.messages.deleteActionText} buttonColor={"danger"}
            />
        </>
    );
}
