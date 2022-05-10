import * as React from 'react';
import Winds from "../Winds";
import {useState} from "react";


function TodayForecast(props) {


    const toDate = (date) => { // todo how to return date properly?
        const dateString = date.toString();
        const year = parseInt(dateString.substring(0, 4));
        const month = parseInt(dateString.substring(4, 6));
        const day = parseInt(dateString.substring(6, 8));
        // todo : parse int
        const newDate = new Date(year, month - 1, day);
        return newDate.toDateString()

//        return `${newDate.getDay()}${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
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
                                <div className="col-6">
                                    <h5>Weather:</h5>
                                </div>
                                <div className="col-6">
                                    {props.forecast.weather}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <h5>Temperature:</h5>
                                </div>
                                <div className="col-6">
                                    {props.forecast.temperatures.min} to {props.forecast.temperatures.max} Celsius
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
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


        </>
    )
        ;
}

export default TodayForecast;