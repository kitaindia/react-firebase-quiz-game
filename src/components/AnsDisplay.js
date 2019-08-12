import React, {Component} from 'react'

// 正解表示
class AnsDisplay extends Component {
    render() {
        const {currentQuiz} = this.props

        const ansList = currentQuiz ? currentQuiz.answers.map((answer, index) =>
            <input
                className={
                  "screenPanel ansBtn "
                  + ((index + 1) % 2 === 1 ? "fLeft " : "fRight ")
                  + ((index === currentQuiz.ansIndex) ? "selected" : "")
                }
                key={index}
                value={`${index + 1}. ${answer.text}`}
                type="button"
                checked={index === 1}
                style={{
                    backgroundImage: "url(" + answer.image + ")",
                    backgroundSize: "cover"
                }}
            />) : null;

        return (
            <div>
                {ansList && [
                    <h1 key="ansTitle">正解は {`${currentQuiz.ansIndex + 1}. ${currentQuiz.answers[currentQuiz.ansIndex].text}`}</h1>,
                    <ol key="ansList"><h2>{ansList}</h2></ol>
                ]}
            </div>
        )
    }
}

export default AnsDisplay
