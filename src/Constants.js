const Constants = function () {

    const latitude = {
        max: 90.0,
        min: -90.0
    };
    const longitude = {
        max: 180.0,
        min: -180.0
    };
    const paths = {
        cloud : "cloud.png",
        storm : "storm.png",
        forecastImg : "forecast.jpg",
    };
    const messages = {
        networkError : "Weather forecast service is not available right now, please try again later.",
        spinner : "Loading...",
        forecastActionText :"Show Forecast",
        deleteActionText :"Delete",
        addLocation : "Add location",
        noLocationChosen : "Please add a location and then press \"Show Forecast\"",
        duplicateLocationError : "Name is already exists",
        invalidURL : "Invalid URL"
    };

    return {latitude, longitude, paths, messages};
}();

module.exports = Constants;