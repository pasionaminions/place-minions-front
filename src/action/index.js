import { DRAW_POINT, GET_POINTS, GET_COLORS } from "./action-types";

export function drawPoint(json) {
    return {type: DRAW_POINT, payload: json}
}

export function getPoints(json) {
    return {type: GET_POINTS, payload: json}
}

export function getColors(json) {
    return {type: GET_COLORS, payload: json}
}