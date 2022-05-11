/**
 * A class which implements a Location. it has 3 attributes: name, latitude and longitude
 * @type {Location}
 */
module.exports = class Location {
    constructor(name, latitude, longitude) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getName(){
        return this.name;
    }
    getLatitude() {
        return this.latitude;
    }
    getLongitude() {
        return this.longitude;
    }

};