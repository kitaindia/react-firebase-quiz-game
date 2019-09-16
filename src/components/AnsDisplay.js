import React, {Component} from 'react'

const number = (index) => {
    const numText = ['①', '②', '③', '④'][index];
    return (
        <p className={`num${index}`}>{numText}</p>
    );
}

const ansRow = (answer, index, ansIndex) => {
    return (
        <div key={index} className={"screenPanel ansBtn " + ((index + 1) % 2 === 1 ? 'fLeft ' : 'fRight ')}>
            <img src={answer.image} alt={answer.text} className={(index === ansIndex) ? "" : "unselected"} />
            {number(index)}
            <p　className="choice">{answer.text}</p>
        </div>
    );
}

// 正解表示
class AnsDisplay extends Component {
    render() {
        const {currentQuiz} = this.props
        const ansList = currentQuiz ? currentQuiz.answers.map((answer, index) =>
            ansRow(answer, index, currentQuiz.ansIndex)
        ) : null;

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
