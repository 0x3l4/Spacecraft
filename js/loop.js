class Loop {
    constructor(update) {
      this.update = update;
  
      this.deltaTime = 0;
      this.lastUpdate = 0;
      this.maxInterval = 40;
  
      this.isRunning = false;
    }
    animate(currentTime = 0) {
      if (!this.isRunning) return;

      requestAnimationFrame(stampTime => this.animate(stampTime));
  
      this.deltaTime = currentTime - this.lastUpdate;
      
      if (this.deltaTime < this.maxInterval) {
        this.update(this.deltaTime / 1000);
      }
      
      this.lastUpdate = currentTime;
    }

    start() {
      if (!this.isRunning) this.isRunning = true
      
      requestAnimationFrame(stampTime => this.animate(stampTime));
    }

    stop() {
      if (this.isRunning) this.isRunning = false;
    }
  }