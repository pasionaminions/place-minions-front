import { DRAW_POINT, GET_POINTS, GET_COLORS } from "../action/action-types";

let array = [];
        for (let i = 0; i < 100; i++) {
            let fila = [];
            for (let j = 0; j < 100; j++) {
                fila[j] = 0;
            }
            array.push(fila);
        }

const initialState = {
    Points : array,
    Colors : []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DRAW_POINT:
            return Object.assign({}, state, { });
        case GET_POINTS:
            return Object.assign({}, state, { Points: action.payload});
        case GET_COLORS:
            return Object.assign({}, state, {Colors:action.payload})
        default:
            return state;
    }
}

export default rootReducer;