const fs = require('fs');

//let timer = '<div id="counter"><div class="values">00:00:00</div><div><button class="startButton">Start</button><button class="resetButton">Lap</button><button class="pauseButton">Pause</button><button class="stopButton">Stop</buttoN></div><div><div class="previousUlts">Previous Ults</div><div class="previousUltTime"></div></div></div>'
let timer = fs.readFileSync('./app/ultymer/html/timer.html');
console.log(timer);

Vue.component('player', {
    props: ['timer'],
    template: timer
})

let app = new Vue({
    el: '#timer',
    data: {

    }
})
