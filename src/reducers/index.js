import {
    ADD_NUMBER,
    SUB_NUMBER,
    RESET_TO_ZERO
} from "../action/actionTypes"
import {
    createReducer
} from '@reduxjs/toolkit'

let initialState = {
    totalCount: 0
}

export default createReducer(initialState, {
    [ADD_NUMBER]: (state, action) => ({
        totalCount: state.totalCount + action.payload
    }),
    [SUB_NUMBER]: (state, action) => ({
        totalCount: state.totalCount - action.payload
    }),
    [RESET_TO_ZERO]: (state, action) => ({
        totalCount: state.totalCount - action.payload
    })
})