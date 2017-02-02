import React, {Component} from 'react'

// 正解表示
class AnsDisplay extends Component {
    render() {
        const {currentQuiz} = this.props

        return (
            <div>
                {currentQuiz &&
                    <h1>
                        {(currentQuiz.ansIndex + 1) + ". " +
                            currentQuiz.answers[currentQuiz.ansIndex]}
                    </h1>
                }
            </div>
        )
    }
}

export default AnsDisplay
