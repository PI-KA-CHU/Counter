import {
    createAction
} from '@reduxjs/toolkit'
import {
    ADD_NUMBER,
    SUB_NUMBER,
    RESET_TO_ZERO
} from './actionTypes'

export const addNumberAction = createAction(ADD_NUMBER, (number) => ({
    payload: number
}))
export const subNumberAction = createAction(SUB_NUMBER, (number) => ({
    payload: number
}))
export const resetToZeroAction = createAction(RESET_TO_ZERO, (number) => ({
    payload: number
}))