import React, { Component } from 'react'

class QuizList extends Component{
  render() {
    const {globalStatus, quizzes, onQuizSelected} = this.props
    const quizList = quizzes.map((quiz, index) =>
            <div>
                <input type="radio"
                    onChange={() => onQuizSelected(index)}
                    checked={index === globalStatus.currentQuizIndex}
                    value={index}/>
                {quiz.text}
            </div>
        )

    return(<form>{quizList}</form>)
  }
}

export default QuizList
