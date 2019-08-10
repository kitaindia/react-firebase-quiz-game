import React, {Component} from "react"
import {connect} from 'react-redux'
import {AnsList, AnsDisplay, AnsPoll, Ranking, TitleDisplay} from '../components'
import {Constants} from '../utils'

// クイズ出題用のコンテナ、会場のスクリーンで表示
class Screen extends Component {

    render() {
        const {globalStatus, quizzes} = this.props
        const currentStep = globalStatus.step
        const currentQuiz = quizzes[globalStatus.currentQuizIndex]

        return (
            <div className="screenFrame">
                {(currentStep === Constants.steps.BEFORE_GAME) &&
                    <TitleDisplay/>}
                {(currentStep === Constants.steps.ANSWER_TIME) &&
                    <AnsList
                      currentQuiz={currentQuiz}/>}
                {(currentStep === Constants.steps.SHOW_POLL) &&
                    <AnsPoll
                        currentQuiz={currentQuiz}
                        quizIndex={globalStatus.currentQuizIndex}/>}
                {(currentStep === Constants.steps.SHOW_ANSWER) &&
                    <AnsDisplay
                        currentQuiz={currentQuiz}/>}
                {(currentStep === Constants.steps.SHOW_RANKING) &&
                    <Ranking
                        quizzes={quizzes}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalStatus: state.globalStatus ? state.globalStatus : {},
        quizzes: state.quizzes ? state.quizzes : {}
    }
}

export default connect(mapStateToProps)(Screen)
