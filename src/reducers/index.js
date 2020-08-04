let initialState = {
    counter : 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBER':
            return {counter : state.counter + action.number}
        case 'SUB_NUMBER':
            return {counter : state.counter - action.number}
        case 'RESET_TO_ZERO':
            return {counter : state.counter - action.number}
        default:
            return state
    }
}