import React, {Component} from 'react'
import {Constants} from '../utils'

class StepList extends Component {
    render() {
        const {globalStatus, onStepSelected} = this.props
        let stepList = []
        Object.keys(Constants.steps).forEach((key) =>
            stepList.push(
                <input type="button"
                    className={globalStatus.step === Constants.steps[key] ? "selectedStep" : ""}
                    value={this.getStepText(Constants.steps[key])}
                    onClick={() => onStepSelected(Constants.steps[key])}/>
            )
        )

        return (<div className="formText">{stepList}</div>)
    }

    getStepText(stepNum) {
        switch (stepNum) {
            case Constants.steps.BEFORE_GAME:
                return "開始前"
            case Constants.steps.ANSWER_TIME:
                return "回答タイム"
            case Constants.steps.SHOW_POLL:
                return "回答グラフ"
            case Constants.steps.SHOW_ANSWER:
                return "正解表示"
            case Constants.steps.SHOW_RANKING:
                return "順位表示"
            default:
                return ""
        }
    }
}

export default StepList
