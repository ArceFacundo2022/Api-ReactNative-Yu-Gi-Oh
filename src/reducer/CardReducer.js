import { useReducer } from "react";

export const CardReducer = (state, action) => {
    switch (action.type) {
        case "[Cargar]":
            return action.data
        case "[Hide]":
            const hideCard = state
            hideCard[action.index].hidden = true
            return hideCard
        default:
            return state
    }
}