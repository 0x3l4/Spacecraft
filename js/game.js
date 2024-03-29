// import Spaceship from "./spaceship.js";
// import SpaceshipBuilder from "./spaceshipBuilder";
// import VueSpaceshipBuilder from "./vueSpaceshipBuilder";
// import SpaceshipBuilderDirector from "./spaceshipBuilderDirector";

app = new Vue({
    el: '#app',
    data: {
        version: 1.0,
        isShowingHowToPlayPopup: false,
        isEngineOn: false,
    },

    methods: {
        OpenPopup: function() {

        },

        Start: function() {
            this.message = 'Что?';
        },

        EngineOn: function() {

        }
    }
});
