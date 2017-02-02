function globalStatus(state = [], action) {

    switch (action.type) {
        case 'LOAD_GLOBAL_STATUS_SUCCESS':
            return action.data

        case 'SELECT_QUIZ':
            return Object.assign({}, state, {step: 1, currentQuizIndex: action.data})

        case 'SELECT_STEP':
            return Object.assign({}, state, {step: action.data})

        default:
            return state
    }
}

export default globalStatus
