import * as React from 'react';
import {useState} from "react";
import Constants from "../Constants";

/**
 * @param props list - a list of Location class.
 * action - the action that will happen when pressing on the button
 * actionText - the text that will be shown on the button
 * buttonColor - as name describes
 * @returns {JSX.Element}
 * @constructor
 */
function SelectableList(props) {

    const [currentSelected, setCurrentSelected] = useState('');
    // a state which indicates which location is currently chosen

    // updates the state
    const handleChange = (event) => {
        setCurrentSelected(event.target.value);
    };

// for each Location in the list, make an item in the html list.
    return (<div>
            <div className="list-group" role="tablist">
                {props.list.map(location => {
                    return (<div key={location.getName()}>
                            <label className="list-group-item">
                                <input type="radio" value={location.getName()}
                                       checked={currentSelected === location.getName()}
                                       onChange={handleChange}/>
                                {location.getName()}
                            </label>
                        </div>)
                })}
            </div>

            <button className='btn alert-secondary my-4'
                    onClick={() => props.action(props.list
                        .find((location) => {
                            return location.getName() === currentSelected
                        }))}>
                {Constants.messages.forecastActionText}
            </button>
        </div>); // on click, do the action from the props (displayForecast) with the corresponding parameter

}

export default SelectableList;

