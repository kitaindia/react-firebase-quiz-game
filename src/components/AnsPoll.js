import React, {Component} from 'react'
import {Chart} from 'react-google-charts'
import {firebaseDB} from '../firebase/'
import {ChartUtils} from '../utils'
const answersRef = firebaseDB.ref('answers')

// 選択肢ごとの回答数の表示
class AnsPoll extends Component {

    componentDidMount() {
        answersRef.once('value', (snapshot) => {
            this.setState({answers: snapshot.val()})
        })
    }

    render() {
        const {currentQuiz, quizIndex} = this.props
        const answers = this.state ? this.state.answers : []
        const pollData = ChartUtils.createPoll(answers, quizIndex, currentQuiz)

        return (
            <div>
                <h1>回答結果: {currentQuiz.text}</h1>
                <Chart chartType="BarChart" graph_id="BarChart"
                    data = {pollData}
                    options = {{
                    backgroundColor: "transparent",
                    legend: {
                        'position': 'none'
                    },
                    chartArea: {
                        width: "100%",
                        height: "100%"
                    },
                    annotations: {
                        textStyle: {
                            fontName: 'Meiryo'
                        }
                    },
                    vAxis: {
                        textPosition: "in",
                        textStyle: {
                            fontName: 'Meiryo'
                        }
                    }
                }}
                width = {window.innerWidth * 0.8}
                height = {window.innerHeight * 0.6}/>
            </div>
        )
    }
}

export default AnsPoll
