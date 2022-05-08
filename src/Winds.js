const Winds = function () {

    const winds = {
        1: "Below 0.3m/s (calm)",
        2: "0.3-3.4m/s (light)",
        3: "3.4-8.0m/s (moderate)",
        4: "8.0-10.8m/s (fresh)",
        5: "10.8-17.2m/s (strong)",
        6: "17.2-24.5m/s (gale)",
        7: "24.5-32.6m/s (storm)",
        8: "Over 32.6m/s (hurricane)"
    }
    return {winds}
}();

module.exports = Winds;