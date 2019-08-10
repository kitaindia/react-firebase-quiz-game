import React, {Component} from "react"
import {connect} from 'react-redux'
import {selectQuiz, selectStep} from '../actions'
import {QuizList, StepList} from '../components'

// ゲーム進行の操作用のコンテナ
class Controller extends Component {

    render() {
        const {globalStatus, quizzes} = this.props

        return (
            <div className="screenFrame">
                {<StepList
                    globalStatus={globalStatus}
                    onStepSelected={this.onStepSelected.bind(this)}/>}
                {<QuizList
                    globalStatus={globalStatus}
                    quizzes={quizzes}
                    onQuizSelected={this.onQuizSelected.bind(this)}/>}
            </div>
        )
    }

    onQuizSelected(quizIndex) {
        const {dispatch} = this.props
        dispatch(selectQuiz(quizIndex))
    }

    onStepSelected(stepNum) {
        const {dispatch} = this.props
        dispatch(selectStep(stepNum))
    }
}

const mapStateToProps = (state) => {
    return {
        globalStatus: state.globalStatus ? state.globalStatus : {},
        quizzes: state.quizzes ? state.quizzes : {}
    }
}

export default connect(mapStateToProps)(Controller)
