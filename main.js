/**
 * matrix_sim/main.js
 */

const initial_state = {
    x: 0,
    y: HEIGHT-1,

    done: false,
    delay: 500
}

function advance_state(state) {
    if (state.y < 0) {
        clear();
        return Object.create(initial_state);
    }

    set_row(state.y--, RED);

    return state;
}

var state = Object.create(initial_state);
var i = setInterval(function() {
    state = advance_state(state);

    console.log(state);

    if (state.done)
        clearInterval(i);
}, state.delay);
