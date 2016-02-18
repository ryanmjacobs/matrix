/**
 * matrix_sim/main.js
 */

const initial_state = {
    x: 0,
    y: 1,

    delay: 200,
    direction: true // aka down
}

function advance_state(state) {
    clear();

    if (state.y <= 0 || state.y >= HEIGHT-1) {
        state.direction = !state.direction;
    }

    if (state.direction) {
        set_row(state.y++, RED);
    } else {
        set_row(state.y--, RED);
    }

    return state;
}

var state = Object.create(initial_state);
var i = setInterval(function() {
    state = advance_state(state);

    console.log(state);

    if (state.done)
        clearInterval(i);
}, state.delay);
