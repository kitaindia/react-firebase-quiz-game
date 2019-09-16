import React, {Component} from 'react'

const number = (index) => {
    const numText = ['①', '②', '③', '④'][index];
    return (
        <p className={`num${index}`}>{numText}</p>
    );
}

const ansRow = (answer, index) => {
    return (
        <div key={index} className={"screenPanel ansBtn " + ((index + 1) % 2 === 1 ? 'fLeft ' : 'fRight ')}>
            <img src={answer.image} alt={answer.text} />
            {number(index)}
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
