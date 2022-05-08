import * as React from 'react';
import Winds from "../Winds";
import {useState} from "react";


function TodayForecast(props) {


    const toDate = (date) => {
        const dateString = date.toString();
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);

        return `${year} ${month} ${day}`;
    }

    const getWindAsText = (windNumber) => {
        if (windNumber === 1){
            return "No Wind";
        }
        return Winds.winds[windNumber]
    }

    return (
        <>
            <div className="card">
                {props.forecast.weather ? (
                    <>
                        <h5 className="card-header"> {toDate(props.forecast.date)} </h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-3">
                                    <h5>Weather:</h5>
                                </div>
                                <div className="col-6">
                                    {props.forecast.weather}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <h5>Temperature:</h5>
                                </div>
                                <div className="col-6">
                                    {props.forecast.temperatures.min} to {props.forecast.temperatures.max} Celsius
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                    <h5>Wind Condition:</h5>
                                </div>
                                <div className="col-6">
                                    {getWindAsText(props.forecast.wind)}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (<h5>Please add a location and then press "Show Forecast"</h5>)}

            </div>
            {props.spinner ?
                (<div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>)
                : ("") }

        </>
    )
        ;
}

export default TodayForecast;