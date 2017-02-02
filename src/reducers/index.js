import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import globalStatus from './globalStatus'
import quizzes from './quizzes'

const rootReducer = combineReducers({globalStatus, quizzes, routing: routerReducer})

export default rootReducer
