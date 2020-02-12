import * as REST from "../lib/rest";
import * as ACTIONS from "../action"

const url = "https://wickapi.azurewebsites.net/api/pasionausers";

export function getPoints() {
    return function (dispatch) {
        return REST.get(url).then((json) => dispatch(ACTIONS.getPoints(json)))    
    }
}

export function getColors() {
    return function (dispatch) {
        return REST.get(url).then((json) => dispatch(ACTIONS.getColors(json)))    
    }
}

export function drawPoint(point) {
    return function (dispatch) {
        return REST.post(url, point).then((json) => dispatch(ACTIONS.drawPoint(json)))    
    }
}