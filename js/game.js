// import Spaceship from "./spaceship.js";
// import SpaceshipBuilder from "./spaceshipBuilder";
// import VueSpaceshipBuilder from "./vueSpaceshipBuilder";
// import SpaceshipBuilderDirector from "./spaceshipBuilderDirector";


// var game = new Vue({
//     el: '#app',
//     date: {
//         isEngineOn: "false",

//     },

//     methods: {
//         Start() {
//             this.message = 'Что?'
//         },

//         EngineOn() {

//         }
//     }
// });


class Game {
    static app = new Vue({
        el: '#app',
        date: {
            isEngineOn: false,
            message: "Hello!"
        },
    
        methods: {
            Start: function() {
                this.message = 'Что?';
            },
    
            EngineOn: function() {
    
            }
        }
    });;

    static Main() {
        console.log("Запуск Main");

        let spaceshipBuilder = new VueSpaceshipBuilder();
        let spaceshipDirector = new SpaceshipBuilderDirector(spaceshipBuilder);
        let spaceship = spaceshipDirector.GetSpaceship();
    }
}

Game.Main();
