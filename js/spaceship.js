class Spaceship {

    constructor() {
        this.weight = 1500;
        this.maxFuel = 500;
        this.impulse = 10;
        this.fuelCosts = 10;
        this.maxTouchSpeed = 10;
        this.currentFuel = 500;
        this.currentSpeed = 100;
        this.altitude = 100;
    }

    get Weight() {
        return this.weight;
    }

    set Weight(weight) {
        this.weight = weight;
    }

    get MaxFuel() {
        return this.maxFuel;
    }

    set MaxFuel(maxFuel) {
        this.maxFuel = maxFuel;
    }

    get Impulse() {
        return this.impulse;
    }

    set Impulse(impulse) {
        this.impulse = impulse;
    }

    get FuelCosts() {
        return this.fuelCosts;
    }

    set FuelCosts(fuelCosts) {
        this.fuelCosts = fuelCosts;
    }

    get MaxTouchSpeed() {
        return this.maxTouchSpeed;
    }

    set MaxTouchSpeed(maxTouchSpeed) {
        this.maxTouchSpeed = maxTouchSpeed;
    }

    get CurrentSpeed() {
        return this.currentSpeed;
    }

    set CurrentSpeed(speed) {
        this.currentSpeed = speed;
    }

    get CurrentFuel() {
        return this.currentFuel;
    }

    set CurrentFuel(fuel) {
        this.currentFuel = fuel;
    }

    get CurrentAltitude() {
        return this.altitude;
    }

    set CurrentAltitude(altitude) {
        this.altitude = altitude;
    }

    Copy() {
        let newSpaceship = structuredClone(this);

        return newSpaceship;
    }
}