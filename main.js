/**
 * matrix_sim/main.js
 */

const WIDTH  = 5;
const HEIGHT = 7;
const RED    = "#f00";
const GREEN  = "#0f0";
const OFF    = "#666";


/* Setup DOM */
var matrix = document.getElementById("matrix");
for (var y = 0; y < HEIGHT; y++) {
    for (var x = 0; x < WIDTH; x++) {
        var led = document.createElement("div");
        led.className = "led";
        led.id = "led-" + x + "-" + y;
        matrix.appendChild(led);
    }
    matrix.appendChild(document.createElement("br"));
}

function set_led(x, y, color) {
    var led = document.getElementById("led-" + x + "-" + y);
    led.style.backgroundColor = color;
}

function reset(x, y, color) {
    for (var y = 0; y < HEIGHT; y++) {
        for (var x = 0; x < WIDTH; x++) {
            set_led(x, y, color);
        }
    }
}

function set_row(y, color) {
    for (var x = 0; x < WIDTH; x++) {
        set_led(x, y, color);
    }
}

function set_column(x, color) {
    for (var y = 0; y < HEIGHT; y++) {
        set_led(x, y, color);
    }
}
