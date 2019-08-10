import React, {Component} from 'react'

// クイズ参加者登録フォーム
class RegForm extends Component {
    render() {
        const {onRegister} = this.props
        let input

        return (
            <div>
                <h2 className="formText">あなたのお名前をご登録ください。</h2>
                <form action="">
                    <h2 className="formName">お名前</h2>
                    <input type="text"
                        ref={node => {input = node}}/>
                    <br/>
                    <input className="regBtn" type="button" value="登録"
                        onClick={() => onRegister(input.value)}/>
                </form>
            </div>
        )
    }
}

export default RegForm
