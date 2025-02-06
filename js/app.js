Vue.component('v-button', {
  props: ["text"],
  data: function () {
    return { title: this.text }
  },
  template: "<div class='button-container'><a @click='handleClick'> <span>{{ text }}</span> </a></div>",
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
});

Vue.component('v-popup', {
  props: {
    header: {
      type: String,
      required: false,
      default: undefined,
    },
    text: {
      type: String,
      default: '',
    }
  },

  template: `<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div v-if="!!header" class="modal-header">
            <h3 class="mx-auto">{{ header }}</h3>
          </div>
          <div class="modal-description">
            <slot name="description"> {{ text }} </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <v-button
                class="modal-default-button"
                title="Close"
                text="Закрыть"
                @click="$emit('closed')"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`,
  methods: {

  }
});

Vue.component('v-playground', {
  data: function () {
    return {
      initialDistance: 0,
    }
  },

  // template: `<div class="border border-primary playground"><img class="spaceship" :style="{ top: game }"  src="../img/spaceship.png"></div>`,

  // methods: {
  //   getTransform: function () { return game.CurrentAltitude + "px" },
  // }
});

// Vue.component('v-input', {
//   props: ['text', 'value'],

//   template: `<input type="number" :value="value" @input="input">`,

//   methods: {
//     input(e) {
//       let value = e.target.value;

//       this.$emit('input', value);
//     }
//   }
// });

Vue.component('v-input', {
  props: ["text", "value", "min", "max", "isdisabled"],

  template: `<div class="input-group mb-2"><div class="input-group-prepend col-5">
  <span style="background: #000; color: #fff;" class="input-group-text" id="basic-addon1">{{ text }}</span>
</div>
  <input style="background: #000; color: #fff;" :disabled="isdisabled" :value="value" @input="input"class="form-control" type="number" min="min" max="max" aria-describedby="basic-addon1">
</div>`,

  methods: {
    input(e) {
      let value = e.target.value;

      this.$emit('input', value);
    }
  }
});

const app = new Vue({
  el: '#app',
  data: {
    version: 1.0,
    title: "",
    isShowingHowToPlayPopup: false,    
    isRunning: false,
    isPaused: true,
    isWin: false,

    deltaTime: 0,
    lastUpdate: 0,
    maxInterval: 40,

    acceleration: 1.6,
    currentSpeed: 0,
    startAltitude: 300,
    currentAltitude: 300,
    weightSpaceship: 1500,
    fuelCosts: 30,
    maxFuel: 500,
    currentFuel: 500,
    impulse: 10,
    timePassed: 0,
    timeLimit: 120,
    maxTouchSpeed: 20,
    loop: undefined,
    game: undefined,
    isEngineOn: false,
    isDeath: false,
  },

  computed: {
    CurFuel() {
      return Math.floor(this.currentFuel);
    },

    CurSpeed() {
      return Math.abs(this.currentSpeed).toFixed(2);
    },

    CurAltitude() {
      return Math.floor(this.currentAltitude).toFixed(2);
    },

    TimePassed() {
      return this.timePassed.toFixed(2);
    }
  },

  watch: {
    // Следим за изменением текущей позиции и обновляем её
    // currentPosition(newValue) {
    //   this.currentPosition = newValue;
    // }
  },
  mounted() {
    // Устанавливаем начальную позицию объекта
    // this.currentAltitude = this.startAltitude;
    // this.currentFuel = this.maxFuel;
    this.game = new Game();
    this.loop = new Loop(this.Update);
    
  },

  methods: {
    OpenPopup: function () {
      if (!this.isShowingHowToPlayPopup) {
        this.isShowingHowToPlayPopup = true;
      }
    },

    Update: function (correction) {
      this.currentAltitude = Number(this.currentAltitude);

      if (this.timePassed >= this.timeLimit) {
        this.isRunning = false;

        this.isWin = false;

        return;
      }

      if (this.currentAltitude <= 0) {
        this.isRunning = false;
        
        this.currentAltitude = 0;
        if (Math.abs(this.currentSpeed) <= this.maxTouchSpeed) {
          this.isWin = true;
        }
        else
          this.isWin = false;
          this.isDeath = true;
        return;
      }

      if (this.isEngineOn && this.currentFuel > 0) {
          this.currentFuel -= this.fuelCosts * correction;

          // this.speed += ((this.spaceshipMass + this.fuel) * this.g / this.fps - this.implulseMass * this.expirationSpeed / this.fps) / (this.spaceshipMass + this.fuel - this.implulseMass);
          this.currentSpeed += (((this.weightSpaceship + this.currentFuel) * this.acceleration / correction - this.impulse * this.fuelCosts / correction) / (this.weightSpaceship + this.currentFuel - this.impulse)) * correction / 10;

        
      }
      else {
          this.currentSpeed -= this.acceleration * correction * 10;
        // this.currentSpeed += Math.max(this.acceleration * correction, this.currentSpeed - this.acceleration / correction);

      }

      // this.currentAltitude = Math.max(this.currentAltitude + Math.floor(this.currentSpeed * correction), 0);

      this.currentAltitude += Number(this.currentSpeed * correction);

      this.timePassed += correction;
      
    },

    ClosePopup: function () {
      if (this.isShowingHowToPlayPopup) this.isShowingHowToPlayPopup = false;
    },

    Start: function () {
      if (!this.isRunning) {
        this.isRunning = true;
        this.isPaused = false;

        this.Init();
        this.loop.start();
      }
      else if (this.isPaused) {
        this.isPaused = false;

        this.loop.start();
      }
    },

    Stop: function () {
      if (this.isRunning || !this.isPaused) {
        this.isPaused = true;

        this.loop.stop();
      }
    },

    Init: function() {
      console.log("Во время инициализации start: " + this.startAltitude + " current: " + this.currentAltitude);
      this.startAltitude = this.currentAltitude;
      this.currentFuel = this.maxFuel;
    }
  },

  created() {
    document.addEventListener('keydown', (e) =>  {  if (e.keyCode == 32 && this.isRunning && !this.isPaused) this.isEngineOn = true; } );
    document.addEventListener('keyup', (e) => { if (e.keyCode == 32 && this.isRunning && !this.isPaused) this.isEngineOn = false; });
    document.addEventListener('keyup', (e) => { if (e.key == "Escape") if (this.isPaused) this.Start(); else this.Stop(); });
    // document.addEventListener('keyup', () => { this.StopButton(); })
  },

});
