function quizzes(state = [], action) {

    switch (action.type) {
        case 'LOAD_QUIZZES_SUCCESS':
            return action.data

        default:
            return state
    }
}

export default quizzes
