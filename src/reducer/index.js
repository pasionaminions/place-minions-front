import { DRAW_POINT, GET_POINTS } from "../action/action-types";

const initialState = {
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case DRAW_POINT:
            return Object.assign({}, state, { });
        case GET_POINTS:
            return Object.assign({}, state, { });
        default:
            return state;
    }
}

export default rootReducer;