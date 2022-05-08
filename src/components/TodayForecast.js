import * as React from 'react';
import {useState} from "react";


function TodayForecast(props) {

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {props.forecast.date}
                    {props.forecast.weather}
                    {props.forecast.temperatures.min}
                    {props.forecast.temperatures.max}
                    {props.forecast.wind}

                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
                <button type="text" className="btn btn-primary" onClick={() => {
                    console.log(props.forecast ? "fff" : "ddd" )
                    console.log(props.forecast)
                    // console.log(props.forecast["dataseries"][0])
                }}>clickme                </button>
            </div>
        </>
    );
}

export default TodayForecast;