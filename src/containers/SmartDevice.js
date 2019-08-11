import React, {Component } from "react";
import {connect} from 'react-redux';
import {RegForm, AnsButtons} from '../components';
import {Constants} from '../utils';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

// 回答ページ用のコンテナ、クイズ参加者はスマートフォンで操作
class SmartDevice extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            name: cookies.get(Constants.cookie.NAME)
        };
    }

    onRegister(name) {
        const { cookies } = this.props;
        // クイズ参加者の名前をクッキーに保存
        cookies.set(Constants.cookie.NAME, name, {
            path: '/',
            maxAge: Constants.cookie.MAX_AGE
        });
        this.forceUpdate();
    }

    render() {
        const {globalStatus, quizzes, cookies} = this.props;
        const currentQuiz = quizzes[globalStatus.currentQuizIndex];
        const name = cookies.get(Constants.cookie.NAME);

        return (
            <div className="smartDeviceFrame">
                {!name &&
                    <RegForm
                        onRegister={this.onRegister.bind(this)}/>}
                {name &&
                    <AnsButtons
                        name={name}
                        globalStatus={globalStatus}
                        currentQuiz={currentQuiz}/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        globalStatus: state.globalStatus ? state.globalStatus : {},
        quizzes: state.quizzes ? state.quizzes : {}
    }
}

export default connect(mapStateToProps)(withCookies(SmartDevice));
