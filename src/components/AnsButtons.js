import React, {Component} from 'react'
import Constants from '../utils/Constants'
import {connect} from 'react-redux'
import {initSelectedAnsNum, addSecound} from '../actions'
import {firebaseDB} from '../firebase/'

// 回答画面
class AnsButtons extends Component {

    getMessage(step, selectedAnsNum, quiz) {
        if (selectedAnsNum > 0) {
            return selectedAnsNum + ". 「" + quiz.answers[selectedAnsNum - 1] + "」に回答しました"
        }

        switch (step) {
            case Constants.steps.ANSWER_TIME:
                return '回答してください'

            default:
                return '現在回答できません'
        }
    }

    onAnsSelected(ansNum, quizIndex, name) {
        let ans = {}
        ans[quizIndex] = ansNum - 1
        firebaseDB.ref('answers/' + name).update(ans)
        this.setState({selectedAnsNum: ansNum})
    }

    render() {
        const {name, globalStatus, currentQuiz} = this.props
        const selectedAnsNum = this.state ? this.state.selectedAnsNum : -1
        const isButtonActive = (globalStatus.step == Constants.steps.ANSWER_TIME)

        const ansButtons = [1, 2, 3, 4].map((ansNum) =>
            <input type="button"
                className = {
                  "ansBtn " + (ansNum % 2 == 1 ? 'fLeft ' : 'fRight ') +
                  (isButtonActive ? "" : "disabled ") +
                  (selectedAnsNum == ansNum ? "selected" : "")}
                value = {ansNum}
                disabled = {isButtonActive ? "" : "disabled"}
                onClick = {() => this.onAnsSelected(ansNum, globalStatus.currentQuizIndex, name)}/>)

        return (
            <div>
                <h1 className="formName">{name}さん</h1>
                <hr className="longMarginBtm"></hr>
                {ansButtons}
                <h2 className="ansText">
                    {this.getMessage(globalStatus.step, selectedAnsNum, currentQuiz)}
                </h2>
            </div>
        )
    }
}

export default AnsButtons
