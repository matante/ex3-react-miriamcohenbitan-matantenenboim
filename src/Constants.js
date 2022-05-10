const Constants = function () {

    const latitude = {
        max: 90.0,
        min: -90.0
    }
    const longitude = {
        max: 180.0,
        min: -180.0
    }

    return {latitude, longitude}
}();

module.exports = Constants;