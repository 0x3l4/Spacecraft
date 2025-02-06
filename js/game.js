class Game {
    isRunning;
    spaceship;
    initialAltitude;
    timeLimit;
    maxInterval;
    timePassed;
    deltaTime;
    lastUpdate;
    curSpeed;
    curAltitude;
    curTime;
    curFuel;
    acceleration;
    isEngineOn;
    
    constructor() {
        this.isRunning = false;
        this.spaceship = new Spaceship();
        this.maxInterval = 40;
        this.deltaTime = 0;
        this.lastUpdate = 0;
        this.initialAltitude = 1;
        this.curAltitude = this.initialAltitude;
        this.isEngineOn = false;
    }

    Start() {
        if (!this.isRunning) this.isRunning = true;
        
        while (this.isRunning) {
            // this.deltaTime = Date.now() - this.lastUpdate;

            // if (this.deltaTime < this.maxInterval) {
            //     this.Update(this.deltaTime / 1000);
            // }

            // this.lastUpdate = Date.now();

            
        }

        setInterval(() => this.Update(), 1000 / this.maxInterval)
    }

    Stop() {
        if (this.isRunning) this.isRunning = false;
    }

    Update(correction) {

        if (this.isEngineOn && this.spaceship.CurrentFuel > 0) {
            if (this.spaceship.CurrentFuel >= this.spaceship.FuelCosts * correction) {
                this.spaceship.CurrentFuel -= this.spaceship.FuelCosts * correction;
                this.spaceship.CurrentSpeed = Math.floor((this.spaceship.Weight - this.spaceship.CurrentFuel) * this.spaceship.CurrentSpeed - this.spaceship.Impulse * this.spaceship.FuelCosts / correction) / ((this.spaceship.Weight + this.spaceship.CurrentFuel) - this.spaceship.Impulse / correction);
                
                
                // this.currentSpeed = (((this.weight + this.remainingFuel) * this.currentSpeed - this.impulseWeight * this.exhaustVelocity / this.timemultiply) / ((this.weight + this.remainingFuel) - this.impulseWeight / this.timemultiply));
            }
            else {
                this.spaceship.CurrentSpeed += this.acceleration * correction;
                this.spaceship.CurrentAltitude += this.spaceship.CurrentSpeed * correction;
            }
        }
        else {
            this.spaceship.CurrentSpeed += this.acceleration * correction;
            this.spaceship.CurrentAltitude += this.spaceship.CurrentSpeed * correction;
        }

    }

    get IsRunning() {
        return this.isRunning;
    }

    set IsRunning(isRunning) {
        this.isRunning = isRunning;
    }

    get Spaceship() {
        return this.spaceship;
    }

    set Spaceship(spaceship) {
        return this.spaceship = spaceship;
    }

    get InitialAltitude() {
        return this.initialAltitude;
    }

    set InitialAltitude(altitude) {
        if (!this.isRunning)
            this.initialAltitude = altitude;
    }

    get CurrentAltitude() {
        return this.curAltitude;
    }
    
    set CurrentAltitude(altitude) {
        this.curAltitude = altitude;
    }

    get TimeLimit() {
        return this.timeLimit;
    }

    set TimeLimit(time) {
        this.timeLimit = time;
    }

    get TimePassed() {
        return this.timePassed;
    }
}