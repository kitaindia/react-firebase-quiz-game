import React, {Component} from 'react'

const ansRow = (answer, index) => {
    return (
        <div className={"screenPanel ansBtn " + ((index + 1) % 2 === 1 ? 'fLeft ' : 'fRight ')}>
            <img src={answer.image} alt={answer.text} />
            <p　className="choice">{answer.text}</p>
        </div>
    );
}

// クイズ選択肢のリスト
class AnsList extends Component {
    render() {
        const {currentQuiz} = this.props
        const ansList = currentQuiz ? currentQuiz.answers.map((answer, index) =>
            ansRow(answer, index)
        ) : null;

        return (
            <div>
                {ansList && [
                    <h1 key="ansTitle"> Q. {currentQuiz.text}</h1>,
                    <ol key="ansList"><h2>{ansList}</h2></ol>
                ]}
            </div>
        )
    }
}

export default AnsList
