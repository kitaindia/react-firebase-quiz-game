import React, { Component } from 'react'

class QuizList extends Component{
  render() {
    const {globalStatus, quizzes, onQuizSelected} = this.props
    const quizList = quizzes.map((quiz, index) =>
            <div key={index}>
                <input
                    id={index}
                    type="radio"
                    onChange={() => onQuizSelected(index)}
                    checked={index === globalStatus.currentQuizIndex}
                    value={index}
                />
                <label htmlFor={index}>{quiz.text}</label>
            </div>
        )

    return(<form>{quizList}</form>)
  }
}

export default QuizList
