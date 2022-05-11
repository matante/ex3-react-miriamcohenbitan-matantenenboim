import * as React from 'react';
import List from "./List";
import TodayForecast from "./TodayForecast";
import {useState} from "react";
import SelectableList from "./SelectableList";


function Forecast(props) {
    const [imageSource, setImageSource] = useState("forecast.jpg");
    const [forecastDetails, setForecastDetails] =
        useState({date: "", weather: "", temperatures: {min: "", max: ""}, wind: ""});
    const [spinner, setSpinner] = useState(false);
    const [fetchSucceed, setFetchSucceed] = useState(true);


    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    const displayForecast = async (location) => {
        if (location !== undefined) {
            setSpinner(true);
            const latitude = parseFloat(location.latitude);
            const longitude = parseFloat(location.longitude);
            const url = `https://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
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
                    setImageSource(`https://www.7timer.info/bin/astro.php?%20lon=${longitude}&lat=${latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`)

                    setFetchSucceed(true);

                })
                .catch(() => {
                    setImageSource("forecast.jpg");
                    setFetchSucceed(false);
                })
                .finally(() => {
                    setSpinner(false);
                });
        }
    }
    return (
        <>
            <div className=" d-flex justify-content-center"   >
                <img src={imageSource} className='img-fluid' alt={''}/>
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
                    <h5>Weather forecast service is not available right now, please try again later.</h5>
                </div>
            )}

            <br/>
            <div className="d-flex justify-content-center">
                {spinner ?
                    (<div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>)
                    : ""}
            </div>
            <br/>

            {props.locationsList.length > 0 ? (
                <SelectableList list={props.locationsList} action={displayForecast}
                                actionText={"Show Forecast"} buttonColor={"primary"}
                    />

            ) : ""}
            <br/>
        </>
    );
}

/*
list={props.locationsList} action={displayImage} actionText={"Show Forecast"}
                      buttonColor={"primary"} listType={"selectable"}
 */
export default Forecast;