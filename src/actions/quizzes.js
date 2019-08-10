import {firebaseDB} from '../firebase/'

function loadQuizzes() {
    return dispatch => {
        firebaseDB.ref('quizzes').once('value', function(snapshot) {
            dispatch(loadQuizzesSuccess(snapshot))
        })
    }
}

function loadQuizzesSuccess(snapshot) {
    return {
        type: 'LOAD_QUIZZES_SUCCESS',
        data: snapshot.val()
    }
}

module.exports = {
    loadQuizzes
}
