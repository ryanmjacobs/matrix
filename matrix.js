/**
 * matrix_sim/matrix.js
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
    if (x < 0 || x >= WIDTH)
        throw new Error("x < 0 or x >= WIDTH where x = " + x);
    if (y < 0 || y >= HEIGHT)
        throw new Error("y < 0 or y >= HEIGHT where y = " + y);

    var led = document.getElementById("led-" + x + "-" + y);
    led.style.backgroundColor = color;
}

function clear() {
    for (var y = 0; y < HEIGHT; y++) {
        for (var x = 0; x < WIDTH; x++) {
            set_led(x, y, OFF);
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
