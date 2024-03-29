class Spaceship {
    #weight;
    #maxFuel;
    #impulse;
    #fuelCosts;
    #maxTouchSpeed;
    #currentSpeed;
    #currentFuel;
    #altitude;

    constructor() {
    }

    get Weight() {
        return this.#weight;
    }

    set Weight(weight) {
        this.#weight = weight;
    }

    get MaxFuel() {
        return this.#maxFuel;
    }

    set MaxFuel(maxFuel) {
        this.#maxFuel = maxFuel;
    }

    get Impulse() {
        return this.#impulse;
    }

    set Impulse(impulse) {
        this.#impulse = impulse;
    }

    get FuelCosts() {
        return this.#fuelCosts;
    }

    set FuelCosts(fuelCosts) {
        this.#fuelCosts = fuelCosts;
    }

    get MaxTouchSpeed() {
        return this.#maxTouchSpeed;
    }

    set MaxTouchSpeed(maxTouchSpeed) {
        this.#maxTouchSpeed = maxTouchSpeed;
    }

    get CurrentSpeed() {
        return this.#currentSpeed;
    }

    get CurrentFuel() {
        return this.#currentFuel;
    }

    get CurrentAltitude() {
        return this.#altitude;
    }

    Copy() {
        let newSpaceship = structuredClone(this);

        return newSpaceship;
    }
}