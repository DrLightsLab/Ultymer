let timer = {
    template: '<div id="counter"><div class="values">00:00:00</div><div><button class="startButton">Start</button><button class="resetButton">Lap</button><button class="pauseButton">Pause</button><button class="stopButton">Stop</buttoN></div><div><div class="previousUlts">Previous Ults</div><div class="previousUltTime"></div></div></div>'
}

let app = new Vue({
    el: '#timer',
    components : {
        'timer': timer
    }
})
