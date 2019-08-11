import React, {Component} from 'react'

// クイズ選択肢のリスト
class AnsList extends Component {
    render() {
        const {currentQuiz} = this.props
        const ansList = currentQuiz ? currentQuiz.answers.map((ansText, index) =>
            <li key={index}>
                {ansText}
            </li>) : null

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
