import * as React from 'react';
import App from "../App";


function List(props) {

    return (
        <>
            <div className="card">
                <ol>
                    {props.list.map(location => (
                        <li key={location.name}>
                            <div className="row">
                                <div className="col-3">
                                    name: {location.name}
                                </div>
                                <div className="col-3">
                                    latitude: {location.latitude}
                                </div>
                                <div className="col-3">
                                    longitude: {location.longitude}
                                </div>
                                <div className="col-3">
                                    <button type="button" className={`btn btn-${props.buttonColor}`}
                                            onClick={() => props.action(location)}>
                                        {props.actionText}</button>

                                </div>

                                <br/>
                                <br/>


                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default List;