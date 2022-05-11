import * as React from 'react';
import Winds from "../Winds";
import Constants from "../Constants";

/**
 * This component display the weather of the current day
 * @param props forecast an object with information about a location forecast
 * @returns {JSX.Element}
 * @constructor
 */
function TodayForecast(props) {

    /**
     * a function which converts number to Date
     * @param date date in yyyymmdd format
     * @returns {string}
     */
    const toDate = (date) => {
        const dateString = date.toString();
        const year = parseInt(dateString.substring(0, 4));
        const month = parseInt(dateString.substring(4, 6));
        const day = parseInt(dateString.substring(6, 8));
        const newDate = new Date(year, month - 1, day);
        return newDate.toDateString();
    };


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
                                    {Winds.getWindAsText(props.forecast.wind)}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (<h5>{Constants.messages.noLocationChosen}</h5>)}
            </div>
        </>
    );
}

export default TodayForecast;