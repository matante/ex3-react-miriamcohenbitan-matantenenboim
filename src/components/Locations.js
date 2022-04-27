import React, {useState, useEffect} from 'react';
import Location from "../Location"
import Form from "./Form";
import List from "./List";

export default function Locations() {
    const [locationsList, setLocationsList] = useState([]);

    const addLocation = (event) => {
        const name = event.target.locationName.value.trim();
        const latitude = parseInt(event.target.latitude.value.trim());
        const longitude = parseInt(event.target.longitude.value.trim());
        if (!name || isNaN(longitude) || isNaN(latitude)){
            console.log("bad from handle change")
            return;
        }
        for (let location of locationsList){
            if (location.name === name){
                console.log(name + " already appears")
                return; // todo print error?

            }
        }
        let newLocation = new Location(name, latitude, longitude)
        setLocationsList(oldList => [...oldList, newLocation]);

        // const updateLocationsArray = [...locationsList, newLocation];
        // setLocationsList(updateLocationsArray);

    }

    const deleteLocation = (otherName) => {
       setLocationsList(locationsList.filter(location => location.name !== otherName));
    }


    return (
        <>
            <Form list={locationsList} addLocation={addLocation}/>
            <List list={locationsList} deleteLocation={deleteLocation}/>
        </>
    );
}
