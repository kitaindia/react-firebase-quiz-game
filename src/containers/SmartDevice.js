import React, {Component, PropTypes} from "react"
import {connect} from 'react-redux'
import {RegForm, AnsButtons} from '../components'
import {Constants} from '../utils'
import cookie from 'react-cookie'

// 回答ページ用のコンテナ、クイズ参加者はスマートフォンで操作
class SmartDevice extends Component {

    onRegister(name) {
        // クイズ参加者の名前をクッキーに保存
        cookie.save(Constants.cookie.NAME, name, {
            path: '/',
            maxAge: Constants.cookie.MAX_AGE
        })
        this.forceUpdate()
    }

    render() {
        const {globalStatus, quizzes} = this.props
        const currentQuiz = quizzes[globalStatus.currentQuizIndex]
        const name = cookie.load(Constants.cookie.NAME)

        return (
            <div className="smartDeviceFrame">
                {!name &&
                    <RegForm
                        onRegister = {this.onRegister.bind(this)}/>}
                {name &&
                    <AnsButtons
                        name = {name}
                        globalStatus = {globalStatus}
                        currentQuiz = {currentQuiz}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalStatus: state.globalStatus ? state.globalStatus : {},
        quizzes: state.quizzes ? state.quizzes : {}
    }
}

export default connect(mapStateToProps)(SmartDevice)
