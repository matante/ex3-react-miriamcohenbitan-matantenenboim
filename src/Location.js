module.exports = class Location {
    constructor(name, latitude, longitude) {
        // if (!name || isNaN(longitude) || isNaN(latitude)){
        //     console.log("bad from c-tor")
        //     return;
        // }
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

}