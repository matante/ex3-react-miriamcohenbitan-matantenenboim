const Winds = function () {

    const winds = {
        1: "No Wind",
        2: "0.3-3.4m/s (light)",
        3: "3.4-8.0m/s (moderate)",
        4: "8.0-10.8m/s (fresh)",
        5: "10.8-17.2m/s (strong)",
        6: "17.2-24.5m/s (gale)",
        7: "24.5-32.6m/s (storm)",
        8: "Over 32.6m/s (hurricane)"
    };

    /**
     * a simple function which returns the matching wind text
     * @param windNumber an integer
     * @returns {string|*}
     */
    const getWindAsText = (windNumber) => {
        if (windNumber >= 0 && windNumber <= 8)
            return winds[windNumber];
        return "Invalid wind number";
    };

    return {getWindAsText};
}();

module.exports = Winds;