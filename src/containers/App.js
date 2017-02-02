import React, {Component} from 'react'
import {connect} from 'react-redux'
import {syncGlobalStatus, loadQuizzes} from '../actions'

class App extends Component {

    componentDidMount() {
        const {dispatch} = this.props
        dispatch(syncGlobalStatus())
        dispatch(loadQuizzes())
    }

    render() {
        return (<div>{this.props.children}</div>)
    }
}

    export default connect()(App)
