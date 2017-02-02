import {firebaseDB} from '../firebase/'
const statusRef = firebaseDB.ref('globalStatus')

function syncGlobalStatus() {
    return dispatch => {
        statusRef.on('value', function(snapshot) {
            dispatch(loadGlobalStatusSuccess(snapshot))
        })
    }
}

function loadGlobalStatusSuccess(snapshot) {
    return {
        type: 'LOAD_GLOBAL_STATUS_SUCCESS',
        data: snapshot.val()
    }
}

function selectQuiz(index) {
    const newStatus = {
        currentQuizIndex: index,
        step: 1
    }
    statusRef.update(newStatus)
    return {
        type: 'SELECT_QUIZ',
        data: index
    }
}

function selectStep(stepNum) {
    const newStatus = {
        step: stepNum
    }
    statusRef.update(newStatus)

    return {
        type: 'SELECT_STEP',
        data: stepNum
    }
}

module.exports = {
    syncGlobalStatus,
    selectQuiz,
    selectStep
}
