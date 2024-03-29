class VueSpaceshipBuilder extends SpaceshipBuilder {
    BuildWeight() {
        this._spaceship.Weight(App.app);
        return this;
    }

    BuildMaxFuel() {
        this._spaceship.MaxFuel(document.getElementById('max-fuel'));
        return this;
    }

    BuildImpulse() {
        this._spaceship.Impulse(document.getElementById('impulse'));
        return this;
    }

    BuildFuelCosts(fuelCosts) {
        this._spaceship.FuelCosts(document.getElementById('fuel-costs'));
        return this;
    }

    BuildMaxTouchSpeed(maxTouchSpeed) {
        this._spaceship.MaxTouchSpeed(document.getElementById('max-touch-speed'));
        return this;
    }

    Build() {
        let newSpaceship = this._spaceship.Copy();

        return newSpaceship;
    }
}