import * as React from 'react';
import App from "../App";
import List from "./List";
import TodayForecast from "./TodayForecast";
import {useState} from "react";


function Forecast(props) {
    const [imageSource, setImageSource] = useState("forecast.jpg");
    const [forecastDetails, setForecastDetails] =
        useState({date: "", weather: "", temperatures: {min: "", max: ""}, wind: ""});
    const [spinner, setSpinner] = useState(false);


    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    const displayImage = async (location) => {
        setSpinner(true);
        const latitude = location.latitude;
        const longitude = location.longitude;
        setImageSource(`https://www.7timer.info/bin/astro.php?%20lon=${longitude}&lat=${latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`)
        const url = `https://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`
        await fetch(url, {method: "GET"})
            .then(status)
            .then(res => res.json())
            .then(json => {
                const today = json["dataseries"][0];
                setForecastDetails({...forecastDetails,
                    date: today["date"], weather: today["weather"],
                    temperatures: {min: today["temp2m"]["min"], max: today["temp2m"]["max"]},
                    wind: today["wind10m_max"]
                });
                setSpinner(false);

            })
            .catch(function (err) {
                return Promise.reject(new Error(err.statusText));
            });
    }

    return (
        <>
            <List list={props.locationsList} action={displayImage} actionText={"Show Forecast"} buttonColor={"primary"}/>
            <br/>
            <img src={imageSource} alt={''} />
            <br/>
            <TodayForecast forecast={forecastDetails} spinner={spinner}/>
        </>
    );
}

export default Forecast;