import * as React from 'react';
import TodayForecast from "./TodayForecast";
import {useState} from "react";
import SelectableList from "./SelectableList";
import Constants from "../Constants";


/**
 * A component which displays Forecast.
 * It has 2 components, one to display the forecast of the current day,
 * and another which displays a list of location to select the forecast to.
 * @param props locationsList which is a list that contains instances of Location class
 * @returns {JSX.Element}
 * @constructor
 */
function Forecast(props) {
    const [imageSource, setImageSource] = useState(Constants.paths.forecastImg);
    // state to indicate the path of the default image

    const [forecastDetails, setForecastDetails] =
        useState({date: "", weather: "", temperatures: {min: "", max: ""}, wind: ""});
    // reducer which have information about a location forecast

    const [spinner, setSpinner] = useState(false); // the loading gif

    const [fetchSucceed, setFetchSucceed] = useState(true);
    // a state to indicate whether the fetch was successful

    /**
     * a simple function to tell if the return status from the api was good
     * @param response as received from the rest request
     * @returns {Promise<never>|Promise<unknown>}
     */
    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    /**
     * this function gets an instance of Location, and requests data from the weather website
     * @param location an instance of Location
     * @returns {Promise<void>}
     */
    const displayForecast = async (location) => {
        if (location !== undefined) {
            setSpinner(true); // start the loading gif
            const latitude = parseFloat(location.getLatitude());
            const longitude = parseFloat(location.getLongitude());
            const url = `https://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`;
            await fetch(url, {method: "GET"})
                .then(status)
                .then(res => res.json())
                .then(json => {
                    const today = json["dataseries"][0];
                    setForecastDetails({
                        ...forecastDetails,
                        date: today["date"], weather: today["weather"],
                        temperatures: {min: today["temp2m"]["min"], max: today["temp2m"]["max"]},
                        wind: today["wind10m_max"]
                    });
                    setImageSource(`https://www.7timer.info/bin/astro.php?%20lon=${longitude}&lat=${latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`);

                    setFetchSucceed(true);

                })
                .catch(() => {
                    setImageSource(Constants.paths.forecastImg);
                    setFetchSucceed(false);
                })
                .finally(() => {
                    setSpinner(false);
                });
        }
    };


    return (
        <>
            <div className=" d-flex justify-content-center">
                <a href={imageSource} target="_blank" rel="noreferrer">
                    <img src={imageSource} className='img-fluid' alt={'graph'}/>
                </a>
            </div>
            {fetchSucceed ? (
                <>
                    <br/>
                    <div className="d-flex justify-content-center">
                        <TodayForecast forecast={forecastDetails}/>
                    </div>
                </>
            ) : (
                <div className="d-flex justify-content-center">
                    <h5>{Constants.messages.networkError}</h5>
                </div>
            )}

            <br/>
            <div className="d-flex justify-content-center">
                {spinner ?
                    (<div className="spinner-border" role="status">
                        <span className="visually-hidden">{Constants.messages.spinner}</span>
                    </div>)
                    : ""}
            </div>
            <br/>

            {props.locationsList.length > 0 ? (
                <SelectableList list={props.locationsList} action={displayForecast}
                                actionText={Constants.messages.forecastActionText} buttonColor={"primary"}
                />

            ) : ""}
            <br/>
        </>
    );
}

export default Forecast;