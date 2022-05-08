import * as React from 'react';
import App from "../App";


function List(props) {

    return (
        <>
            <h1>I am a List</h1>
            <div className="card">
                <ol>
                    {props.list.map(location => (
                        <li key={location.name}>
                            name: {location.name} &nbsp;&nbsp;&nbsp;&nbsp;
                            latitude: {location.latitude}&nbsp;&nbsp;&nbsp;&nbsp;
                            longitude: {location.longitude}

                            <button type="button" className={`btn btn-${props.buttonColor}`}
                                    onClick={ () => props.action(location)}>
                                {props.actionText}</button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default List;