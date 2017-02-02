import React, {Component} from 'react'
import {ChartUtils} from '../utils'
import {Chart} from 'react-google-charts'
import {firebaseDB} from '../firebase/'

// 総合ランキング表示
class Ranking extends Component {

    componentDidMount() {
        const answersRef = firebaseDB.ref('answers')
        answersRef.once('value', (snapshot) => {
            this.setState({answers: snapshot.val()})
        })
    }

    render() {
        const {quizzes} = this.props
        const answers = this.state ? this.state.answers : []
        const rankingData = answers ? ChartUtils.createRanking(answers, quizzes) : []

        return (
            <div>
                <h1>総合順位</h1>
                <Chart chartType="BarChart" graph_id="BarChart"
                    data = {rankingData}
                    options = {{
                        backgroundColor: "transparent",
                        legend: {
                            'position': 'none'
                        },
                        chartArea: {
                            top: 0,
                            width: "100%",
                            height: "100%",
                            left: "20%"
                        },
                        annotations: {
                            textStyle: {
                                fontName: 'Meiryo'
                            }
                        },
                        vAxis: {
                            textStyle: {
                                fontName: 'Meiryo'
                            }
                        },
                        isStacked: true
                    }}
                    width = {window.innerWidth * 0.7}
                    height = {window.innerHeight * 0.7}/>
            </div>
        )
    }
}

export default Ranking
