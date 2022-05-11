import * as React from 'react';
import {useState} from "react";


function SelectableList(props) {

    const [currentSelected, setCurrentSelected] = useState('');

    const handleChange = (event) => {
        setCurrentSelected(event.target.value)
    }


    return (<div>
            <div className="list-group" role="tablist">
                {props.list.map(location => {
                    return (<div key={location.getName()}>
                            <label className="list-group-item">

                                <input type="radio" value={location.getName()}
                                       checked={currentSelected === location.getName()}
                                       onChange={handleChange}/>{location.getName()}
                            </label>

                        </div>)
                })}
            </div>

            <button className='btn alert-secondary my-4'
                    onClick={() => props.action(props.list
                        .find((location) => {
                            return location.getName() === currentSelected
                        }))}>
                Show Forecast
            </button>
        </div>);

}

export default SelectableList;

